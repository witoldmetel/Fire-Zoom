import React from 'react';
import { View, StyleSheet } from 'react-native';

import { actionButtons } from './constants';
import { Button } from './Button';

export function ActionButtons() {
	return (
		<View style={styles.root}>
			{actionButtons.map((button) => (
				<Button key={button.id} {...button} />
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
});
