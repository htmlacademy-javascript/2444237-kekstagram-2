import { effects, getStyleFilter } from './slider-options.js';
const inputEffectLevel = document.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');
const effectRadioBtn = document.querySelectorAll('.effects__radio');
const imagePreview = document.querySelector('.img-upload__preview');
const sliderContainer = document.querySelector('.img-upload__effect-level');


const resetEffectSlider = () => {
  imagePreview.style.removeProperty('filter');
  const oldEffectClass = [...imagePreview.classList].find((effect) => effect.startsWith('effects__preview--'));

  imagePreview.classList.remove(oldEffectClass);
  imagePreview.classList.add('effects__preview--none');
  slider.setAttribute('disabled', true);
};

const updateSliderOption = (sliderUI, effect) => {
  sliderUI.noUiSlider.updateOptions(effects[effect]);
};

const onEffectRadioBtnClick = (evt) => {
  const currentRadioBtn = evt.target.closest('.effects__radio');
  if(currentRadioBtn.value === 'none') {
    resetEffectSlider();
    sliderContainer.classList.add('hidden');
  } else {
    sliderContainer.classList.remove('hidden');
    slider.removeAttribute('disabled');
    const oldEffectClass = [...imagePreview.classList].find((effect) => effect.startsWith('effects__preview--'));
    imagePreview.classList.remove(oldEffectClass);
    imagePreview.classList.add(`effects__preview--${currentRadioBtn.value}`);
    updateSliderOption(slider, currentRadioBtn.value);
  }
};

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});


slider.noUiSlider.on('update', () => {
  inputEffectLevel.value = slider.noUiSlider.get();

  const checkedEffect = document.querySelector('.effects__radio:checked');
  if(checkedEffect) {
    imagePreview.style.filter = getStyleFilter(checkedEffect.value, inputEffectLevel.value);
  }
});

effectRadioBtn.forEach((element) => {
  element.addEventListener('click', onEffectRadioBtnClick);
});
