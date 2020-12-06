import { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthRequests from '../requests/auth.requests';

import NavigationActions from '../navigation/navigationActions';

const LoginHooks = () => {
  const [tckn, setTckn] = useState('34343193976');
  const [password, setPassword] = useState('2020asfirinmakine');

  const { navigatePush, openLoading, closeLoading, navigatePop, navigateReset } = NavigationActions();
  
  const isValidated = () => {
    const rules = [
      tckn,
      (tckn && tckn.length === 11),
      password,
    ];
    return rules.every(i => i);
  }

  const getValidationError = () => {
    if (!tckn) return 'T.C. Kimlik no bilgisi boş bırakılamaz!';
    else if (tckn.length < 11) return 'T.C. Kimlik no bilgisi 11 haneden az olamaz!';
    else if (!password) return 'Şifre bilgisi boş bırakılamaz';
    else return null;
  }

  const onLogin = () => {
    if (isValidated()) {
      return new Promise((resolve, reject) => {
        openLoading();
        const loginPostBody = {
          company_official_tckn: tckn,
          password,
        }
        AuthRequests.login(loginPostBody).then((response) => {
          if (response.token){
            // AsyncStorage.setItem('token', JSON.stringify(response.token));
            AsyncStorage.setItem('userInfo', JSON.stringify(response));
            closeLoading();
            if (!response.companyInfo) {
              navigatePush('firmSettings', { fromLogin: true });
            } else {
              navigateReset('home')
            }
          }else{
            closeLoading();
            return false;
          }
        }).catch((error) => {
          console.log('errorerror', error);
          closeLoading();
        })
      })
    } else {
      console.log('5555555');
      navigatePush('errorModal', { message: getValidationError() });
    }
  }

  return {
    tckn, setTckn,
    password, setPassword,
    onLogin,
  };
};

export default LoginHooks;
