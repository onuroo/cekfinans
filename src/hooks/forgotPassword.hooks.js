import React, {useContext, useState} from 'react';
import { ForgotPasswordContext } from '../context/ForgotPasswordContext';
import NavigationActions from '../navigation/navigationActions';
import AuthRequests from '../requests/auth.requests';

const ForgotPasswordHooks = () => {
    const {
        resetTckn, setResetTckn,
        correctCode, setCorrectCode,
        codeValue, setCodeValue,
        password, setPassword,
        passwordAgain, setPasswordAgain,
        tckn, setTkcn,
    } = useContext(ForgotPasswordContext);
    
    const [codeConfirmError, setCodeConfirmError] = useState(null);
    const [passwordConfirmError, setPasswordConfirmError] = useState(null);
   
    const { navigatePush, openLoading, closeLoading } = NavigationActions();

    const {
        passwordReset,
        codeConfirm,
        passwordConfirm,
    } = AuthRequests;


    const onSubmitPasswordReset = () => {
        openLoading();
        const postBody = {
            tckn: resetTckn
        };
        passwordReset(postBody).then((response) => {
            console.log('5555 passwordReset response', response);
            const { code } = response;
            closeLoading();
            setCorrectCode(code);
            navigatePush('forgotCodeVerify');

        }).catch((error) => {
            console.log('5555 passwordReset error', error);
            closeLoading();
            navigatePush('errorModal', { message: error.message });
        });
    }

    const onSubmitCodeConfirm = () => {
        if (codeValue.toString() === correctCode.toString()) {
            openLoading();
            const postBody = {
                code: correctCode,
                tckn: resetTckn,
            };
            console.log('5555 codeConfirm postBody', postBody);
            codeConfirm(postBody).then((response) => {
                console.log('5555 codeConfirm response', response);
                closeLoading();
                navigatePush('passwordConfirm');
            }).catch((error) => {
                console.log('5555 codeConfirm error', error);
                closeLoading();
                navigatePush('errorModal', { message: error.message });
            });
        } else {
            setCodeConfirmError('Kod yanlış!');
        }
    }

    const onSubmitPasswordConfirm = () => {
        if (password === passwordAgain) {
            openLoading();
            const postBody = {
                tckn: resetTckn,
                password,
                password_second: passwordAgain,
            };
            passwordConfirm(postBody).then((response) => {
                console.log('5555 passwordConfirm response', response);
                closeLoading();
                setResetTckn(null);
                setCorrectCode(null);
                setCodeValue(null);
                setTkcn(null);
                navigatePush('successPasswordChangeModal');
            }).catch((error) => {
                console.log('5555 passwordConfirm error', error);
                closeLoading();
                navigatePush('errorModal', { message: error.message });
            });
        } else {
            setPasswordConfirmError('Şifreler birbirleriyle uyuşmuyor!');
        }
    }

    return {
        resetTckn, setResetTckn,
        correctCode, setCorrectCode,
        codeValue, setCodeValue,
        codeConfirmError, setCodeConfirmError,
        password, setPassword,
        passwordAgain, setPasswordAgain,
        passwordConfirmError, setPasswordConfirmError,
        tckn, setTkcn,
        onSubmitPasswordReset,
        onSubmitCodeConfirm,
        onSubmitPasswordConfirm,
    }
}

export default ForgotPasswordHooks;