import { isEscapeKey } from './util.js';
const errorTemplate = document.querySelector('#error').content;
const errorMessage = errorTemplate.querySelector('.error');
const errorBtn = errorTemplate.querySelector('.error__button');
const template = document.querySelector('#success').content;
const successMessage = template.querySelector('.success');
const successMessageBtn = template.querySelector('.success__button');
const dataErrorMessageTemplate = document.querySelector('#data-error').content;
const dataErrorMessage = dataErrorMessageTemplate.querySelector('.data-error');

const removeMessage = (message) => {
  message.remove();
};

const onSuccessButtonClick = (message) => {
  removeMessage(message);
};

const onErrorButtonClick = (message) => {
  removeMessage(message);
};

const closeMessage = () => {
  if(document.body.contains(errorMessage)) {
    errorMessage.remove();
  }
};

const onClickEsc = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

export const sendErrorMessage = () => {
  document.body.append(dataErrorMessage);

  setTimeout(() => {
    closeMessage();
  }, 5000);
};

export const loadPhotoErrorMessage = () => {
  document.body.append(errorMessage);
  document.addEventListener('keydown', onClickEsc);
  errorBtn.addEventListener('click', () => onErrorButtonClick(errorMessage));

  setTimeout(() => {
    closeMessage();
    document.removeEventListener('keydown', onClickEsc);
  }, 5000);
};

export const sendPhotoMessage = () => {
  document.body.append(successMessage);
  document.addEventListener('keydown', onClickEsc);
  successMessageBtn.addEventListener('click', () => onSuccessButtonClick(successMessage));

  setTimeout(() => {
    closeMessage();
    document.removeEventListener('keydown', onClickEsc);
  }, 5000);
};
