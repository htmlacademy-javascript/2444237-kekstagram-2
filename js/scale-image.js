const scaleFormValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;

function onClickScale (isScale) {
  let currentScaleValue = parseInt(scaleFormValue.value, 10);

  if(isScale) {
    currentScaleValue = Math.min(currentScaleValue + SCALE_STEP, SCALE_MAX);
  } else{
    currentScaleValue = Math.max(currentScaleValue - SCALE_STEP, SCALE_MIN);
  }

  scaleFormValue.value = `${currentScaleValue}`;
  imagePreview.style.transform = `scale(${currentScaleValue / 100})`;
}

export { onClickScale };
