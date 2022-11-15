import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

export function Header() {
	return (
		<View style={styles.root}>
			<Entypo name="notification" size={30} color="#efe" />
			<Text style={styles.heading}>Meet & Chat</Text>
			<Entypo name="new-message" size={30} color="#efe" />
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 20,
		paddingHorizontal: 10,
	},
	heading: {
		color: '#efe',
		fontSize: 20,
		fontWeight: '700',
	},
});
