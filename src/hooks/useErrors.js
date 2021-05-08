import React, { useState } from 'react';

function useErrors(validations){
    const initialState = createInitialState(validations);
    const [ errors, setErrors ] = useState(initialState);
    const [isVerified, setIsVerified] = useState(false);

    function onloadCallback() {
        console.log('Captcha loaded');
    }

    function validateInput(event){
        const {name, value} = event.target;
        const newState = {...errors};
        newState[name] = validations[name](value);
        setErrors(newState);
    }

    function verifyCallback(response) {
        if (response) {
            setIsVerified(true);
        }
    }

    function canSubmit(){
        for(let field in errors){
            if( !errors[field].valid ) {
                alert('Por favor, verifique seus dados e tente novamente!');
                return false;
            } else if ( !isVerified ){
                alert('Por favor, certifique-se de que você não é um robô!');
                return false;
            }
        }
        return true;
    }

    return [errors, validateInput, onloadCallback, verifyCallback, canSubmit];
}

function createInitialState(validations){
    const initialState = {}
    for(let field in validations){
        initialState[field] = { valid: true, text: "" }
    }
    return initialState;
}

export default useErrors;