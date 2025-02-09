import { isEscapeKey } from './show-big-photo';
const formChange = document.querySelector('.img-upload__overlay');
const formElement = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const userChooseImg = document.querySelector('.img-upload__input');
const formChangeBtnCancel = document.querySelector('.img-upload__cancel');
const inputHashtags = document.querySelector('.text__hashtags');
const inputDescription = document.querySelector('.text__description');

const pristine = new Pristine(formElement,{
  classTo: 'img-upload__form',
  errorClass: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__form',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
}
);

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  pristine.validate();

});

const getErrorMessageHashtag = () => 'Хэштеги должны начинаться с #, быть уникальными и не превышать 5 штук';

const validatInputHashtags = (value) => {
  if(value.trim() === '') {
    return true;
  }

  const hashtags = value.split(' ');
  const regex = /^#[a-zа-яё0-9]{1,19}$/i;

  if(hashtags.length > 5) {
    return false;
  }

  return hashtags.every((hashtag) => regex.test(hashtag));

};

pristine.addValidator(inputHashtags, validatInputHashtags, getErrorMessageHashtag);

const getErrorMessageDescription = () => 'Длина комментария не может привышать 140 символов';

pristine.addValidator(inputDescription, (value) => value.length <= 140, getErrorMessageDescription);


const openFormChange = () => {
  formChange.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

};

const closeFormChange = () => {
  formChange.classList.add('hidden');
  body.classList.remove('.modal-open');
  userChooseImg.value = '';

  document.removeEventListener('keydown', onDocumentKeydown);
  formChangeBtnCancel.removeEventListener('click', onCloseButtonClick);
  inputHashtags.removeEventListener('keydown', stopPropagationEsp);
  inputDescription.removeEventListener('keydown', stopPropagationEsp);

};

function stopPropagationEsp (evt) {
  if(isEscapeKey(evt)){
    evt.stopPropagation();
  }

}

function onCloseButtonClick () {
  return closeFormChange();

}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormChange();
  }

}

openFormChange();

formChangeBtnCancel.addEventListener('click', onCloseButtonClick);

inputHashtags.addEventListener('keydown', stopPropagationEsp);

inputDescription.addEventListener('keydown', stopPropagationEsp);
