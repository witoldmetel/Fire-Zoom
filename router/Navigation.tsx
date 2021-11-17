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
				<Stack.Screen name={ROUTE.HOME} component={Home} />
				<Stack.Screen name={ROUTE.MEETING_ROOM} component={MeetingRoom} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Navigation;
