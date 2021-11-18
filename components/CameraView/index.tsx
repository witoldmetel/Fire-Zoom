import React from 'react';
import {
	View,
	StyleSheet,
	SafeAreaView,
	Text,
	Modal,
	Alert,
	TouchableOpacity,
} from 'react-native';
import { Camera } from 'expo-camera';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { actionButtons } from './constants';
import { Chat } from '../Chat';

type CameraViewProps = {
	activeUsers: { userName: string }[];
	modalVisible: boolean;

	modalHandler: (modalVisible: boolean) => void;
};

export function CameraView({
	activeUsers,
	modalVisible,
	modalHandler,
}: CameraViewProps) {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Modal
				animationType="slide"
				transparent={false}
				presentationStyle="fullScreen"
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');

					modalHandler(!modalVisible);
				}}
			>
				<Chat modalHandler={modalHandler} />
			</Modal>

			<View style={styles.usersWrapper}>
				<View style={styles.cameraWrapper}>
					<Camera
						style={{
							...styles.activeUserWrapper,
							width: !activeUsers.length ? '100%' : 200,
							height: !activeUsers.length ? '100%' : 200,
						}}
						type="front"
					/>

					{activeUsers.map((user, idx) => (
						<View key={idx} style={styles.activeUserWrapper}>
							<Text style={{ color: '#fff' }}>{user.userName}</Text>
						</View>
					))}
				</View>
			</View>

			<View style={styles.footer}>
				{actionButtons.map((button) => (
					<TouchableOpacity
						key={button.id}
						style={styles.button}
						// @todo: Need refactor press handling
						onPress={
							button.title === 'Chat' ? () => modalHandler(true) : () => {}
						}
					>
						<FontAwesome
							name={button.icon}
							size={24}
							color={button.color ?? '#efefef'}
						/>
						<Text style={styles.buttonText}>{button.title}</Text>
					</TouchableOpacity>
				))}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	usersWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
	},
	cameraWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	activeUserWrapper: {
		borderColor: 'gray',
		borderWidth: 1,
		width: 200,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
	},
	footer: { flexDirection: 'row', justifyContent: 'space-around' },
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		marginTop: 20,
	},
	buttonText: {
		color: '#fff',
		marginTop: 10,
	},
});
