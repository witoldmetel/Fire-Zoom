import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';

type StartMeetingProps = {
	userName?: string;
	roomId?: string;

	userNameHandler: (userName: string) => void;
	roomIdHandler: (roomId: string) => void;
	joinRoomHandler: () => void;
};

export function StartMeeting({
	userName,
	roomId,
	userNameHandler,
	roomIdHandler,
	joinRoomHandler,
}: StartMeetingProps) {
	return (
		<View>
			<View style={styles.info}>
				<TextInput
					style={styles.input}
					placeholder="Enter your name"
					placeholderTextColor="#767476"
					value={userName}
					onChangeText={(userName) => userNameHandler(userName)}
				/>
			</View>
			<View style={styles.info}>
				<TextInput
					style={styles.input}
					placeholder="Enter room id"
					placeholderTextColor="#767476"
					value={roomId}
					onChangeText={(roomId) => roomIdHandler(roomId)}
				/>
			</View>

			<View style={{ alignItems: 'center' }}>
				<TouchableOpacity style={styles.button} onPress={joinRoomHandler}>
					<Text style={styles.buttonTitle}>Start Meeting</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	info: {
		width: '100%',
		height: 50,
		backgroundColor: '#373538',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#484648',
		padding: 12,
		justifyContent: 'center',
	},
	input: {
		color: '#fff',
		fontSize: 18,
	},
	button: {
		height: 50,
		width: 350,
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0470DC',
		borderRadius: 20,
	},
	buttonTitle: {
		fontSize: 16,
		color: '#fff',
		fontWeight: '700',
	},
});
