import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Camera } from 'expo-camera';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { actionButtons } from './constants';

type CameraViewProps = {
	activeUsers: { userName: string }[];
};

export function CameraView({ activeUsers }: CameraViewProps) {
	return (
		<SafeAreaView style={{ flex: 1 }}>
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
					<TouchableOpacity key={button.id} style={styles.button}>
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
