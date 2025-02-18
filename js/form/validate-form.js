const pictireForm = document.querySelector('.img-upload__form');
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

const validateInputDescription = (value) => value.length <= DESCRIPTION_LENGTH;

const getErrorMessageDescription = () => `Длина комментария не может привышать ${DESCRIPTION_LENGTH} символов`;

const validateForm = () => {
  pristine.validate();
};

const resetValidation = () => {
  pristine.reset();
};

const setupValidation = () => {
  pristine.addValidator(inputHashtags, validateInputHashtags , getErrorMessageHashtag);
  pristine.addValidator(inputDescription , validateInputDescription , getErrorMessageDescription);
};

export {validateForm, resetValidation, setupValidation};
