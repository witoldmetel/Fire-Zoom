import React from 'react';
import { View, StyleSheet, Alert, SafeAreaView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Camera } from 'expo-camera';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { actionButtons } from './constants';

export function CameraView() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.cameraWrapper}>
				<Camera style={{ width: '100%', height: '100%' }} type="front" />
			</View>

			<View style={styles.footer}>
				{actionButtons.map((button) => (
					<TouchableOpacity key={button.id} style={styles.button}>
						<FontAwesome
							name={button.icon}
							size={24}
							color={button.color ?? '#efefef'}
						/>
						<Text style={styles.buttonText}>{button.title}</Text>
					</TouchableOpacity>
				))}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	cameraWrapper: {
		flex: 1,
	},
	footer: { flexDirection: 'row', justifyContent: 'space-around' },
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		marginTop: 20,
	},
	buttonText: {
		color: '#fff',
		marginTop: 10,
	},
});
