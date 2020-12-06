/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
    View, TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import 'react-native-gesture-handler';
import ThemeProvider from "./components/ThemeProvider";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from '@react-navigation/drawer';

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
import {navigateReset, navigationRef} from "./config/navigator";
import CheckAddScreen from "./screen/CheckAdd";
import CheckForm from "./screen/Check/checkForm";
import AddInvoiceForm from "./screen/Check/AddInvoiceForm";
import CodeVerify from "./screen/CodeVerify";
import PasswordChangeScreen from "./screen/PasswordChangeScreen";

import {ModalTransition} from "./navigation/animations";
import ErrorModal from "./components/ErrorModal";
import ErrorQrCode from "./components/ErrorQrCodeModal";
import SuccessModal from "./components/SuccessModal";
import LoadingModal from "./components/LoadingModal";
import AppStateProvider from "./context/CheckContext";
import AddInvoice from './components/AddInvoice'
import NotificationScreen from './screen/NotificationScreen'
import {useWindowDimensions} from 'react-native';

import {color} from "./components/ThemeConfig";
import {Logo, Icon, Text} from "./components";
import LogoYatay from "./components/Logo/logo-yatay";

function CustomDrawerContent(props) {
    return (
        <View style={{flex: 1, zIndex: 99999999999999999}}>
            <View style={{
                flex: 0.2,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: color.gradientStart
            }}>
                <LogoYatay/>
            </View>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
                <View style={{marginTop: 10}}>
                    <TouchableOpacity style={{width: '100%', paddingLeft: 10}}
                                      onPress={() => props.navigation.navigate('PasswordChange')}>
                        <Text left h5> Şifre Değiştir</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginVertical: 100}}>
                    <TouchableOpacity
                        style={{width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}
                        onPress={() => {
                            AsyncStorage.removeItem('token');
                            navigateReset('login')
                        }}>
                        <Icon size={22} color={color.black} name={'log-out'}/>
                        <Text left h5> Çıkış Yap </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const Drawer = createDrawerNavigator();


function DrawerScreens() {
    return (
        <Drawer.Navigator initialRouteName={'home'} drawerType={'front'}
                          drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="home" component={TabScreen}/>
        </Drawer.Navigator>
    );
}


function TabScreen() {
    return (
        <Tab.Navigator
            initialRouteName={'home'}
            tabBar={(props) => <Tabs {...props} />}>
            <Tab.Screen name="home" component={HomeScreen}/>
            <Tab.Screen name="Check" component={CheckScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    );
}

const App = () => {
    const [state, setState] = useState({token: null, isReady: false});
    React.useEffect(() => {
        const readToken = async () => {
            let userToken;

            try {
                userToken = await AsyncStorage.getItem('token');
                setState({
                    token: JSON.parse(userToken),
                    isReady: true,
                });
            } catch (e) {
                // Restoring token failed
                setState({
                    token: null,
                    isReady: true,
                });
            }

        };

        readToken();
    }, []);

    if (!state.isReady) return null;
    return (
        <>
            <AppStateProvider>
                <ThemeProvider>
                    <NavigationContainer ref={navigationRef}>
                        <Stack.Navigator initialRouteName={state.token == null ? 'login' : 'home'}
                                         headerMode="none">
                            <Stack.Screen name="splash" component={SplashScreen}/>
                            <Stack.Screen name="login" component={LoginScreen}/>
                            <Stack.Screen name="register" component={RegisterScreen}/>
                            <Stack.Screen name="forgot" component={ForgotScreen}/>
                            <Stack.Screen name="home" component={DrawerScreens}/>
                            <Stack.Screen name="checkAdd" component={CheckAddScreen}/>
                            <Stack.Screen name="checkForm" component={CheckForm}/>
                            <Stack.Screen name="list" component={ListScreen}/>
                            <Stack.Screen name="listDetail" component={ListDetailScreen}/>
                            <Stack.Screen name="firmSettings" component={FirmSettingsScreen}/>
                            <Stack.Screen name="errorModal" component={ErrorModal} options={{...ModalTransition}}/>
                            <Stack.Screen name="errorQrCode" component={ErrorQrCode} options={{...ModalTransition}}/>
                            <Stack.Screen name="successModal" component={SuccessModal} options={{...ModalTransition}}/>
                            <Stack.Screen name="addInvoice" component={AddInvoice} options={{...ModalTransition}}/>
                            <Stack.Screen name="addInvoiceForm" component={AddInvoiceForm}/>
                            <Stack.Screen name="loading" component={LoadingModal} options={{...ModalTransition}}/>
                            <Stack.Screen name="codeVerify" component={CodeVerify}/>
                            <Stack.Screen name="PasswordChange" component={PasswordChangeScreen}/>
                            <Stack.Screen name="Notifications" component={NotificationScreen}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                </ThemeProvider>
            </AppStateProvider>
        </>
    );
};

export default App;
