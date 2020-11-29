/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

AsyncStorage.removeItem('token');

AppRegistry.registerComponent(appName, () => App);
