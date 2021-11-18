import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

type ChatProps = {
	modalHandler: (modalVisible: boolean) => void;
};

export function Chat({ modalHandler }: ChatProps) {
	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.header}>
				<Pressable onPress={() => modalHandler(false)}>
					<Text style={styles.heading}>Close</Text>
				</Pressable>
				<Text style={styles.heading}>Chat</Text>
				<Entypo name="bell" size={25} color="#efefef" />
			</View>

			<Text>Messages</Text>

			<Text>Type message</Text>
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
});
