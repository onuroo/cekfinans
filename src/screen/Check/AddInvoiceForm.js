import React, {useContext} from 'react'
import {View, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native'
import {Button, GoBack, Header, Icon, Text} from '../../components'
import {color} from "../../components/ThemeConfig";
import {AppStateContext} from "../../context/CheckContext";
import ImagePicker from "react-native-image-picker";
import NavigationActions from '../../navigation/navigationActions';

const AddInvoiceForm = () => {
    const { navigatePop, navigatePush } = NavigationActions();
    const {exFaturaInfo, setExFaturaInfo,extraDataGoBack} = useContext(AppStateContext)
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
                setState(response);
            }
        });
    }
    return (
        <View>
            <Header title={'Talep Ekle'} description={'Yurtiçi Faktoring'} left={<GoBack/>}/>
            <View style={{padding: 20}}>
                <View style={styles.leftArea}>
                    <View style={{padding: exFaturaInfo === null ? 20 : 0}}>
                        {exFaturaInfo === null ? <Text>
                                Çekinizin faturasını ekleyin
                            </Text> :
                            <View>
                                <Image source={{uri: exFaturaInfo.uri}} style={styles.image}/>
                            </View>
                        }
                    </View>
                    <TouchableOpacity onPress={() => picker(setExFaturaInfo)} style={[styles.rightArea, {
                        backgroundColor: exFaturaInfo !== null ? color.warning : color.gradientEnd
                    }]}>
                        {exFaturaInfo === null ? <View style={styles.iconStyle}>
                                <Icon color={color.turkuaz} name={'plus'} size={20}/>
                            </View> :
                            <View style={styles.iconWarning}>
                                <Icon color={color.white} name={'edit'} size={20}/>
                            </View>
                        }

                    </TouchableOpacity>
                </View>
                <Button style={{flex: 1, width: '100%'}} color={color.white}
                        onPress={() => {
                            extraDataGoBack()
                            navigatePop();
                        }}
                        title={'Devam'}/>
            </View>
            <Text numberOfLines={2}>
                Add Extra data Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor nesciunt nihil non
                optio possimus quasi quibusdam quo quos. Asperiores dolorem ex facere praesentium totam! Aspernatur
                dolore facilis libero praesentium.
            </Text>
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

export default AddInvoiceForm;