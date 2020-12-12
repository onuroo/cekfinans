import React, {useState, useEffect} from 'react';

export const ForgotPasswordContext = React.createContext();

const ForgotPasswordProvider = props => {
    const [resetTckn, setResetTckn] = useState(null);

    const [codeConfirmTckn, setCodeConfirmTckn] = useState(null);
    const [correctCode, setCorrectCode] = useState(null);
    const [codeValue, setCodeValue] = useState(null);
    
    
    const [password, setPassword] = useState(null);
    const [passwordAgain, setPasswordAgain] = useState(null);
    const [tckn, setTkcn] = useState(null);

    
    
    let ContextValue = {
        resetTckn, setResetTckn,
        codeConfirmTckn, setCodeConfirmTckn,
        correctCode, setCorrectCode,
        codeValue, setCodeValue,
        password, setPassword,
        passwordAgain, setPasswordAgain,
        tckn, setTkcn,
    }

    return (
        <ForgotPasswordContext.Provider value={ContextValue}>
            {props.children}
        </ForgotPasswordContext.Provider>
    );
};

export default ForgotPasswordProvider