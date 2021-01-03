const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const zip = document.querySelector("#zip");

nameInput.addEventListener("blur", () => {
  if (validateName()) {
    console.log("OK");
  } else {
    console.log("No");
  }
});
email.addEventListener("blur", () => {
  if (validateEmail()) {
    console.log("OK");
  } else {
    console.log("No");
  }
});
phone.addEventListener("blur", () => {
  if (validatePhone()) {
    console.log("OK");
  } else {
    console.log("No");
  }
});

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
