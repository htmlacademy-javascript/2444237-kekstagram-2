import { isEscapeKey } from '../util.js';
import { setActiveScale, removeActiveScale } from './scale-image.js';
import { setupValidation, validateForm, resetValidation } from './validate-form.js';
import { initSlider, resetEffectSlider, hideSlider } from './slider.js';
import { sendData } from '../api.js';
import { showErrorMessage, showSuccessMessage } from '../messages.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imgUpload = document.querySelector('.img-upload__input');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const imgEffectsPreview = document.querySelectorAll('.effects__preview');
const formChangeBtnCancel = document.querySelector('.img-upload__cancel');
const formOverlay = document.querySelector('.img-upload__overlay');
const pictireForm = document.querySelector('.img-upload__form');
const inputHashtags = document.querySelector('.text__hashtags');
const inputDescription = document.querySelector('.text__description');
const imagePreview = document.querySelector('.img-upload__preview img');
const submitButton = document.querySelector('.img-upload__submit');


const openForm = () => {
  formOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  formChangeBtnCancel.addEventListener('click', onCloseButtonClick);
  setActiveScale();
};

const closeForm = () => {
  formOverlay.classList.add('hidden');
  document.body.classList.remove('.modal-open');
  imgUpload.value = '';

  document.removeEventListener('keydown', onDocumentKeydown);
  formChangeBtnCancel.removeEventListener('click', onCloseButtonClick);
  resetValidation();
  hideSlider();
  removeActiveScale();
  resetEffectSlider();
  imagePreview.style.transform = '';
};

function onCloseButtonClick () {
  closeForm();
}

function onDocumentKeydown(evt) {
  const isFormControl = inputHashtags !== document.activeElement && inputDescription !== document.activeElement;
  const hasError = document.body.classList.contains('has-error');
  if (isEscapeKey(evt) && isFormControl && !hasError) {
    evt.preventDefault();
    closeForm();
  }
}

const onFormChange = (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();
  const fileExt = fileName.split('.').pop();
  const matches = FILE_TYPES.includes(fileExt);
  if(matches) {
    openForm();
    const url = URL.createObjectURL(file);
    imgUploadPreview.src = url;
    imgEffectsPreview.forEach((effect) => {
      effect.style.backgroundImage = `url(${url})`;
    });
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = validateForm();
  if (isValid) {
    const formData = new FormData(evt.target);
    submitButton.disabled = true;
    sendData(formData).then(() => {
      showSuccessMessage();
      pictireForm.reset();
      closeForm();
    }).catch(() => {
      showErrorMessage();
    }).finally(() => {
      submitButton.disabled = false;
    });
  }
};

export const initPhotoForm = () => {
  setupValidation();
  initSlider();
  pictireForm.addEventListener('submit', onFormSubmit);
  imgUpload.addEventListener('change', onFormChange);
};
