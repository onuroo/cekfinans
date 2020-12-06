import React, {useState, useEffect} from 'react';
import checkRequests from '../requests/check.requests'
export const AppStateContext = React.createContext();
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const AppStateProvider = props => {
    const [exFaturaInfo, setExFaturaInfo] = useState(null);
    const [extraData, setExtraData] = useState([]);
    const [addInvoiceModal, setAddInvoiceModal] = useState(false);
    const [chekOn, setCheckOn] = useState(null);
    const [chekArka, setCheckArka] = useState(null);
    const [chekFatura, setCheckFatura] = useState(null);
    const [ftVKN, setftVKN] = useState('');
    const [ftPrice, setftPrice] = useState(null);
    const [ftKonu, setFtKonu] = useState(null);
    const [cekPrice, setCekPrice] = useState(null);
    const [cekDate, setCekDate] = useState(null);
    const [cekVKN, setCekVKN] = useState(null);
    const [priceType, setPriceType] = useState(null);
    const [cekNumber, setCekNumber] = useState(null);
    const [error, setError] = useState({status: false, message:''});
    const extraDataGoBack = () => {
        if (extraData.length > 0) {
            setExtraData(oldArray => [...oldArray, exFaturaInfo])
        } else {
            setExtraData([exFaturaInfo])
        }
        setExFaturaInfo(null)
    }
    const clearData = () => {
        setCekNumber(null)
        setCekNumber(setExFaturaInfo)
        setExtraData([])
        setAddInvoiceModal(null)
        setCheckArka(null)
        setCheckOn(null)
        setPriceType(null)
        setCekVKN(null)
        setCekDate(null)
        setCekPrice(null)
        setFtKonu(null)
        setftPrice(null)
        setftVKN(null)
        setCheckFatura(null)
    }
    const validates = () => {
        const rules = [
            (ftVKN && ftVKN.length === 11),
            (ftPrice),
            (ftKonu),
            (cekPrice),
            (cekDate),
            (cekVKN && cekVKN.length === 11),
            (priceType),
            (cekNumber),
        ];
        return rules.every(i => i);
    }
    const getValidationError = () => {
        if (ftVKN.length !== 11 && !ftVKN !=='' )  return 'Fatura Borçlusu VKN boş bırakılamaz ve 11 karakter olmalıdır.';
        else if (!ftPrice) return 'Fatura Tutarı boş bırakılamaz!';
        else if (!ftKonu) return 'Fatura konu bilgisi boş olamaz!';
        else if (!cekPrice) return 'Çek Miktarı bilgisi boş bırakılamaz';
        else if (!cekDate) return 'Çek Tarihi bilgisi boş bırakılamaz';
        else if (cekVKN!=='' && cekVKN.length !== 11) return 'Çek VKN 11 karakter olmalıdır!';
        else if (!priceType) return 'Fiyat Tipi Boş Bırakılamaz!';
        else if (!cekNumber) return 'Çek Numarası Boş Bırakılamaz!';
        else return null;
    }

    const onSend = () => {
       return new Promise(async (resolve, reject) => {
            if (validates()) {
                let token = await AsyncStorage.getItem('token');
                let date = moment(cekDate,'DD-MM-YYYY').format('YYYY-MM-DD')
                let params = new FormData();
                params.append('token',JSON.parse(token));
                params.append('check_bill_debtor_vkn',ftVKN);
                params.append('check_invoice_amount',ftPrice);
                params.append('check_content',ftKonu);
                params.append('check_total',cekPrice);
                params.append('check_date',date);
                params.append('check_vkn',cekVKN);
                params.append('check_currency_unit',priceType.title);
                params.append('check_number',cekNumber);
                params.append('check_image_tax',{uri: chekFatura.uri, name: chekFatura.fileName+'-.jpg', type: chekFatura.type});
                params.append('check_image_front',{uri: chekOn.uri, name: chekOn.fileName+'-.jpg', type: chekOn.type});
                params.append('check_image_back',{uri: chekArka.uri, name: chekArka.fileName+'-.jpg', type: chekArka.type});
                if (extraData.length > 0){
                    extraData.map(item => {
                        params.append('check_invoice_extra_images[]',{uri: item.uri, name: item.fileName+'-.jpg', type: item.type});
                    })
                }
               let data =  await checkRequests.CheckRegister(params)
                console.log(data)
                clearData();
                resolve({status: false, message: ''})
            } else {
                reject({status: true, message:await getValidationError()})
            }
        })

    }
    let ContextValue = {
        error,
        onSend, chekOn, setCheckOn,
        chekArka, setCheckArka,
        chekFatura, setCheckFatura,
        ftVKN, setftVKN,
        ftPrice, setftPrice,
        ftKonu, setFtKonu,
        cekPrice, setCekPrice,
        cekDate, setCekDate,
        cekVKN, setCekVKN,
        priceType, setPriceType,
        cekNumber, setCekNumber, addInvoiceModal, setAddInvoiceModal, exFaturaInfo, setExFaturaInfo, extraDataGoBack
    }

    return (
        <AppStateContext.Provider value={ContextValue}>
            {props.children}
        </AppStateContext.Provider>
    );
};

export default AppStateProvider