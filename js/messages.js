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

const onButtonClick = () => {
  removeMessageNode();
  document.removeEventListener('keydown', onClickKeydown);
};

function onClickKeydown (evt) {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    removeMessageNode();
    document.removeEventListener('keydown', onClickKeydown);
  }
}

export const loadDataErrorMessage = () => {
  const node = dataErrorMessageTemplate.cloneNode(true);
  document.body.append(node);

  setTimeout(() => {
    removeMessageNode();
  }, 5000);
};

export const loadPhotoErrorMessage = () => {
  const node = errorMessageTemplate.cloneNode(true);
  const errorMessageBtn = node.querySelector('.error__button');

  document.body.append(node);
  document.addEventListener('keydown', onClickKeydown);
  errorMessageBtn.addEventListener('click', onButtonClick);
};

export const successPhotoMessage = () => {
  const node = successTemplate.cloneNode(true);
  const successMessageBtn = node.querySelector('.success__button');


  document.body.append(node);
  document.addEventListener('keydown', onClickKeydown);
  successMessageBtn.addEventListener('click', onButtonClick);
};
