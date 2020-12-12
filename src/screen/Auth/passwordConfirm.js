import React from 'react'
import {View, StyleSheet} from 'react-native'
import {GoBack, Button, Input, Header, Text} from "../../components/";
import {color} from "../../components/ThemeConfig";
import ForgotPasswordHooks from '../../hooks/forgotPassword.hooks';

const PasswordChangeScreen = () => {
   const {  password, setPassword,
    passwordAgain, setPasswordAgain, onSubmitPasswordConfirm, passwordConfirmError, setPasswordConfirmError } = ForgotPasswordHooks();
    return (
        <View>
            <Header left={<GoBack/>} center/>
            <View style={styles.container}>
                <View>
                    <Input value={password} onChangeText={(text) => {
                        setPasswordConfirmError(null);
                        setPassword(text);
                    } }
                           placeholder={'Yeni Şifre'}/>
                    <Input value={passwordAgain} onChangeText={(text) => {
                        setPasswordConfirmError(null);
                        setPasswordAgain(text);
                    }}
                           placeholder={'Yeni Şifre ifre Tekrarı'}/>
                    <Button disabled={password === null || passwordAgain === null} title={'Gönder'}
                            onPress={() => {
                                onSubmitPasswordConfirm();
                            } }
                            />

                    <Text color={ color.danger } style={{fontSize: 13,fontWeight: 'bold', color: 'red',alignSelf: 'center', marginTop: 35}}>{ passwordConfirmError }</Text>

                </View>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    errorText: {
        padding: 10,

    }
})

export default PasswordChangeScreen;