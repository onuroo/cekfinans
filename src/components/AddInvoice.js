import React, { useState } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import NavigationActions from '../navigation/navigationActions';
import {Button,Text} from "./index";
import {color} from "./ThemeConfig";

const AddInvoice = ({ navigation, route }) => {
    const { navigatePush,navigatePop} = NavigationActions();
    console.log('navigation, route', navigation, route);
    const onPress = () => {
        navigatePop();
        navigation.navigate('addInvoiceForm')
    }
    const { message } = route.params;

    return (
        <View style={ styles.modalContainer }>
            <View style={ styles.contentContainer }>
                <Text style={ styles.message }>{ message }</Text>
                <View style={{width:'100%',justifyContent:'flex-end',alignItems:'flex-end',alignContent:'flex-end'}}>
                    <Button color={color.danger} variant={'link'} title={'Fatura Ekle'} onPress={onPress} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        padding:20,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        textAlign: 'center',
    },
    button: {
        marginTop: 55,
        height: 40,
        width: 150,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        marginBottom: 55,
    },
});
export default AddInvoice;