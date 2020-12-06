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
                        onPress={() => AsyncStorage.removeItem('userInfo')}>
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
            unmountInactiveScreens
            headerMode="none"
            lazy={ false }
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
                userInfo = await AsyncStorage.getItem('userInfo');
                if (userInfo) {
                    setState({
                        token: JSON.parse(userInfo).token,
                        companyInfo: JSON.parse(userInfo).companyInfo,
                        isReady: true,
                    });
                } else {
                    setState({
                        token: null,
                        isReady: true,
                    });
                }
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

    let initialRouteName = null;
    if (state.token) initialRouteName = 'home';
    else initialRouteName = 'login';
    if (!state.companyInfo && state.token) initialRouteName = 'firmSettings';

    const options = {
        headerShown: false,
        tabBarVisible: false,
      };

    return (
        <ThemeProvider>
            <NavigationContainer>
                <AppStateProvider>
                    <Stack.Navigator initialRouteName={ initialRouteName }
                                        headerMode="none">
                        <Stack.Screen name="splash" component={SplashScreen} options={ { ...options } }/>
                        <Stack.Screen name="login" component={LoginScreen} options={ { ...options } }/>
                        <Stack.Screen name="register" component={RegisterScreen}options={ { ...options } }/>
                        <Stack.Screen name="forgot" component={ForgotScreen}options={ { ...options } }/>
                        <Stack.Screen name="home" component={DrawerScreens}options={ { ...options } }/>
                        <Stack.Screen name="checkAdd" component={CheckAddScreen}options={ { ...options } }/>
                        <Stack.Screen name="checkForm" component={CheckForm}options={ { ...options } }/>
                        <Stack.Screen name="list" component={ListScreen}options={ { ...options } }/>
                        <Stack.Screen name="listDetail" component={ListDetailScreen}options={ { ...options } }/>
                        <Stack.Screen name="firmSettings" component={FirmSettingsScreen}options={ { ...options } }/>
                        <Stack.Screen name="errorModal" component={ErrorModal} options={{...ModalTransition}}options={ { ...options } }/>
                        <Stack.Screen name="errorQrCode" component={ErrorQrCode} options={{...ModalTransition}}options={ { ...options } }/>
                        <Stack.Screen name="successModal" component={SuccessModal} options={{...ModalTransition}}options={ { ...options } }/>
                        <Stack.Screen name="addInvoice" component={AddInvoice} options={{...ModalTransition}}options={ { ...options } }/>
                        <Stack.Screen name="addInvoiceForm" component={AddInvoiceForm}options={ { ...options } }/>
                        <Stack.Screen name="loading" component={LoadingModal} options={{...ModalTransition}}options={ { ...options } }/>
                        <Stack.Screen name="codeVerify" component={CodeVerify}options={ { ...options } }/>
                        <Stack.Screen name="PasswordChange" component={PasswordChangeScreen}options={ { ...options } }/>
                        <Stack.Screen name="Notifications" component={NotificationScreen}/>
                    </Stack.Navigator>
                </AppStateProvider>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
