import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { Input, Button, Text } from '../../components';
import {color} from "../../components/ThemeConfig";
import ForgotPasswordHooks from '../../hooks/forgotPassword.hooks';

const ForgotCodeVerify = ({ route }) => {
	const {
        codeValue, setCodeValue,
        codeConfirmError, setCodeConfirmError,
        onSubmitCodeConfirm,
    } = ForgotPasswordHooks();

  return (
    <View style={{flex: 1,backgroundColor: 'white',alignItems: 'center',}}>
        <View style={{width: '80%', alignSelf: 'center'}}>
            <Text style={{marginTop: 40, marginBottom: 40,alignSelf: 'center', fontWeight: '600'}}>Kod Doğrulama</Text>
            <View style={{marginBottom: 20}}>
                <Input onChangeText={(val) => {
                    setCodeConfirmError(null);
                    setCodeValue(val);
                }}
                    value={ codeValue }
                    autoCapitalize={'none'}
                    autoCompleteType={'off'}
                    placeholder={'6 Haneli kodu giriniz.'}
                />
            </View>
            <Button
                color={color.white}
                variant={'primary'}
                onPress={ () => onSubmitCodeConfirm() }
                title={'Doğrula'}
            />
            <Text color={ color.danger } style={{fontSize: 13,fontWeight: 'bold', color: 'red',alignSelf: 'center', marginTop: 35}}>{ codeConfirmError }</Text>
        </View>
    </View>
  );
};

const styles = () => StyleSheet.create({

});

export default ForgotCodeVerify;