'use strict';
import React, {useRef,useEffect,useState} from 'react';
import {StyleSheet, Image, Alert, TouchableOpacity, Dimensions, View} from "react-native";
import {color} from "../components/ThemeConfig";
import {Text, Button, Header, UserComponent, GoBack} from "../components";
import {RNCamera} from 'react-native-camera';

let {width: wWidth, height: wHeight} = Dimensions.get('window');
const CheckScreen = ({navigation}) => {
    let camera = useRef(null)
    let [alert, setAlert] = useState(false)
    setTimeout(()=>{
        console.log('asd')
    },5000)
    return (
        <View style={styles.container}>
            <Header left={<GoBack navigation={navigation}/>} title={'Talep Ekle'} description={'Yurtiçi Faktoring'}/>
            <View style={{flex: 1, padding: 10, backgroundColor: color.white,}}>
                <View style={{paddingVertical: 30, flex: 1, alignItems: 'center', alignContent: 'center'}}>
                    <Text center bold h5> Çekinizin karekodunu taratın.</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', alignContent: 'center'}}>
                    <RNCamera
                        ref={ref => {
                            camera = ref;
                        }}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        onGoogleVisionBarcodesDetected={({barcodes}) => {

                        }}
                    />
                </View>
                <View style={{padding: 40, flex: 1, marginTop: 200,}}>
                    <Button onPress={() => navigation.navigate('checkAdd')} variant={'primary'} color={color.white}
                            title={'Qr Kod Olmadan Devam Et'}/>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.gray,
    },
    bottomArea: {
        backgroundColor: color.white,
        flexDirection: 'row',
        borderRadius: 20,
        padding: 0,
        flex: 1,
    },
    ButtonArea: {
        backgroundColor: color.white,
        margin: 20,
        paddingTop: 30,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: wWidth / 2 - 70
    },
    preview: {
        height: 200,
        width: 200,
        alignItems: 'center',
    },

})
export default CheckScreen;