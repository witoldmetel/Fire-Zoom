import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ContactButton } from './ContactButton';

export function Contacts() {
	return (
		<View>
			<ContactButton />
		</View>
	);
}

const styles = StyleSheet.create({
	root: {},
});
