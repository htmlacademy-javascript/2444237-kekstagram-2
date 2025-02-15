const inputeffectLevel = document.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');

// eslint-disable-next-line no-console
console.log(slider);


noUiSlider.create(slider, {
  start: 0,
  connect: [true, false],
  range: {
    min: [0],
    max: [100]
  },
  step: 1,
});

slider.noUiSlider.on('update', () => {
  inputeffectLevel.value = slider.noUiSlider.get();
});
