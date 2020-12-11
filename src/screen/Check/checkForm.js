import React, {useContext} from 'react';
import {View} from "react-native";
import {Header, Button, Date, Input, Selected, GoBack} from "../../components";
import {color} from "../../components/ThemeConfig";
import {AppStateContext} from "../../context/CheckContext";
import NavigationActions from '../../navigation/navigationActions';

const CheckForm = ({route}) => {
    let {openLoading, navigatePush, navigateReset, closeLoading} = NavigationActions();
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

    const onGoCheck = async () => {
        openLoading()
        if (parseInt(cekPrice) > parseInt(ftPrice)) {
            closeLoading()
            navigatePush('addInvoice', {message: 'Çek tutarı fatura tutarından fazla olamaz. Varsa ek faturanızı ekleyin.'})
        } else {
            await onSend().then(res => {
                    closeLoading()
                    navigateReset('home')
                }
            ).catch(e => {
                closeLoading()
                navigatePush('errorModal', {message: e.message})
            });
        }
    }
    return (
        <View>
            <Header title={'Talep Ekle'} description={'Yurtiçi Faktoring'} left={<GoBack/>}/>
            <View style={{
                padding: 20,
            }}>
                <Input keyboardType={'number-pad'} value={ftVKN} maxLength={11} onChangeText={(text) => setftVKN(text)}
                       placeholder={'FATURA BORÇLUSU VKN'}/>
                <Input keyboardType={'number-pad'} value={ftPrice} onChangeText={(text) => setftPrice(text)}
                       placeholder={'FATURA TUTARI'}/>
                <Input value={ftKonu} onChangeText={(text) => setFtKonu(text)}
                       placeholder={'Faturaya konu olan ticaretin içeriğini yazınız.'}/>
                <Input value={cekPrice} onChangeText={(text) => setCekPrice(text)}
                       placeholder={'ÇEK MİKTARI'}/>
                <Input keyboardType={'number-pad'} value={cekVKN} maxLength={11} onChangeText={(text) => setCekVKN(text)}
                       placeholder={'ÇEK VKN'}/>
                <Date setSelected={setCekDate} selected={cekDate} label={'ÇEK TARİHİ'}/>
                <Selected style={{backgroundColor: color.gray}} setSelected={setPriceType}
                          placeholder={"ÇEK PARA BİRİMİ"} selected={priceType}
                          data={['TL']}/>
                <Input keyboardType={'number-pad'} value={cekNumber} maxLength={12} onChangeText={(text) => setCekNumber(text)}
                       placeholder={'ÇEK NUMARASI'}/>
                <Button onPress={() => onGoCheck()} variant={'primary'} title={'Devam'} color={color.white}/>
            </View>


        </View>
    )
}

export default CheckForm;