export const validateTitle = (field) => {
    if(!field || !field.value.trim()){
        field.classList.add("is-invalid");
        field.classList.remove("is-valid");
        return false;
    }

    if(field.value.trim().length < 2 || field.value.trim().length > 30){
        field.classList.add("is-invalid");
        field.classList.remove("is-valid");
        return false;
    }

    const regex = /^[\w\s\.,:;!?'&()#-]+$/
    if(!regex.test(field.value)){
        field.classList.add("is-invalid");
        field.classList.remove("is-valid");
        return false;
    }

    field.classList.remove("is-invalid");
    field.classList.add("is-valid");
    return true;
}

export const validateUrl = (field) => {
    if(!field || !field.value.trim()){
        field.classList.add("is-invalid");
        field.classList.remove("is-valid");
        return false;
    }

    if(field.value.trim().length < 2){
        field.classList.add("is-invalid");
        field.classList.remove("is-valid");
        return false;
    }

    const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?(\/[^\s]*)?$/
    if(!regex.test(field.value)){
        field.classList.add("is-invalid");
        field.classList.remove("is-valid");
        return false;
    }

    field.classList.remove("is-invalid");
    field.classList.add("is-valid");
    return true;
}