import React, {useState, useEffect} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, Button, Header, Selected, Input, GoBack} from '../components'
import {color} from "../components/ThemeConfig";
import request from "../config/request";

import NavigationActions from '../navigation/navigationActions';

import FirmHooks from '../hooks/firm.hooks';

const FirmSettingsScreen = () => {
    let textColor = color.gradientEnd2;

    const {
        isUpdate,
        handleFormInputs,
        getFormItem,
        getCities,
        setSelectedCity,
        setSelectedDistrict,
        setSelectedNeighborhood,
        cities,
        districts,
        neighborhoods,
        companyRegister,
        getCompanyDetail,
        updateCompanyDetail,
    } = FirmHooks();
    
    useEffect(() => {
        getCompanyDetail();
        getCities();
        AsyncStorage.getItem('userInfo').then((resp) => {
            if (userInfo) {
                handleFormInputs('token', JSON.parse(userInfo).token)
            }
        });

    }, []);
   
    return (
        <View style={styles.container}>
            <Header left={<GoBack/>} title={'İşletme Ayarları'}/>
            <View style={styles.content}>
                <ScrollView contentContainerStyle={{paddingBottom: 40,}}>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>SEKTÖR</Text>
                        <Input value={ getFormItem("sector") } onChangeText={ (val) => handleFormInputs('sector', val) } style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>FİRMA VKN</Text>
                        <Input value={ getFormItem("company_vkn") } onChangeText={ (val) => handleFormInputs('company_vkn', val) } keyboardType={'number-pad'} maxLength={10} textColor={textColor} style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>FİRMA ÜNVANI</Text>
                        <Input value={ getFormItem("company_title") } onChangeText={ (val) => handleFormInputs('company_title', val) } textColor={textColor} style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>VERGİ DAİRESİ</Text>
                        <Input value={ getFormItem("company_tax_office") } onChangeText={ (val) => handleFormInputs('company_tax_office', val) } textColor={textColor} style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={[styles.row, {flexDirection: 'row', alignItems: 'center', alignContent: 'center'}]}>
                        <Text color={color.secondary} h6
                              style={{padding: 10, marginBottom: 0, justifyContent: 'center'}}>+90</Text>
                        <Input value={ getFormItem("company_phone") } onChangeText={ (val) => handleFormInputs('company_phone', val) } keyboardType={'number-pad'} maxLength={10} textColor={textColor}
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
                        <Input value={ getFormItem("email") } onChangeText={ (val) => handleFormInputs('email', val) } keyboardType={'email-address'} style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>WEBSİTE</Text>
                        <Input value={ getFormItem("company_website") } onChangeText={ (val) => handleFormInputs('company_website', val) } style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <View>
                            <Text h5 color={color.gradientEnd}>Firma Adres: </Text>
                        </View>
                        <View style={styles.row}>
                            <Selected
                              selected={JSON.parse(getFormItem('company_address_city'))}
                              setSelected={setSelectedCity}
                              type={'city'}
                              placeholder={'Şehir Seç'}
                              data={cities}
                            />
                        </View>
                        <View style={styles.row}>
                            <Selected
                              selected={JSON.parse(getFormItem('company_address_district'))}
                              setSelected={setSelectedDistrict}
                              type={'district'}
                              placeholder={'İlçe Seç'}
                              data={districts}
                            />
                        </View>
                        <View style={styles.row}>
                            <Selected
                              selected={JSON.parse(getFormItem('company_address_neighborhood'))}
                              setSelected={setSelectedNeighborhood}
                              type={'neighborhood'}
                              placeholder={'Mahalle Seç'}
                              data={neighborhoods}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>CADDE/SOKAK</Text>
                        <Input value={ getFormItem('company_address_street') } onChangeText={ (val) => handleFormInputs('company_address_street', val) } style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>KAPI NO</Text>
                        <Input value={ getFormItem('company_address_door_no') } onChangeText={ (val) => handleFormInputs('company_address_door_no', val) } style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>DAİRE NO</Text>
                        <Input value={ getFormItem('company_address_apartment_no') } onChangeText={ (val) => handleFormInputs('company_address_apartment_no', val) } style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    <View style={styles.row}>
                        <View>
                            <Text h5 color={color.gradientEnd}>Firma Yetkilisi: </Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text color={color.secondary} h6>ÜNVAN</Text>
                        <Input value={ getFormItem('company_official_title') } onChangeText={ (val) => handleFormInputs('company_official_title', val) } style={styles.input}/>
                        <View style={styles.hr}/>
                    </View>
                    {/* <View style={styles.row}>
                        <View>
                            <Text h5 color={color.gradientEnd}>Firma Yetkilisi: </Text>
                        </View>
                    </View>
                     <View style={styles.row}>
                        <Text color={color.secondary} h6>TCKN</Text>
                        <Input  keyboardType={'number-pad'} maxLength={11} style={styles.input}/>
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
                    </View> */}
                    <View style={styles.row}>
                        <Button variant={'primary'} color={color.white} title={'Gönder'}
                            onPress={ isUpdate ? updateCompanyDetail : companyRegister }/>
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