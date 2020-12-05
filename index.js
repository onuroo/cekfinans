/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

global.token = null;

AsyncStorage.getItem('userInfo').then((userInfo) => {
    console.log('userInfo', userInfo);
    if (userInfo) {
        global.token = JSON.parse(userInfo).token;
    }
});

// AsyncStorage.removeItem('userInfo');

AppRegistry.registerComponent(appName, () => App);
