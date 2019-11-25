window.addEventListener("load", () => {
  new ProgressBar(document.querySelector("#progress"), 0);
});
const form = document.querySelector("#autosave");
const data = {};
const error = {};

const name = document.querySelector("#name");

const email = document.querySelector("#email");

const phone = document.querySelector("#phone");

const website = document.querySelector("#website");

const note = document.querySelector("#notes");

function submitForm(e) {
  e.preventDefault();
}
function validateName() {
  if (checkIfEmpty(name)) return;
  if (!checkIfOnlyLetters(name)) return;

  return false;
}

function validateEmail() {
  if (checkIfEmpty(email)) return;
  if (!checkIfEmail(email)) return;
  new ProgressBar(document.querySelector("#progress"), 40);
  return false;
}

function validatePhone() {
  if (checkIfEmpty(phone)) return;
  if (!checkIfOnlyNumbers(phone)) return;
  new ProgressBar(document.querySelector("#progress"), 60);
  return false;
}

function validateWebsite() {
  if (checkIfEmpty(website)) return;
  if (!checkIfWebsite(website)) return;
  new ProgressBar(document.querySelector("#progress"), 80);
  return false;
}

function validateNote() {
  if (checkIfEmpty(note)) return;
  new ProgressBar(document.querySelector("#progress"), 100);
  return false;
}
function checkIfWebsite(field) {
  let pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
  if (pattern.test(field.value)) return;
  setInvalid(field, `${field.name} must contain a valid email address`);
}
function checkIfOnlyNumbers(field) {
  let pattern = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/gm;
  if (pattern.test(field.value)) return;
  setInvalid(field, `${field.name} must contain only numbers`);
}
function isEmpty(value) {
  if (value === "") return true;
  return false;
}
function checkIfEmail(field) {
  let pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (pattern.test(field.value)) return;
  setInvalid(field, `${field.name} must be a valid email address`);
}
function checkIfEmpty(field) {
  if (isEmpty(field.value.trim())) {
    setInvalid(field, `${field.name} must not be empty`);
    return true;
  } else {
    setValid(field);
    return false;
  }
}
function checkIfOnlyLetters(field) {
  let pattern = /^[a-zA-Z]+$/;
  if (pattern.test(field.value)) return;
  setInvalid(field, `${field.name} must contain only letters`);
}
function setInvalid(field, message) {
  field.nextElementSibling.className = "error";
  field.nextElementSibling.style.display = "block";
  field.nextElementSibling.innerHTML = message;
}

function setValid(field) {
  field.nextElementSibling.style.display = "none";
  field.nextElementSibling, (innerHTML = "");
}

// Event listeners
form.addEventListener("submit", submitForm);

name.addEventListener("focusout", validateName);

email.addEventListener("focusout", validateEmail);
phone.addEventListener("focusout", validatePhone);
website.addEventListener("focusout", validateWebsite);
note.addEventListener("focusout", validateNote);

class ProgressBar {
  constructor(element, initialValue = 0) {
    this.valueElem = element.querySelector(".progress-bar-value");
    this.fillElem = element.querySelector(".progress-bar-fill");

    this.setValue(initialValue);
  }

  setValue(newValue) {
    if (newValue < 0) {
      newValue = 0;
    }
    if (newValue > 100) {
      newValue = 100;
    }

    this.value = newValue;
    this.update();
  }

  update() {
    const percentage = this.value + "%";
    this.fillElem.style.width = percentage;
    this.valueElem.textContent = percentage;
  }
}

let initialProgress = new ProgressBar(document.querySelector("#progress"), 0);
let nameProgress = new ProgressBar(document.querySelector("#progress"), 20);
let mailProgress = new ProgressBar(document.querySelector("#progress"), 40);
let phoneProgress = new ProgressBar(document.querySelector("#progress"), 60);
let websiteProgress = new ProgressBar(document.querySelector("#progress"), 80);
let noteProgress = new ProgressBar(document.querySelector("#progress"), 100);
