import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity} from "react-native";
import {color} from "../ThemeConfig";
import {Icon, Text} from "../index";
import ImagePicker from "react-native-image-picker";
import request from "../../config/request";
import AsyncStorage from '@react-native-async-storage/async-storage'
import NavigationActions from '../../navigation/navigationActions'

const UserComponent = ({name}) => {
    let {openLoading, closeLoading, navigatePush} = NavigationActions()
    let [image, setImage] = useState(null);

    let [selected, setSelected] = useState(image !== null ? image : null);
    let upload = async (data) => {
        openLoading()
        let token = await AsyncStorage.getItem('userInfo');
        const formData = new FormData();
        formData.append('token', JSON.parse(token).token);
        formData.append('company_image', {uri: data.uri, name: JSON.parse(token).token + '-.jpg', type: data.type});
        await request.post('company/image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json',
            },
        }).then(res => {
            navigatePush('SuccessModal', {params: {message: res.message}})
            closeLoading();
            AsyncStorage.setItem('image', data.uri)
        }).catch(e => closeLoading());
    }
    const picker = async () => {
        const options = {
            title: 'Logo Seç',
            quality: 0.5,
            type: 'image/jpeg',
            takePhotoButtonTitle: 'Fotoğraf Çek',
            chooseFromLibraryButtonTitle: 'Galeriden Seç',
            cancelButtonTitle: 'İptal',
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, async (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                setSelected(response.uri);
                await upload(response);
            }
        });
    }
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
                {selected ?
                    <View style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        overflow: 'hidden',
                        marginBottom: 15,
                        alignItems: 'center',
                        borderWidth: 4,
                        borderColor: color.turkuaz,
                        backgroundColor: color.gray
                    }}>
                        <Image source={{uri: selected}} style={{width: 150, height: 150, resizeMode: 'cover'}}/>
                    </View> :
                    <View style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        overflow: 'hidden',
                        marginBottom: 15,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        borderWidth: 4,
                        borderColor: color.turkuaz,
                        backgroundColor: color.gray
                    }}>
                        <Icon size={150} color={color.secondary} name={'user'}/>
                    </View>
                }
                <TouchableOpacity onPress={() => picker()} style={{position: 'absolute', right: -10, bottom: 20,}}>
                    <Icon color={color.white} size={25} name={'edit'}/>
                </TouchableOpacity>
            </View>

            <View>
                <Text h5 color={color.white}>
                    {name}
                </Text>
            </View>
        </View>
    )
}
export default UserComponent;