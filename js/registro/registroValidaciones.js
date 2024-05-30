
const cadenaNoVacia = (e) =>{
    if (!e || !e.value.trim()){
        return true;
    }
    return false;
}
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export const validateEmail = (e)=>{
    //no estar vacio
    if(cadenaNoVacia(e)){
        setError(e, 'El email no puede estar vacio');
        return false;
    }
    //tiene que tener patron de email
    if (!isValidEmail(e.value.trim())) {
        setError(e, 'El email es invalido');
        return false;
    } 
    //tiene que n
    setSuccess(e);
    return true;
}
export const validatePassword = (e) => {
    const password = e.value;

    const lengthWarning = document.getElementById('length-warning');
    const uppercaseWarning = document.getElementById('uppercase-warning');
    const lowercaseWarning = document.getElementById('lowercase-warning');
    const numberWarning = document.getElementById('number-warning');
    const specialWarning = document.getElementById('special-warning');

    let isValid = true;

    // mínimo 8 caracteres
    if (password.length < 8) {
        lengthWarning.classList.remove('valid');
        isValid = false;
    } else {
        lengthWarning.classList.add('valid');
    }

    // al menos una letra mayúscula
    if (!/[A-Z]/.test(password)) {
        uppercaseWarning.classList.remove('valid');
        isValid = false;
    } else {
        uppercaseWarning.classList.add('valid');
    }

    // al menos una letra minúscula
    if (!/[a-z]/.test(password)) {
        lowercaseWarning.classList.remove('valid');
        isValid = false;
    } else {
        lowercaseWarning.classList.add('valid');
    }

    // al menos un número
    if (!/\d/.test(password)) {
        numberWarning.classList.remove('valid');
        isValid = false;
    } else {
        numberWarning.classList.add('valid');
    }

    // al menos un carácter especial
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        specialWarning.classList.remove('valid');
        isValid = false;
    } else {
        specialWarning.classList.add('valid');
    }

    if (isValid) {
        setSuccess(e);
    } else {
        setError(e, 'La contraseña no cumple con todas las condiciones');
    }

    return isValid;
};
export const validatePasswordConfirmation = (password, password2) => {
    // no estar vacío
    if (cadenaNoVacia(password2)) {
        setError(password2, 'Por favor, confima tu contraseña');
        return false;
    }
    // coincidir con la contraseña
    if (password2.value !== password.value) {
        setError(password2, "Las contraseñas ingresadas no coinciden");
        return false;
    }
    setSuccess(password2);
    return true;
};

