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

export const validateUrlImages = (field) => {
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
    /\bhttps?:\/\/\S+?\.(?:jpg|jpeg|png|gif|bmp|tiff|svg|webp)(?:\?\S+)?\b/;
  if (!regex.test(field.value)) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  field.classList.remove("is-invalid");
  field.classList.add("is-valid");
  return true;
};
export const validateUrlVideos = (field) => {
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
    /\bhttps?:\/\/(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|embed)\/|[^\/\n\s]+[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})\b/;
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
