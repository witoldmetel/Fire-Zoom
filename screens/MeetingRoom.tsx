import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Camera } from 'expo-camera';

import { StartMeeting, CameraView } from '../components';

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

function MeetingRoom() {
	const [name, setName] = useState<string>();
	const [roomId, setRoomId] = useState<string>();
	const [activeUsers, setActiveUsers] = useState([]);
	const [startCamera, setStartCamera] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		const API_URL = 'http://192.168.0.161:3001';
		socket = io(API_URL);

		socket.on('connection', () => console.log('connected'));
		socket.on('all-users', (users) => {
			setActiveUsers(users);
		});
	}, []);

	const cameraHandler = async () => {
		const { status } = await Camera.requestCameraPermissionsAsync();

		if (status === 'granted') {
			setStartCamera(true);
		} else {
			setStartCamera(false);

			Alert.alert('Access to camera denied');
		}
	};

	const joinRoom = () => {
		cameraHandler().then(() => {
			socket.emit('join-room', { roomId, userName: name });

			setName('');
			setRoomId('');
		});
	};

	return (
		<View style={styles.root}>
			{startCamera ? (
				<CameraView
					activeUsers={activeUsers}
					modalVisible={modalVisible}
					modalHandler={setModalVisible}
				/>
			) : (
				<StartMeeting
					userName={name}
					roomId={roomId}
					userNameHandler={setName}
					roomIdHandler={setRoomId}
					joinRoomHandler={joinRoom}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: '#1c1c1c',
		flex: 1,
	},
});

export default MeetingRoom;
