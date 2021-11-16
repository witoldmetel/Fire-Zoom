import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

import { Header, SearchBar, ActionButtons, Contacts } from '../components';

function Home() {
	return (
		<View style={styles.root}>
			<SafeAreaView style={{ height: '100%' }}>
				<Header />
				<SearchBar />
				<ActionButtons />
				<Contacts />
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: '#1c1c1c',
		padding: 15,
	},
});

export default Home;
