import React, {useState, useEffect} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import {Text, Button, Header, Selected, Input, GoBack} from '../components'
import {color} from "../components/ThemeConfig";
import request from "../config/request";


const FirmSettingsScreen = () => {
    let textColor = color.gradientEnd2;
    let [city, setCity] = useState([]);
    let [district, setDistrict] = useState([]);
    let [selectedCity, setSelectedCity] = useState(null);
    let [selectedDistrict, setSelectedDistrict] = useState(null);
    useEffect(() => {
        async function fetchData() {
            await request.post('common/cities').then(res => {
                setCity(res.cities)
            })
        }
        fetchData();

    },[])
    useEffect(() => {
        async function fetchData() {
            setSelectedDistrict(null)
            setDistrict([])
            await request.post('common/district',{id:selectedCity.id}).then(res => {
                setDistrict(res.district)
            })
        }
        if (selectedCity){
            fetchData();
        }
    },[selectedCity])
    return (
        <View style={styles.container}>
            <Header left={<GoBack/>} title={'İşletme Ayarları'}/>
            <View style={styles.content}>
                <ScrollView contentContainerStyle={{paddingBottom: 40,}}>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>SEKTÖR</Text>
                        <Input style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>FİRMA VKN</Text>
                        <Input keyboardType={'number-pad'} maxLength={10} textColor={textColor} style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>FİRMA ÜNVANI</Text>
                        <Input textColor={textColor} style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>VERGİ DAİRESİ</Text>
                        <Input textColor={textColor} style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={[styles.row, {flexDirection: 'row', alignItems: 'center', alignContent: 'center'}]}>
                        <Text color={color.secondary} h6
                              style={{padding: 10, marginBottom: 0, justifyContent: 'center'}}>+90</Text>
                        <Input keyboardType={'number-pad'} maxLength={10} textColor={textColor}
                               style={[styles.input, {
                                   width: '80%',
                                   fontSize: 16,
                                   marginBottom: 0,
                                   alignItems: 'center',
                                   alignContent: 'center',
                                   backgroundColor: 'transparent'
                               }]}/>
                    </View>
                    <View style={{paddingHorizontal: 20}}>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>E POSTA ADRESİ</Text>
                        <Input keyboardType={'email-address'} maxLength={10} style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>WEBSİTE</Text>
                        <Input style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <View>
                            <Text h5 color={color.gradientEnd}>Firma Adres: </Text>
                        </View>
                        <View style={styles.row}>
                            <Selected selected={selectedCity} setSelected={setSelectedCity} type={'city'} placeholder={'Şehir Seç'} data={city}/>
                        </View>
                        <View style={styles.row}>
                            <Selected selected={selectedDistrict} setSelected={setSelectedDistrict} type={'district'} placeholder={'İlçe Seç'} data={district}/>
                        </View>
                        <View style={styles.row}>
                            <Selected placeholder={'Mahalle Seç'} data={city}/>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>CADDE/SOKAK</Text>
                        <Input style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>KAPI NO</Text>
                        <Input style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>DAİRE NO</Text>
                        <Input style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <View>
                            <Text h5 color={color.gradientEnd}>Firma Yetkilisi: </Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>TCKN</Text>
                        <Input keyboardType={'number-pad'} maxLength={11} style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>AD-SOYAD</Text>
                        <Input style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={[styles.row, {flexDirection: 'row', alignItems: 'center', alignContent: 'center'}]}>
                        <Text color={color.secondary} h6
                              style={{padding: 10, marginBottom: 0, justifyContent: 'center'}}>+90</Text>
                        <Input keyboardType={'number-pad'} maxLength={10} textColor={textColor}
                               style={[styles.input, {
                                   width: '80%',
                                   fontSize: 16,
                                   marginBottom: 0,
                                   alignItems: 'center',
                                   alignContent: 'center',
                                   backgroundColor: 'transparent'
                               }]}/>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>E POSTA</Text>
                        <Input keyboardType={'email-address'} style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>ÜNVAN</Text>
                        <Input style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <Button variant={'primary'} color={color.white} title={'Gönder'}
                                onPress={() => console.log('press')}/>
                    </View>
                </ScrollView>

            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    row: {
        marginVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'column',
    },
    input: {
        borderRadius: 0,
        width: '100%',
        height: 40,
        fontSize: 16,
        marginBottom: 5,
        backgroundColor: 'transparent',
    },
    hr: {
        marginTop: 0,
        height: 2,
        backgroundColor: color.gray
    }
})

export default FirmSettingsScreen;