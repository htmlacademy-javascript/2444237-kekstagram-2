import { isEscapeKey } from '../util.js';
import { activeScale, deactivateScale } from './scale-image.js';
import { setupValidation, validateForm, resetValidation } from './validate-form.js';
import { initSlider, resetEffectSlider } from './slider.js';
import { sendData } from '../api.js';
import { showErrorMessage, showSuccessMessage } from '../messages.js';

const imgUpload = document.querySelector('.img-upload__input');
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
  activeScale();
};

const closeForm = () => {
  formOverlay.classList.add('hidden');
  document.body.classList.remove('.modal-open');
  imgUpload.value = '';

  document.removeEventListener('keydown', onDocumentKeydown);
  formChangeBtnCancel.removeEventListener('click', onCloseButtonClick);
  resetValidation();
  deactivateScale();
  resetEffectSlider();
  imagePreview.style.transform = '';
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

const onFormChange = () => {
  openForm();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = validateForm();
  if (isValid) {
    const formData = new FormData(evt.target);
    submitButton.disabled = true;
    sendData(formData).then(() => {
      closeForm();
      showSuccessMessage();
      pictireForm.reset();
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
