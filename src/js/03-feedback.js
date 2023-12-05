import throttle from 'lodash.throttle';
// Доступи до елементів форми
const refForm = document.querySelector('.feedback-form');
const refInput = document.querySelector('input');
const remMessage = document.querySelector('textarea');

// Зберігаємо данні в поля

var throttle = require('lodash.throttle');
throttledFormInput = throttle(formInput, [(wait = 500)]);
refForm.addEventListener('input', throttledFormInput);
const clientMessage = {};

function formInput(evt) {
  clientMessage.email = evt.currentTarget.elements.email.value;
  clientMessage.message = evt.currentTarget.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(clientMessage));
}

// Перевіряємо чи є данні і заповнюємо поля

if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
  const formValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  refInput.value = formValue.email;
  remMessage.value = formValue.message;
}
// Під час сабміту форми очищуй сховище і поля форми,
// а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

refForm.addEventListener('submit', formSubmit);

function formSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  refForm.reset();
}
