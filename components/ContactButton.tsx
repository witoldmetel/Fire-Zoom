import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	ImageSourcePropType,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

type ContactButtonProps = {
	id: number;
	type: string;
	name: string;

	avatar?: ImageSourcePropType;
};

export function ContactButton(props: ContactButtonProps) {
	const avatar = props.avatar ? (
		<Image source={props.avatar} style={styles.image} />
	) : (
		<View style={styles.icon}>
			<AntDesign name="star" size={30} color="#efefef" />
		</View>
	);

	return (
		<View style={styles.root}>
			{avatar}
			<Text style={styles.buttonText}>{props.name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 20,
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 20,
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
