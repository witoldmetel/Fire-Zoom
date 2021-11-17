import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function MeetingRoom() {
	const [name, setName] = useState<string>();
	const [roomId, setRoomId] = useState<string>();

	return (
		<View style={styles.root}>
			<View>
				<View style={styles.info}>
					<TextInput
						style={styles.input}
						placeholder="Enter your name"
						placeholderTextColor="#767476"
						value={name}
						onChangeText={(name) => setName(name)}
					/>
				</View>
				<View style={styles.info}>
					<TextInput
						style={styles.input}
						placeholder="Enter room id"
						placeholderTextColor="#767476"
						value={roomId}
						onChangeText={(roomId) => setRoomId(roomId)}
					/>
				</View>

				<View style={{ alignItems: 'center' }}>
					<TouchableOpacity style={styles.button} onPress={() => {}}>
						<Text style={styles.buttonTitle}>Start Meeting</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: '#1c1c1c',
		flex: 1,
	},
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

export default MeetingRoom;
