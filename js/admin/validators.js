export const validateTitle = (field) => {
  if (!field || !field.value.trim()) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  if (field.value.trim().length < 2 || field.value.trim().length > 100) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  const regex = /^[\p{L}\p{N}\p{P}\p{Zs}]+$/u;
  if (!regex.test(field.value)) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  field.classList.remove("is-invalid");
  field.classList.add("is-valid");
  return true;
};

export const validateUrl = (field) => {
  if (!field || !field.value.trim()) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  if (field.value.trim().length < 2) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  const regex =
    /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg|jpe)(\?.*)?$|https?:\/\/(?:www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|vimeo\.com\/|dailymotion\.com\/video\/|facebook\.com\/.*\/videos\/|twitter\.com\/.*\/status\/|twitch\.tv\/videos\/)[\w\-]+$/;
  if (!regex.test(field.value)) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  field.classList.remove("is-invalid");
  field.classList.add("is-valid");
  return true;
};

export const validateDescription = (field) => {
  if (!field || !field.value.trim()) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  if (field.value.trim().length < 10 || field.value.trim().length > 1000) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  const regex = /^[\p{L}\p{N}\p{P}\p{Zs}\p{Sm}\p{Sc}\p{Sk}\p{So}\n\r]+$/u;
  if (!regex.test(field.value)) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  field.classList.remove("is-invalid");
  field.classList.add("is-valid");
  return true;
};
