import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Text, Header, Input, Icon, Button, GoBack} from '../components'
import {color} from "../components/ThemeConfig";
import ImagePicker from 'react-native-image-picker';

const CheckAddScreen = ({navigation}) => {
    const [chekOn, setCheckOn] = useState(null);
    const [chekArka, setCheckArka] = useState(null);
    const [chekFatura, setCheckFatura] = useState(null);
    const picker = async (setState) => {
        const options = {
            title: '',
            quality: 0.5,
            type: 'image/jpeg',
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // You can also display the image using data:
                setState(response);
            }
        });
        // await ImagePicker.launchImageLibrary({
        //         mediaType: 'photo',
        //         includeBase64: false,
        //         maxHeight: 200,
        //         maxWidth: 200,
        //         quality: 0.6,
        //     },
        //     (response) => {
        //         setState(response);
        //     });

    }
    return (
        <View>
            <Header left={<GoBack/>} title={'Talep Ekle'} description={'Faktoring'}/>
            <View style={{padding: 20}}>
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 20,
                    borderRadius: 10,
                    justifyContent: 'space-between',
                    backgroundColor: color.white,
                    alignItems: 'center'
                }}>
                    <View style={{padding: 20}}>
                        <Text>
                            Çekinizin önyüzünün fotoğrafını ekle
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => picker(setCheckOn)} style={{
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        alignItems: 'center',
                        width: 70, height: 70,
                        justifyContent: 'center',
                        alignContent: 'center',
                        backgroundColor: color.gradientEnd
                    }}>
                        {chekOn === null ? <View style={{
                                borderRadius: 20,
                                width: 30,
                                height: 30,
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2,
                                borderColor: color.turkuaz
                            }}>
                                <Icon color={color.turkuaz} name={'plus'} size={20}/>
                            </View> :
                            <View>
                                <Image source={{uri: chekOn.uri}} style={{
                                    width: 70, height: 70, borderTopRightRadius: 10,
                                    borderBottomRightRadius: 10,
                                }}/>
                            </View>
                        }

                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 20,
                    borderRadius: 10,
                    justifyContent: 'space-between',
                    backgroundColor: color.white,
                    alignItems: 'center'
                }}>
                    <View style={{padding: 20}}>
                        <Text>
                            Çekinizin arka yüzünün fotoğrafını ekle
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => picker(setCheckArka)} style={{
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        alignItems: 'center',
                        width: 70, height: 70,
                        justifyContent: 'center',
                        alignContent: 'center',
                        backgroundColor: color.gradientEnd
                    }}>
                        {chekArka === null ? <View style={{
                                borderRadius: 20,
                                width: 30,
                                height: 30,
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2,
                                borderColor: color.turkuaz
                            }}>
                                <Icon color={color.turkuaz} name={'plus'} size={20}/>
                            </View> :
                            <View>
                                <Image source={{uri: chekArka.uri}} style={{
                                    width: 70, height: 70, borderTopRightRadius: 10,
                                    borderBottomRightRadius: 10,
                                }}/>
                            </View>
                        }
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 20,
                    borderRadius: 10,
                    justifyContent: 'space-between',
                    backgroundColor: color.white,
                    alignItems: 'center'
                }}>
                    <View style={{padding: 20}}>
                        <Text>
                            Çekinizin faturasının fotoğrafını ekle
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => picker(setCheckFatura)} style={{
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        alignItems: 'center',
                        width: 70, height: 70,
                        justifyContent: 'center',
                        alignContent: 'center',
                        backgroundColor: color.gradientEnd
                    }}>
                        {chekFatura === null ? <View style={{
                                borderRadius: 20,
                                width: 30,
                                height: 30,
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2,
                                borderColor: color.turkuaz
                            }}>
                                <Icon color={color.turkuaz} name={'plus'} size={20}/>
                            </View> :
                            <View>
                                <Image source={{uri: chekFatura.uri}} style={{
                                    width: 70, height: 70, borderTopRightRadius: 10,
                                    borderBottomRightRadius: 10,
                                }}/>
                            </View>
                        }
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 20,
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Input placeholder={'Çekinizin E-fatura Linki'}/>
                </View>
                <Button style={{flex: 1, width: '100%'}} color={color.white}
                        onPress={() => navigation.navigate('checkForm')}
                        title={'Devam'}/>
            </View>

        </View>
    )
}
export default CheckAddScreen;