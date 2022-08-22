// var throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

const formData = {
  email: '',
  message: '',
};

formStorage();

function clearFormData() {
  formData.email = '';
  formData.message = '';
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  // const formData = {
  //   email: formRef.elements.email.value,
  //   message: formRef.elements.message.value,
  // };

  //console.log(formRef.elements.email.value);
  // console.log(formRef.elements.message.value);
  // console.log(event.target.value);

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  const {
    email: { value: emailValue },
    message: { value: messageValue },
  } = event.target.elements;

  if (messageValue === '' || emailValue === '') {
    return alert('Заповніть всі поля');
  }
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  clearFormData();
}

function formStorage() {
  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (!savedFormData) {
    return;
  }
  formData.email = savedFormData.email;
  formData.message = savedFormData.message;

  formRef.elements.email.value = savedFormData.email;
  formRef.elements.message.value = savedFormData.message;
}
