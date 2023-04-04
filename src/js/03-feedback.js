import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');

const saveValuesToStorage = () => {
  const data = {
    email: formEl.elements[0].value,
    message: formEl.elements[1].value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const updateFields = () => {
  formEl.elements[0].value =
    JSON.parse(localStorage.getItem('feedback-form-state')).email || '';
  formEl.elements[1].value =
    JSON.parse(localStorage.getItem('feedback-form-state')).message || '';
};

const clearFields = ev => {
  ev.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();
  formEl.elements[0].value = '';
  formEl.elements[1].value = '';
};

formEl.addEventListener(
  'input',
  throttle(() => saveValuesToStorage(), 500)
);
formEl.addEventListener('submit', e => clearFields(e));

updateFields();
