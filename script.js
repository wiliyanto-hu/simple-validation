const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const zip = document.querySelector("#zip");
const submitBtn = document.querySelector("#submit");

let isNameValid = false;
let isEmailValid = false;
let isPhoneValid = false;
let isZipValid = false;

function validate(inputForm, fName) {
  if (fName()) {
    inputForm.classList.remove("is-invalid");
    return true;
  } else {
    inputForm.classList.add("is-invalid");
    return false;
  }
}

nameInput.addEventListener(
  "keyup",
  () => (isNameValid = validate(nameInput, validateName))
);
email.addEventListener(
  "keyup",
  () => (isEmailValid = validate(email, validateEmail))
);
phone.addEventListener(
  "keyup",
  () => (isPhoneValid = validate(phone, validatePhone))
);
zip.addEventListener("keyup", () => (isZipValid = validate(zip, validateZip)));
submitBtn.addEventListener("click", (e) => submit(e));
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

function submit(e) {
  e.preventDefault();
  let isFormValid = [isNameValid, isEmailValid, isPhoneValid, isZipValid].every(
    (arr) => arr === true
  );
  clearAlerts();
  const alertDiv = document.createElement("div");
  if (isFormValid) {
    alertDiv.className = "alert alert-success mt-3";
    alertDiv.textContent = "Form Submitted";
  } else {
    alertDiv.className = "alert alert-danger mt-3";
    alertDiv.textContent = "Submit failed, please check your form ";
  }
  submitBtn.insertAdjacentElement("afterend", alertDiv);

  setTimeout(() => {
    alertDiv.classList.add("done");
  }, 2000);
  setTimeout(() => {
    alertDiv.remove();
  }, 3000);
}
function clearAlerts() {
  const alert = document.querySelector(".alert");
  if (alert) {
    alert.remove();
  }
}
