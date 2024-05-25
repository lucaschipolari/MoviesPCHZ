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
export function validateName(input) {
    if (cadenaNoVacia(input)) {
        setError(input, 'El nombre no puede estar vacio');
        return false;
    } else {
        setSuccess(input);
        return true;
    }
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export const validateEmail = (input)=>{
    //no estar vacio
    if(cadenaNoVacia(input)){
        setError(input, 'El email no puede estar vacio');
        return false;
    }
    //tiene que tener patron de email
    if (!isValidEmail(input.value.trim())) {
        setError(input, 'Ingrese un email valido');
        return false;
    } 
    //tiene que n
    setSuccess(input);
    return true;
}
export function validateAsunto(input) {
    
    if (cadenaNoVacia(input) ) {
        setError(input, 'El asunto no puede estar vacio');
        return false;
    }
    if(input.value.trim().lenght < 5){
        setError(input, 'El asunto no puede contener menos de 5 caracteres');
        return false;
    }
        setSuccess(input);
        return true;
    
}

export function validateMensaje(input) {
    
    if (cadenaNoVacia(input)) {
        setError(input, 'El mensaje no puede estar vacio');
        return false;
    } 
    if(input.value.trim().lenght < 20){
        setError(input, 'El mensaje no puede tener menos de 20 caracteres');
        return false;
    }
    setSuccess(input);
    return true;
    
}
