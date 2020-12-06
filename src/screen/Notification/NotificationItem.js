import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text} from "../../components";
import {color} from "../../components/ThemeConfig";

const NotificationItem = ({data}) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={{flex: 0.15}} bold>Konu </Text>
                <Text style={{flex: 0.05}} bold>:</Text>
                <Text style={{flex: 0.8}} color={color.black} numberOfLines={2} >{data.subject}</Text>
            </View>
            <View style={styles.row}>
                <Text style={{flex: 0.15}} bold>Mesaj</Text>
                <Text style={{flex: 0.05}} bold>:</Text>
                <Text style={{flex: 0.8}} color={color.black}>{data.message}</Text>
            </View>
            <View style={styles.row}>
                <Text style={{flex: 0.15}} bold>Cevap</Text>
                <Text style={{flex: 0.05}} bold>:</Text>
                <Text style={{flex: 0.8}} color={color.black} >{data.answer}</Text>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.gray2,
        margin: 10,
        borderRadius: 10,
        padding: 10
    },
    row: {justifyContent: 'flex-start', flexDirection: 'row', marginBottom: 10,}
})

export default NotificationItem;