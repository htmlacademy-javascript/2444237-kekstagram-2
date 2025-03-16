const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;

const scaleFormValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBugger = document.querySelector('.scale__control--bigger');

let abortController;

const onClickScale = (isScaleApp) => {
  let currentScaleValue = parseInt(scaleFormValue.value, 10);

  if(isScaleApp) {
    currentScaleValue = Math.min(currentScaleValue + SCALE_STEP, SCALE_MAX);
  } else{
    currentScaleValue = Math.max(currentScaleValue - SCALE_STEP, SCALE_MIN);
  }

  scaleFormValue.value = `${currentScaleValue}%`;
  imagePreview.style.transform = `scale(${currentScaleValue / 100})`;
};

const setActiveScale = () => {
  abortController = new AbortController();
  scaleSmaller.addEventListener('click', () => onClickScale(false), {signal: abortController.signal});
  scaleBugger.addEventListener('click', () => onClickScale(true), {signal: abortController.signal});
};

const removeActiveScale = () => {
  abortController.abort();
};

export { setActiveScale, removeActiveScale };
