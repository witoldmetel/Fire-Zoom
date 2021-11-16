import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { actionButtons } from './constants';
import { Button } from './Button';

export function ActionButtons() {
	return (
		<View style={styles.root}>
			{actionButtons.map((button) => (
				<Button
					key={button.id}
					icon={button.icon}
					title={button.title}
					color={button.color}
				/>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 25,
		paddingBottom: 10,
		borderBottomColor: '#1f1f1f',
		borderBottomWidth: 1,
	},
	buttonWrapper: {
		alignItems: 'center',
	},
	button: {
		width: 50,
		height: 50,
		backgroundColor: 'blue',
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: '#858585',
		fontSize: 12,
		paddingTop: 10,
		fontWeight: '700',
	},
});
