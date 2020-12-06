import React, {useState} from 'react';
import {StyleSheet, View} from "react-native";
import {Text, Button, Header, Input} from "./../components";
import {color} from "../components/ThemeConfig";
import request from "../config/request";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavigationActions from '../navigation/navigationActions'

const SettingsScreen = () => {
    let {navigatePush, openLoading, closeLoading} = NavigationActions()
    let [subject, setSubject] = useState(null)
    let [message, setMessage] = useState(null)
    let object = 'Konu :';
    let Send = async () => {
        openLoading();
        let token = await AsyncStorage.getItem('userInfo');
        await request.post('homepage/contact', {
            subject: subject,
            message: message,
            token: JSON.parse(token).token
        }).then(res => {
            setSubject(null)
            setMessage(null)
                closeLoading()
                navigatePush('successModal', {message: res.message})
            }
        )
    }
    return (
        <View style={styles.container}>
            <Header center/>
            <View style={styles.content}>

                <View style={{
                    paddingVertical: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text color={color.secondary2} h5> Görüş ve önerilerinizi bize yazın. </Text>
                </View>
                <View>
                    <Input value={subject} onChangeText={(text) => setSubject(text)} height={50} text={object}/>
                </View>
                <View>
                    <Input value={message} onChangeText={(text) => setMessage(text)} style={{height: 150, padding: 10}} multiline={true}
                           placeholder={'Mesajınız'}/>
                </View>
                <View>
                    <Button color={color.white} onPress={() => Send()} title={'Gönder'} variant={'primary'}/>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
    },
    content: {
        flex: 1,
        padding: 20,
        backgroundColor: color.white,
    },
})
export default SettingsScreen;