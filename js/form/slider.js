import { effects, getStyleFilter } from './slider-options.js';
const inputEffectLevel = document.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');
const effectRadioBtn = document.querySelectorAll('.effects__radio');
const imagePreview = document.querySelector('.img-upload__preview');
const sliderContainer = document.querySelector('.img-upload__effect-level');


export const resetEffectSlider = () => {
  imagePreview.style.removeProperty('filter');
  imagePreview.className = 'img-upload__preview effects__preview--none';
};

export const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const updateSliderOption = (sliderUI, effect) => {
  if(effect === 'none') {
    hideSlider();
  }
  sliderUI.noUiSlider.updateOptions(effects[effect]);
};

const onEffectRadioBtnClick = (evt) => {
  const currentEffect = evt.target.value;
  if(currentEffect === 'none') {
    hideSlider();
  } else {
    sliderContainer.classList.remove('hidden');
    imagePreview.className = `img-upload__preview effects__preview--${currentEffect}`;
    updateSliderOption(slider, currentEffect);
  }
};

export const createSlider = () => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        if(Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    }
  });
};

export const initSlider = () => {
  createSlider();
  hideSlider();

  effectRadioBtn.forEach((element) => {
    element.addEventListener('click', onEffectRadioBtnClick);
  });

  slider.noUiSlider.on('update', () => {
    inputEffectLevel.value = slider.noUiSlider.get();
    const checkedEffect = document.querySelector('.effects__radio:checked');
    if(checkedEffect) {
      imagePreview.style.filter = getStyleFilter(checkedEffect.value, inputEffectLevel.value);
    }
  });
};
