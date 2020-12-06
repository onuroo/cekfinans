import React, { useEffect } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
} from 'react-native';

import NavigationActions from '../navigation/navigationActions';

const SplashScreen = () => {
  const { navigateReset } = NavigationActions();
  useEffect(() => {
    setTimeout(() => {
      navigateReset('home');
    }, 1500);
  }, []);
  return (
    <View style={{flex: 1,backgroundColor: 'white',justifyContent: 'center',alignItems: 'center'}}>
      <StatusBar barStyle="dark-content" />
      <Image style={{marginBottom: 10, width: 250, resizeMode: 'contain', height: 50}}
							       source={require('../assets/yatay-logo.png')}/>
    </View>
  );
};

const styles = () => StyleSheet.create({

});

export default SplashScreen;