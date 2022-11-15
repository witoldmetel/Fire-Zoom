import React from 'react';
import { View } from 'react-native';

import { ContactButton } from './ContactButton';
import { contacts } from './constants';

export function Contacts() {
	return (
		<View>
			{contacts.map((contact) => (
				<ContactButton key={contact.id} {...contact} />
			))}
		</View>
	);
}
