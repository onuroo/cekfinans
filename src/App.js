/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
	Text,
} from 'react-native';

import 'react-native-gesture-handler';
import ThemeProvider from "./components/ThemeProvider";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import LoginScreen from './screen/Auth/login';
import RegisterScreen from './screen/Auth/register';
import ForgotScreen from './screen/Auth/forgot';
import HomeScreen from './screen/Home';
import SettingsScreen from './screen/Settings';
import CheckScreen from './screen/Check';
import SplashScreen from './screen/Splash';
import ListScreen from './screen/List';
import ListDetailScreen from './screen/ListDetail';
import FirmSettingsScreen from './screen/FirmSettings';
import Tabs from './components/Tab'
import {navigationRef} from "./config/navigator";
import CheckAddScreen from "./screen/CheckAdd";
import CheckForm from "./screen/Check/checkForm";
function TabScreen() {
	return (
		<Tab.Navigator
			initialRouteName={'Check'}
			tabBar={(props) => <Tabs {...props} />}>
			<Tab.Screen name="home" component={HomeScreen} />
			<Tab.Screen name="Check" component={CheckScreen} />
			<Tab.Screen name="Settings" component={SettingsScreen} />
		</Tab.Navigator>
	);
}
const App = () => {
	return (
		<>
			<ThemeProvider>
				<NavigationContainer ref={navigationRef}>
					<Stack.Navigator initialRouteName="firmSettings" headerMode="none">
						<Stack.Screen name="splash" component={ SplashScreen } />
						<Stack.Screen name="login" component={LoginScreen}/>
						<Stack.Screen name="register" component={RegisterScreen}/>
						<Stack.Screen name="forgot" component={ForgotScreen}/>
						<Stack.Screen name="home" component={TabScreen}/>
						<Stack.Screen name="checkAdd" component={CheckAddScreen}/>
						<Stack.Screen name="checkForm" component={CheckForm}/>
						<Stack.Screen name="list" component={ListScreen}/>
						<Stack.Screen name="listDetail" component={ListDetailScreen}/>
						<Stack.Screen name="firmSettings" component={FirmSettingsScreen}/>
					</Stack.Navigator>
				</NavigationContainer>
			</ThemeProvider>
		</>
	);
};

export default App;
