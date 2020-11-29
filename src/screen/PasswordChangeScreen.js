import React from 'react'
import {View, StyleSheet} from 'react-native'
import {GoBack, Header, Text} from "../components/";

const PasswordChangeScreen = () => {
    return (
        <View>
            <Header left={<GoBack />} center />
            <Text>
                password reset
            </Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default PasswordChangeScreen;