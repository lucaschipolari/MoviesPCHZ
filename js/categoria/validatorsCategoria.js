export const validateCategoria = ($field) => {
    if (!$field || !$field.value.trim()) {
      $field.classList.add('is-invalid');
      $field.classList.remove('is-valid');
      return false;
    }
  
    if ($field.value.trim().length < 2 || $field.value.trim().length > 25) {
      $field.classList.add('is-invalid');
      $field.classList.remove('is-valid');
      return false;
    }
  
    const regex = /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/;
    if (!regex.test($field.value)) {
      $field.classList.add('is-invalid');
      $field.classList.remove('is-valid');
      return false;
    }
  
    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
  };