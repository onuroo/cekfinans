import { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';


import { emailValidation } from '../helpers/utils';
import AuthRequests from '../requests/auth.requests';

import NavigationActions from '../navigation/navigationActions';

const RegisterHooks = () => {
  const [namesurname, setNamesurname] = useState('As Firin Makine');
  const [tckn, setTckn] = useState('12345678912');
  const [phone, setPhone] = useState('5556667788');
  const [email, setEmail] = useState('info@asfirinmakine.com');
  const [password, setPassword] = useState('2020asfirinmakine');
  const [passwordAgain, setPasswordAgain] = useState('2020asfirinmakine');
  const [checkKvkk, setCheckKVkk] = useState('2020asfirinmakine');
  const [checkTerm, setCheckTerm] = useState('2020asfirinmakine');

  const { navigatePush, openLoading, closeLoading, navigatePop } = NavigationActions();
  
  const isValidated = () => {
    const rules = [
      namesurname,
      tckn,
      (tckn && tckn.length === 11),
      email,
      (email && emailValidation(email)),
      password,
      passwordAgain,
      (password && passwordAgain && password === passwordAgain),
      checkKvkk,
      checkTerm,
    ];
    console.log('rules.every', rules.every(i => i));
    return rules.every(i => i);
  }

  const getValidationError = () => {
    if (!namesurname) return 'Ad soyad bilgisi boş bırakılamaz!';
    else if (!tckn) return 'T.C. Kimlik no bilgisi boş bırakılamaz!';
    else if (tckn.length < 11) return 'T.C. Kimlik no bilgisi 11 haneden az olamaz!';
    else if (!phone) return 'Telefon bilgisi boş bırakılamaz';
    else if (!email) return 'E-mail bilgisi boş bırakılamaz';
    else if (!emailValidation(email)) return 'E-mail bilgisi doğru formatta olmalı!';
    else if (!password) return 'Şifre bilgisi boş bırakılamaz';
    else if (!passwordAgain) return 'Şifre tekrar bilgisi boş bırakılamaz';
    else if (password !== passwordAgain) return 'Şifre ve Şifre tekrar bilgileri aynı olmalıdır!';
    else if (checkKvkk) return 'Kvkk Aydınlatma metnini kabul etmelisiniz!';
    else if (checkTerm) return 'Çen finans sözleşmesini kabul etmelisiniz!';
    else return null;
  }

  const onRegister = () => {
    if (isValidated()) {
      const queryParams = `?company_official_name=${namesurname}&company_official_tckn=${tckn}&company_official_email=${email}&company_official_phone=${phone}&password=${password}&password_restart=${passwordAgain}`;
      return new Promise((resolve, reject) => {
        openLoading();
        AuthRequests.userRegister(queryParams).then((response) => {
          closeLoading();
          const { token, code } = response;
          navigatePush('codeVerify', { token, code, tckn, password });
        }).catch((error) => {
          closeLoading();
          navigatePush('errorModal', { message: error.message });
        })
      })
    } else {
      navigatePush('errorModal', { message: getValidationError() });
    }
  }

  const onRegisterUserControl = (queryParams, company_official_tckn, user_password) => {
    return new Promise((resolve, reject) => {
      openLoading();
      AuthRequests.userRegisterControl(queryParams).then((response) => {
        closeLoading();
        const loginPostBody = {
          company_official_tckn,
          password: user_password,
        }
        AuthRequests.login(loginPostBody).then((response) => {
          console.log('login response', response);
          // AsyncStorage.setItem('token', JSON.stringify(response.token));
          AsyncStorage.setItem('userInfo', JSON.stringify(response));
          navigatePop();
          if (!response.companyInfo) {
            navigatePush('firmSettings');
          } else {
            navigateReset('home');
          }
        })
        .catch((error) => {
          console.log('login error', error);
        });
        // navigatePush('codeVerify', { token, code });
      }).catch((error) => {
        closeLoading();
        navigatePush('errorModal', { message: error.message });
      })
    })
  }

  return {
    namesurname, setNamesurname,
    tckn, setTckn,
    phone, setPhone,
    email, setEmail,
    password, setPassword,
    passwordAgain, setPasswordAgain,
    checkKvkk, setCheckKVkk,
    checkTerm, setCheckTerm,
    onRegister,
    onRegisterUserControl,
  };
};

export default RegisterHooks;