import React from 'react';

const ValidationContext = React.createContext({
    name:noValidate,
    email:noValidate,
    phone:noValidate,
    city:noValidate, 
    subject:noValidate,
    message:noValidate
});

function noValidate(values){
    return { valid:true, text:"" }
};

export default ValidationContext;