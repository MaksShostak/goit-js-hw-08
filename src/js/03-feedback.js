// var throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputEmailRef = document.querySelector('input[type="email"]');
const textareaRef = document.querySelector('textarea[name="message"]');

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

// const formData = {
// };

formStorage();

function onFormInput(event) {
  const formData = {
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  };

  // // console.log(formRef.elements.email.value);
  // console.log(formRef.elements.message.value);
  // // console.log(inputEmailRef.value);
  // console.log(textareaRef.value);
  // console.log(event.target.value);

  // const formData = {
  //   ...parseSavedFormData,
  //   [event.target.name]: event.target.value,
  // };

  // formData[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (inputEmailRef.value === '' || textareaRef.value === '') {
    return console.log('Заповніть всі поля');
  }
  console.log({
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  });
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function formStorage() {
  const savedFormData = localStorage.getItem('feedback-form-state');
  const parseSavedFormData = JSON.parse(savedFormData);

  if (!savedFormData) {
    return;
  }
  formRef.elements.email.value = parseSavedFormData.email;
  formRef.elements.message.value = parseSavedFormData.message;
}
