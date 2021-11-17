import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { ROUTE } from './routes';
import { RootStackParamList } from './types';
// Screens
import Home from '../screens/Home';
import MeetingRoom from '../screens/MeetingRoom';

const Stack = createStackNavigator<RootStackParamList>();

function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={ROUTE.HOME}>
				<Stack.Screen
					name={ROUTE.HOME}
					component={Home}
					options={{
						title: 'Fire Zoom',
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name={ROUTE.MEETING_ROOM}
					component={MeetingRoom}
					options={{
						title: 'Start a Meeting',
						headerStyle: {
							backgroundColor: '#1c1c1c',
							shadowOpacity: 0,
						},
						headerTintColor: '#fff',
						headerBackTitleVisible: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Navigation;
