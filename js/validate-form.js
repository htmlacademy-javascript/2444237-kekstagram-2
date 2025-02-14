import { isEscapeKey } from './show-big-photo.js';
const formChange = document.querySelector('.img-upload__overlay');
const pictireForm = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const imgUpload = document.querySelector('.img-upload__input');
const formChangeBtnCancel = document.querySelector('.img-upload__cancel');
const inputHashtags = document.querySelector('.text__hashtags');
const inputDescription = document.querySelector('.text__description');

const DESCRIPTION_LENGTH = 140;
const HASHTAGS_LENGTH = 20;
const COUNT_HASHTAGS = 5;


const pristine = new Pristine(pictireForm,{
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
}
);

const getErrorMessageHashtag = () => `Хэштеги должны начинаться с #, длина не превышает ${HASHTAGS_LENGTH} символов, и они должны быть уникальными, и их количество не превышает ${COUNT_HASHTAGS} штук`;

const validateInputHashtags = (value) => {
  if(value.trim() === '') {
    return true;
  }

  const hashtags = value.split(' ');
  const regex = /^#[a-zа-яё0-9]{1,19}$/i;
  const unigHashtags = new Set(hashtags);

  if(hashtags.length > 5) {
    return false;
  }

  if(unigHashtags.size !== hashtags.length) {
    return false;
  }

  return hashtags.every((hashtag) => regex.test(hashtag));

};

const validateInputDescription = (value) => value.length <= 140;

const getErrorMessageDescription = () => `Длина комментария не может привышать ${DESCRIPTION_LENGTH} символов`;

const openForm = () => {
  formChange.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  formChangeBtnCancel.addEventListener('click', onCloseButtonClick);
};

const closeForm = () => {
  formChange.classList.add('hidden');
  body.classList.remove('.modal-open');
  imgUpload .value = '';

  document.removeEventListener('keydown', onDocumentKeydown);
  formChangeBtnCancel.removeEventListener('click', onCloseButtonClick);
};


function onCloseButtonClick () {
  closeForm();
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && inputHashtags !== document.activeElement && inputDescription !== document.activeElement) {
    evt.preventDefault();
    closeForm();
  }
}

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if(isValid) {
    // eslint-disable-next-line no-console
    console.log(isValid);
  }
};

const onFormChange = () => {
  openForm();
};

export const initPhotoForm = () => {
  pristine.addValidator(inputHashtags, validateInputHashtags , getErrorMessageHashtag);
  pristine.addValidator(inputDescription , validateInputDescription , getErrorMessageDescription);
  pictireForm.addEventListener('submit', onFormSubmit);
  imgUpload.addEventListener('change', onFormChange);
};


