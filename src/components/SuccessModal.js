import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  Image,
} from 'react-native';

import Text from "./Text";
import NavigationActions from '../navigation/navigationActions';

const SuccessModal = ({ navigation, route }) => {
    const { navigatePop } = NavigationActions();
    const onPress = () => {
        navigatePop();
    }

    console.log('navigation, route', navigation, route);

    const { message } = route;

    return (
        <View style={ styles.modalContainer }>
            <View style={ styles.contentContainer }>
                <Image style={ styles.icon } source={require('./../assets/success.png')}/>
                <Text>{ message }</Text>
                <TouchableOpacity style={ styles.button } onPress={ onPress }>
                    <Text>Kapat</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    height: '40%',
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    textAlign: 'center',
  },
  button: {
    marginTop: 55,
    height: 40,
    width: 150,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    marginBottom: 55,
  },
});
export default SuccessModal;