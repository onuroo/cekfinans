import React, {useEffect, useState} from 'react'
import {View, StyleSheet, ScrollView, Image} from 'react-native'
import {GoBack, Header, Button, Icon, Text} from '../components'
import {color} from "../components/ThemeConfig";
import request from "../config/request";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import NavigationActions from "../navigation/navigationActions";

const ListDetailScreen = ({navigation, token, route}) => {
    let {navigatePush, openLoading, closeLoading} = NavigationActions();
    let params = route.params.data;
    let [data, setData] = useState({});
    let [loading, setLoading] = useState(false);
    useEffect(() => {
        let getDetail = async () => {
            let userInfo = await AsyncStorage.getItem('userInfo');
            request.post('check/detail', {
                token: JSON.parse(userInfo).token,
                id: params.id
            }).then(res => setData(res))
        }
        getDetail();
    }, [loading])
    let Accept = async () => {
        setLoading(true)
        openLoading()
        let userInfo = await AsyncStorage.getItem('userInfo');
        await request.post('check/accept', {
            id: data.id,
            token: JSON.parse(userInfo).token
        }).then(res => {
            setLoading(false);
            closeLoading();
            navigatePush('successModal', {params: {message: res.message}})
        }).catch(e => {
            setLoading(false)
            closeLoading()
        })
    }
    return (
        <View style={styles.container}>
            <Header left={<GoBack/>} title={'Çek Detay'}/>
            <View
                style={[styles.rowFront]}>
                <View style={styles.row}>
                    <Text>{moment(data.created_at).format('DD-MM-YYYY HH:mm')}</Text>
                    <Text>Yurtiçi Faktoring</Text>
                </View>
                <View style={[styles.row, {
                    borderTopWidth: 1,
                    borderColor: color.gray,
                    paddingTop: 10,
                }]}>
                    <View>
                        <Text color={color.secondary2} right>Çek No</Text>
                        <Text bold>{data.check_number}</Text>
                    </View>
                    <View>
                        <Text color={color.secondary2} right>Çek Tarihi</Text>
                        <Text bold>{moment(data.check_date, "YYYY-MM-DD").format('DD-MM-YYYY')}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.bottom}>
                        <Text h5 center color={color.gradientEnd}>{data.check_bid_status}</Text>
                    </View>
                    <View style={[styles.bottom, {
                        backgroundColor: color.gray,
                        justifyContent: 'flex-end',
                    }]}>
                        <Text right h5 bold> {data.check_total} TL</Text>
                    </View>
                </View>
                <ScrollView style={{padding: 10, backgroundColor: color.gray}}>
                    {/*<View style={[{
                        flexDirection: 'row',
                        padding: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: color.white
                    }]}>
                        <View>
                            <Text color={color.turkuaz} h6>
                                Kalan süre :
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 10,}}>
                            <Text color={color.turkuaz} bold h6 style={{marginRight: 5}}>
                                00
                            </Text>
                            <Text color={color.turkuaz} bold h6 style={{marginRight: 5}}>
                                :
                            </Text>
                            <Text color={color.turkuaz} bold h6 style={{marginRight: 5}}>
                                00
                            </Text>
                            <Text color={color.turkuaz} bold h6 style={{marginRight: 5}}>
                                :
                            </Text>
                            <Text color={color.turkuaz} bold h6 style={{marginRight: 5}}>
                                00
                            </Text>
                            <Text color={color.turkuaz} bold h6 style={{marginRight: 5}}>
                                :
                            </Text>
                            <Text color={color.turkuaz} bold h6>
                                00
                            </Text>
                        </View>
                    </View>*/}
                    <View style={[styles.bottomRow]}>
                        <View>
                            <Text color={color.secondary2} p center>KEŞİDECİ VKN</Text>
                            <Text bold p center>{data.check_vkn}</Text>
                        </View>
                        <View>
                            <Text color={color.secondary2} p center>YÜKLEME TARİHİ</Text>
                            <Text bold p center>{moment(data.created_at).format('DD-MM-YYYY HH:mm')}</Text>
                        </View>
                    </View>
                    <View style={[styles.bottomRow]}>
                        <View style={{flex: 0.4}}>
                            <Text p bold center>ÇEK ÖNYÜZÜ</Text>
                        </View>
                        <View style={{flex: 0.2}}>
                            <Image style={{width: 50, height: 50, resizeMode: 'contain'}}
                                   source={{uri: data.check_image_front}}/>
                        </View>
                    </View>
                    <View style={[styles.bottomRow]}>
                        <View style={{flex: 0.4}}>
                            <Text p bold center>ÇEK ARKA YÜZÜ</Text>
                        </View>
                        <View style={{flex: 0.2}}>
                            <Image style={{width: 50, height: 50, resizeMode: 'contain'}}
                                   source={{uri: data.check_image_back}}/>
                        </View>
                    </View>
                    <View style={[styles.bottomRow, {backgroundColor: color.lightGray}]}>
                        <View>
                            <Text color={color.secondary2} p center>TOPLAM FATURA TUTARI:</Text>
                        </View>
                        <View>
                            <Text bold h6 center>{data.check_invoice_amount} TL</Text>
                        </View>
                    </View>
                    {data.check_bid > 0 &&
                    <>
                        <View style={[styles.bottomRow]}>
                            <View style={{flex: 0.4}}>
                                <Text p bold center>TEKLİFLER</Text>
                            </View>
                            <View style={{flex: 0.6}}>
                                <Text bold h6 center>{data.check_bid} TL</Text>
                            </View>
                        </View>
                        <View style={{marginTop: 20}}>
                            <Button color={color.white} onPress={() => Accept()} title={'Kabul Et'}
                                    variant={'primary'}/>
                        </View>
                    </>}
                </ScrollView>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.gray,
    },
    rowFront: {
        backgroundColor: color.white,
        marginBottom: 5
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingBottom: 20,
        paddingTop: 5,
        justifyContent: 'space-around'
    },
    bottom: {
        height: 60,
        paddingHorizontal: 15,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.gradientStart2,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: color.secondary,
    },
    bottomRow: {
        flexDirection: 'row',
        marginTop: 20,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: color.white
    }
})

export default ListDetailScreen;