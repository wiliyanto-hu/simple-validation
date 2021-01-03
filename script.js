const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const zip = document.querySelector("#zip");

function validate(inputForm, fName) {
  if (fName()) {
    inputForm.classList.remove("is-invalid");
  } else {
    inputForm.classList.add("is-invalid");
  }
}

nameInput.addEventListener("blur", () => validate(nameInput, validateName));
email.addEventListener("blur", () => validate(email, validateEmail));
phone.addEventListener("blur", () => validate(phone, validatePhone));
zip.addEventListener("blur", () => validate(zip, validateZip));

function validateName() {
  const regex = /^[a-zA-Z ]{2,}$/;
  return regex.test(nameInput.value);
}
function validateEmail() {
  const regex = /^[\w\-]{2,}(@[a-zA-Z]{2,})\.[a-zA-Z]{2,}(.[a-zA-Z]{2,})?$/;
  return regex.test(email.value);
}
function validatePhone() {
  const regex = /^\d{10,15}$/;
  return regex.test(phone.value);
}
function validateZip() {
  const regex = /^\d{5}$/;
  return regex.test(zip.value);
}
