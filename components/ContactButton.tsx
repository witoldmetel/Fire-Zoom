import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

export function ContactButton() {
	return (
		<View style={styles.root}>
			<View style={styles.icon}>
				<AntDesign name="star" size={30} color="#efefef" />
			</View>
			<Text style={styles.buttonText}>Starred</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 20,
	},
	icon: {
		backgroundColor: '#333',
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		paddingLeft: 15,
		fontWeight: '700',
	},
});
