import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import {GoBack, Button, Input, Header, Text} from "../components/";
import {color} from "../components/ThemeConfig";
import request from "../config/request";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationActions from "../navigation/navigationActions";

const PasswordChangeScreen = () => {
    let {openLoading, navigatePush, closeLoading} = NavigationActions()
    let [password, setPassword] = useState('');
    let [newPassword, setNewPassword] = useState('');
    let [passwordReply, setPasswordReply] = useState('');
    let [error, setError] = useState('');
    let clearDate = () => {
        setPassword('')
        setNewPassword('')
        setPasswordReply('')
        setError('')
    }
    let onSend = async () => {
        if (password === '') {
            setError('Şifre Boş Bırakılamaz!');
        } else if (password.length <= 7) {
            setError('Şifre Alanı En Az 8 Karekter Olmalıdır.');
        } else if (newPassword === '') {
            setError('Yeni Şifre Boş Bırakılamaz!');
        } else if (newPassword.length <= 7) {
            setError('Yeni Şifre Alanı En Az 8 Karekter Olmalıdır.');
        } else if (passwordReply === '') {
            setError('Yeni Şifre Tekrarı Boş Bırakılamaz!');
        } else if (passwordReply !== newPassword) {
            setError('Yeni Şifre ile Yeni Şifre Tekarı Uyuşmuyor!');
        } else {
            openLoading()
            setError(null);
            let token = await AsyncStorage.getItem('token')
            await request.post('homepage/confirmPassword', {
                token: JSON.parse(token),
                password: password,
                new_password: newPassword,
                new_password_restart: passwordReply
            }).then(res => {
                    clearDate()
                    closeLoading()
                    navigatePush('successModal')
                }
            ).catch(e => closeLoading()
            )
        }
    }
    return (
        <View>
            <Header left={<GoBack/>} center/>
            {error !== '' &&
            <View style={styles.errorText}>
                <Text bold color={color.danger}>
                    {error}
                </Text>
            </View>
            }
            <View style={styles.container}>
                <View>
                    <Input value={password} onChangeText={(text) => setPassword(text)} placeholder={'Mecut Şifre'}/>
                    <Input value={newPassword} onChangeText={(text) => setNewPassword(text)}
                           placeholder={'Yeni Şifre'}/>
                    <Input value={passwordReply} onChangeText={(text) => setPasswordReply(text)}
                           placeholder={'Yeni Şifre ifre Tekrarı'}/>
                    <Button disabled={password === null || passwordReply === null} title={'Gönder'}
                            onPress={() => onSend()}/>
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