import React, { useState } from 'react';
import {
	SafeAreaView,
	View,
	Text,
	StyleSheet,
	Pressable,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type ChatProps = {
	modalHandler: (modalVisible: boolean) => void;
};

export function Chat({ modalHandler }: ChatProps) {
	const [messageText, setMessageText] = useState<string>();

	return (
		<SafeAreaView style={styles.root}>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={{ flex: 1 }}
			>
				<View style={styles.header}>
					<Pressable onPress={() => modalHandler(false)}>
						<Text style={styles.heading}>Close</Text>
					</Pressable>
					<Text style={styles.heading}>Chat</Text>
					<Entypo name="bell" size={25} color="#efefef" />
				</View>

				<View style={styles.chatMessages}></View>

				<View style={styles.formContainer}>
					<Text style={{ color: '#fff' }}>Send to Everyone</Text>
					<View style={styles.chatForm}>
						<TextInput
							style={styles.textInput}
							placeholder="Tap here to chat"
							placeholderTextColor="#595859"
							value={messageText}
							onChangeText={(text) => setMessageText(text)}
						/>

						<TouchableOpacity
							style={{
								...styles.sendButton,
								backgroundColor: messageText ? '#0B71EB' : '#373838',
							}}
							disabled={!messageText}
						>
							<FontAwesome name="send" size={18} color="#efefef" />
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#1c1c1c',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		paddingHorizontal: 10,
	},
	heading: {
		color: '#fff',
		fontSize: 20,
	},
	chatMessages: {
		flex: 1,
	},
	formContainer: {
		borderColor: '#2f2f2f',
		borderTopWidth: 1,
		padding: 12,
	},
	chatForm: {
		flexDirection: 'row',
	},
	textInput: {
		flex: 1,
		height: 40,
		color: '#efefef',
		borderColor: '#595859',
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		marginTop: 12,
	},
	sendButton: {
		height: 40,
		width: 40,
		marginTop: 12,
		marginLeft: 12,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
});
