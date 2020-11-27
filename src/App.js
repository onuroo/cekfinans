/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
	Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import CodeVerify from "./screen/CodeVerify";

import { ModalTransition } from "./navigation/animations";
import ErrorModal from "./components/ErrorModal";
import SuccessModal from "./components/SuccessModal";
import LoadingModal from "./components/LoadingModal";

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
	const [state, setState] = useState({ token: null, isReady: false });

	  React.useEffect(() => {
		const readToken = async () => {
		  let userToken;
	
		  try {
			userToken = await AsyncStorage.getItem('token');
		  } catch (e) {
			// Restoring token failed
			setState({
				token: null,
				isReady: true,
			});
		  }
		  setState({
			  token: JSON.parse(userToken),
			  isReady: true,
		  });
		};
	
		readToken();
	  }, []);

	if (!state.isReady) return null;
	return (
		<>
			<ThemeProvider>
				<NavigationContainer ref={navigationRef}>
					<Stack.Navigator initialRouteName={  state.token == null ? 'login' : 'home' } headerMode="none">
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
						<Stack.Screen name="errorModal" component={ErrorModal} options={ { ...ModalTransition } } />
						<Stack.Screen name="successModal" component={SuccessModal} options={ { ...ModalTransition } } />
						<Stack.Screen name="loading" component={LoadingModal} options={ { ...ModalTransition } } />
						<Stack.Screen name="codeVerify" component={CodeVerify} />
					</Stack.Navigator>
				</NavigationContainer>
			</ThemeProvider>
		</>
	);
};

export default App;
