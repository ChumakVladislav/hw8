const refForm = document.querySelector('.feedback-form');
const refInput = document.querySelector('input');
const remMessage = document.querySelector('textarea');

import throttle from 'lodash.throttle';
const LOCAL_DATE = 'feedback-form-state';
// refForm.addEventListener('submit', onFormSumbit);
refForm.addEventListener('input', throttle(onFormInput, 500));

const clientMessage = {};

function onFormInput(e) {
  clientMessage[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_DATE, JSON.stringify(clientMessage));
}

const clientDate = JSON.parse(localStorage.getItem(LOCAL_DATE));

if (localStorage.getItem(LOCAL_DATE)) {
  refInput.value = clientDate.email;
  remMessage.value = clientDate.message;
}

refForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCAL_DATE)));
  refForm.reset();
  localStorage.removeItem(LOCAL_DATE);
}
