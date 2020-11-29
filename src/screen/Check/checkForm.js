import React, {useContext} from 'react';
import {View} from "react-native";
import {Header, Button, Date, Input, Selected, GoBack} from "../../components";
import {color} from "../../components/ThemeConfig";
import CheckHooks from '../../hooks/check.hooks';
import {AppStateContext} from "../../context/CheckContext";
import {navigate} from "../../config/navigator";

const CheckForm = ({route}) => {
    const {
        setAddInvoiceModal, error, onSend, setPriceType, priceType,
        setCekDate, cekDate,
        setCekNumber, cekNumber,
        setCekPrice, cekPrice,
        setCekVKN, cekVKN,
        setFtKonu, ftKonu,
        setftPrice, ftPrice,
        setftVKN, ftVKN, addInvoiceModal
    } = useContext(AppStateContext)

    const onGoCheck = () => {

        if (parseInt(cekPrice) > parseInt(ftPrice)) {
            navigate('addInvoice', {message: 'Çek tutarı fatura tutarından fazla olamaz. Varsa ek faturanızı ekleyin.'})
        } else{
            onSend().then(res => console.log('asdas Tamamdır!')).catch(e=> navigate('errorModal', {message: e.message}));

        }
    }
    return (
        <View>
            <Header title={'Talep Ekle'} description={'Yurtiçi Faktoring'} left={<GoBack/>}/>
            <View style={{
                padding: 20,
            }}>
                <Input value={ftVKN} maxLength={11} onChangeText={(text) => setftVKN(text)} keybordType={"numeric"}
                       placeholder={'FATURA BORÇLUSU VKN'}/>
                <Input value={ftPrice} onChangeText={(text) => setftPrice(text)} keybordType={"numeric"}
                       placeholder={'FATURA TUTARI'}/>
                <Input value={ftKonu} onChangeText={(text) => setFtKonu(text)}
                       placeholder={'Faturaya konu olan ticaretin içeriğini yazınız.'}/>
                <Input value={cekPrice} onChangeText={(text) => setCekPrice(text)} keybordType={"numeric"}
                       placeholder={'ÇEK MİKTARI'}/>
                <Input value={cekVKN} maxLength={11} onChangeText={(text) => setCekVKN(text)} keybordType={"numeric"}
                       placeholder={'ÇEK VKN'}/>
                <Date setSelected={setCekDate} selected={cekDate} label={'ÇEK TARİHİ'}/>
                <Selected style={{backgroundColor:color.gray}} setSelected={setPriceType} placeholder={"ÇEK PARA BİRİMİ"} selected={priceType}
                          data={[{title: 'TL', id: 1}]}/>
                <Input value={cekNumber} maxLength={12} onChangeText={(text) => setCekNumber(text)}
                       placeholder={'ÇEK NUMARASI'}/>
                <Button onPress={() => onGoCheck()} variant={'primary'} title={'Devam'} color={color.white}/>
            </View>


        </View>
    )
}

export default CheckForm;