import { isEscapeKey } from './util.js';

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const dataErrorMessageTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const removeMessageNode = () => {
  const node = document.querySelector('.success, .error, .data-error');
  if(node) {
    node.remove();
  }
};
const closePopup = () => {
  removeMessageNode();
  document.removeEventListener('keydown', onClickKeydown);
  document.body.classList.remove('has-error');
};

const onButtonClick = () => closePopup();

function onClickKeydown (evt) {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
}

export const loadDataErrorMessage = () => {
  const node = dataErrorMessageTemplate.cloneNode(true);
  document.body.append(node);

  setTimeout(() => {
    removeMessageNode();
  }, 5000);
};

export const showErrorMessage = () => {
  const node = errorMessageTemplate.cloneNode(true);
  const errorMessageBtn = node.querySelector('.error__button');

  document.body.classList.add('has-error');
  document.body.append(node);
  document.addEventListener('keydown', onClickKeydown);
  errorMessageBtn.addEventListener('click', onButtonClick);
};

const onOverlayClick = (evt) => {
  if(!evt.target.closest('.success__inner')) {
    closePopup();
  }
};

export const showSuccessMessage = () => {
  const node = successTemplate.cloneNode(true);
  const successMessageBtn = node.querySelector('.success__button');

  document.body.append(node);
  node.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onClickKeydown);
  successMessageBtn.addEventListener('click', onButtonClick);
};
