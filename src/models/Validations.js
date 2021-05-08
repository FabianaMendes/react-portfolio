function validateName(name) {
    if ( name.length === 0 ) {
      return ({ valid: false, text: "*Required" });
    } else {
      return { valid: true, text: "" };
    }
}
  
function validateEmail(email) {
    const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if ( emailRegex.test(email) ) {
    return { valid: true, text: "" };
    } 
    if ( email.value === "" || email.length === 0 ) {
    return { valid: false, text: "*Required" };
    } 
    else {
    return { valid: false, text: "E-mail inválido" };
    }
}

function validatePhone(phone) {
    if ( phone.value === "" || phone.length === 0 ) {
      return { valid: false, text: "*Required" };
    } 
    if ( phone.length !== 14 ) {
      return { valid: false, text: "Digite um telefone válido" };
    } 
    else {
      return { valid: true, text: "" };
    }
}

function validateMessage(message) {
    if (message.length < 10 ) {
      return ({ valid: false, text: "*Required" });
    } else {
      return { valid: true, text: "" };
    }
}
  

export { validateName, validateEmail, validatePhone, validateMessage };