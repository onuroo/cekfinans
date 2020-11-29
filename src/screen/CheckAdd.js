import React,{useContext} from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions, Image} from 'react-native';
import {Text, Header, Input, Icon, Button, GoBack} from '../components'
import {color} from "../components/ThemeConfig";
import ImagePicker from 'react-native-image-picker';
/*import CheckHooks from '../hooks/check.hooks';*/
/*import {CheckContext,CheckProvider} from '../context/CheckContext';*/
import {AppStateContext} from '../context/CheckContext';

const CheckAddScreen = ({navigation}) => {
    const {chekOn, setCheckOn,
        chekArka, setCheckArka,
        chekFatura, setCheckFatura,}  = useContext(AppStateContext)
    /*const  {chekFatura,setCheckFatura,chekArka,chekOn,setCheckArka,setCheckOn} =  CheckHooks();*/
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
    }
    let goFrom = () => {
        if (chekOn !== null && chekArka !== null && chekFatura !== null) {
            navigation.navigate('checkForm');
        } else {
            navigation.navigate('errorModal', {message: 'Tüm Alanları Doldurun.'})
        }
    }
    return (
        <View>
            <Header left={<GoBack/>} title={'Talep Ekle'} description={'Faktoring'}/>
            <View style={{padding: 20}}>
                <View style={styles.leftArea}>
                    <View style={{padding: chekOn === null ? 20 : 0}}>
                        {chekOn === null ? <Text>
                                Çekinizin önyüzünün fotoğrafını ekle
                            </Text> :
                            <View>
                                <Image source={{uri: chekOn.uri}} style={styles.image}/>
                            </View>
                        }
                    </View>
                    <TouchableOpacity onPress={() => picker(setCheckOn)} style={[styles.rightArea, {
                        backgroundColor: chekOn !== null ? color.warning : color.gradientEnd
                    }]}>
                        {chekOn === null ? <View style={styles.iconStyle}>
                                <Icon color={color.turkuaz} name={'plus'} size={20}/>
                            </View> :
                            <View style={styles.iconWarning}>
                                <Icon color={color.white} name={'edit'} size={20}/>
                            </View>
                        }

                    </TouchableOpacity>
                </View>
                <View style={styles.leftArea}>
                    <View style={{padding: chekArka === null ? 20 : 0}}>
                        {chekArka === null ? <Text>
                                Çekinizin Arkayüzünün fotoğrafını ekle
                            </Text> :
                            <View>
                                <Image source={{uri: chekArka.uri}} style={styles.image}/>
                            </View>
                        }
                    </View>
                    <TouchableOpacity onPress={() => picker(setCheckArka)} style={[styles.rightArea, {
                        backgroundColor: chekArka !== null ? color.warning : color.gradientEnd
                    }]}>
                        {chekArka === null ? <View style={styles.iconStyle}>
                                <Icon color={color.turkuaz} name={'plus'} size={20}/>
                            </View> :
                            <View style={styles.iconWarning}>
                                <Icon color={color.white} name={'edit'} size={20}/>
                            </View>
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.leftArea}>
                    <View style={{padding: chekFatura === null ? 20 : 0}}>
                        {chekFatura === null ? <Text>
                                Çekinizin önyüzünün fotoğrafını ekle
                            </Text> :
                            <View>
                                <Image source={{uri: chekFatura.uri}} style={styles.image}/>
                            </View>
                        }
                    </View>
                    <TouchableOpacity onPress={() => picker(setCheckFatura)} style={[styles.rightArea, {
                        backgroundColor: chekFatura !== null ? color.warning : color.gradientEnd
                    }]}>
                        {chekFatura === null ? <View style={styles.iconStyle}>
                                <Icon color={color.turkuaz} name={'plus'} size={20}/>
                            </View> :
                            <View style={styles.iconWarning}>
                                <Icon color={color.white} name={'edit'} size={20}/>
                            </View>
                        }

                    </TouchableOpacity>
                </View>
                <Button style={{flex: 1, width: '100%'}} color={color.white}
                        onPress={() => goFrom()}
                        title={'Devam'}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    leftArea: {
        flexDirection: 'row',
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: 'space-between',
        backgroundColor: color.white,
        alignItems: 'center'
    },
    iconStyle: {
        borderRadius: 20,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: color.turkuaz
    },
    iconWarning: {
        borderRadius: 20,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: color.warning
    },
    image: {
        width: Dimensions.get('window').width / 1.36,
        height: 120,
        resizeMode: 'cover'
    },
    rightArea: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        width: 70, height: 120,
        justifyContent: 'center',
        alignContent: 'center',
    }
})
export default CheckAddScreen;