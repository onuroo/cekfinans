import React, { useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
} from 'react-native';

import { Input, Button, Text } from './../components';
import RegisterHooks from '../hooks/register.hooks';
import {color} from "../components/ThemeConfig";

const CodeVerify = ({ route }) => {
  const [value, setValue] = useState(null);
  const { token, code, tckn, password } = route.params;
  const [error, setError] = useState(null);

  const {
    onRegisterUserControl
} = RegisterHooks();

  const onPress = () => {
      if (code && value && code.toString() === value.toString()) {
        setError(null);
        onRegisterUserControl(`?token=${token}&code=${code}`, tckn, password);
      } else {
        setError('Kod yanlış!');
      }
  }

  return (
    <View style={{flex: 1,backgroundColor: 'white',alignItems: 'center',}}>
        <View style={{width: '80%', alignSelf: 'center'}}>
            <Text style={{marginTop: 40, marginBottom: 40,alignSelf: 'center', fontWeight: '600'}}>Kod Doğrulama</Text>
            <View style={{marginBottom: 20}}>
                <Input onChangeText={(val) => {
                    setValue(val);
                    if (error) setError(null);
                }}
                    value={ value }
                    autoCapitalize={'none'}
                    autoCompleteType={'off'}
                    placeholder={'6 Haneli kodu giriniz.'}
                />
            </View>
            <Button
                color={color.white}
                variant={'primary'}
                onPress={ onPress }
                title={'Doğrula'}
            />
            <Text color={ color.danger } style={{fontSize: 13,fontWeight: 'bold', color: 'red',alignSelf: 'center', marginTop: 35}}>{ error }</Text>
        </View>
    </View>
  );
};

const styles = () => StyleSheet.create({

});

export default CodeVerify;