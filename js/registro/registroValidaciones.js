
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
        setError(e, 'Email is required');
        return false;
    }
    //tiene que tener patron de email
    if (!isValidEmail(e.value.trim())) {
        setError(e, 'Provide a valid email address');
        return false;
    } 
    //tiene que n
    setSuccess(e);
    return true;
}
export const validatePassword = (e) => {
    // no estar vacío
    if (cadenaNoVacia(e)) {
        setError(e, 'Password is required');
        return false;
    }
    // mínimo 8 caracteres
    if (e.value.length < 8) {
        setError(e, 'Password must be at least 8 characters');
        return false;
    }
    setSuccess(e);
    return true;
};

export const validatePasswordConfirmation = (password, password2) => {
    // no estar vacío
    if (cadenaNoVacia(password2)) {
        setError(password2, 'Please confirm your password');
        return false;
    }
    // coincidir con la contraseña
    if (password2.value !== password.value) {
        setError(password2, "Passwords don't match");
        return false;
    }
    setSuccess(password2);
    return true;
};

