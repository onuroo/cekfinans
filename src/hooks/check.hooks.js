import {useEffect, useState} from 'react';



const CheckHooks = () => {
    const [chekOn, setCheckOn] = useState(null);
    const [chekArka, setCheckArka] = useState(null);
    const [chekFatura, setCheckFatura] = useState(null);
    const [ftVKN, setftVKN] = useState(null);
    const [ftPrice, setftPrice] = useState(null);
    const [ftKonu, setFtKonu] = useState(null);
    const [cekPrice, setCekPrice] = useState(null);
    const [cekDate, setCekDate] = useState(null);
    const [cekVKN, setCekVKN] = useState(null);
    const [priceType, setPriceType] = useState(null);
    const [cekNumber, setCekNumber] = useState(null);
    return {
        chekOn, setCheckOn,
        chekArka, setCheckArka,
        chekFatura, setCheckFatura,
        ftVKN, setftVKN,
        ftPrice, setftPrice,
        ftKonu, setFtKonu,
        cekPrice, setCekPrice,
        cekDate, setCekDate,
        cekVKN, setCekVKN,
        priceType, setPriceType,
        cekNumber, setCekNumber,
    };
}

export default CheckHooks;