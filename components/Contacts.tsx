import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ContactButton } from './ContactButton';
import { contacts } from './constants';

export function Contacts() {
	return (
		<View>
			{contacts.map((contact) => (
				<ContactButton {...contact} />
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	root: {},
});
