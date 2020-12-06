import React, {useEffect, useState} from 'react'
import {View, Dimensions, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import {Text, Header, Icon, GoBack} from '../components'
import {color} from "../components/ThemeConfig";
import request from "../config/request";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationItem from '../screen/Notification/NotificationItem';

const NotificationScreen = (props) => {
    let [data, setData] = useState([]);
    useEffect(() => {
        let getList = async () => {
            let token = await AsyncStorage.getItem('userInfo');
            await request.post('notification', {token: JSON.parse(token)}).then(res =>
                setData(res.notification)).catch(e => console.log(e));
        }
        getList()
    }, [])
    return (
        <View style={styles.container}>
            <Header left={<GoBack/>} title={'Bildirimler'}/>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={item =>
                        <NavigationItem keyExtractor={(item) => item.index.toString()} data={item.item}/>
                    }
                />
            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowBack: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingBottom: 5,
    },
    actionsButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: (Dimensions.get('window').width / 2) / 2,
        padding: 15,
        textAlign: 'center',
    },
    firstButton: {
        backgroundColor: color.theme
    },
    secondButton: {
        backgroundColor: color.secondary
    },
    content: {}
})

export default NotificationScreen;