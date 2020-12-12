import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Text from "./Text";
import NavigationActions from '../navigation/navigationActions';
import ForgotPasswordHooks from '../hooks/forgotPassword.hooks';

const SuccessModal = () => {
    const {  navigatePop, } = NavigationActions();
    const { 
        setPassword,
        setPasswordAgain,
    } = ForgotPasswordHooks();
    const onPress = () => {
        setPasswordAgain(null);
        setPassword(null);

        navigatePop();
        navigatePop();
        navigatePop();
        navigatePop();
    }

    return (
        <View style={ styles.modalContainer }>
            <View style={ styles.contentContainer }>
                <Image style={ styles.icon } source={require('./../assets/success.png')}/>
                <Text>Şifreniz başarıyla değiştirilmiştir.</Text>
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