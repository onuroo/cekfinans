import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    ActivityIndicator,
    Image
} from 'react-native';

import Text from "./Text";
import NavigationActions from '../navigation/navigationActions';
import {color} from "./ThemeConfig";

const ErrorModal = ({navigation, route}) => {
    const {navigatePop} = NavigationActions();
    const onPress = () => {
        navigatePop();
    }

    console.log('navigation, route', navigation, route);

    const {message} = route.params;

    return (
        <View style={styles.modalContainer}>
            <View style={styles.contentContainer}>
                <View style={{flex: 1,borderTopLeftRadius:20,borderTopRightRadius:20, backgroundColor: color.danger, justifyContent: 'center', alignItems: 'center'}}>
                    <Text color={color.white} bold h5>{message}</Text>
                </View>
                <View style={{flex: 1,borderBottomLeftRadius:20,borderBottomRightRadius:20,  justifyContent: 'center', alignItems: 'center', backgroundColor: color.white}}>
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text bold>Yeniden Dene</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, {backgroundColor: color.danger, borderColor: color.danger}]}
                        onPress={() => {
                            navigatePop();
                            navigation.navigate('checkAdd')
                        }}>
                        <Text bold color={color.white}>Elle Gir</Text>
                    </TouchableOpacity>
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
        height: '40%',
        width: '70%',
        flex: 0.5,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    message: {
        textAlign: 'center',
    },
    button: {
        height: 40,
        width: '80%',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 20,
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
export default ErrorModal;