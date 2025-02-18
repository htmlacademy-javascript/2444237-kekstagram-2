const sliderOptionsDefault = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 10,
  connect: 'lower',
};

const sliderOptionsСhrome = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
};

const sliderOptionsSepia = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
};

const sliderOptionsMarvin = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 0.1,
  connect: 'lower',
};

const sliderOptionsPhobos = {
  range: {
    min: 0,
    max: 3,
  },
  start: 3,
  step: 0.1,
  connect: 'lower',
};

const sliderOptionsHeat = {
  range: {
    min: 1,
    max: 3,
  },
  start: 3,
  step: 0.1,
  connect: 'lower',
};

const getStyleFilter = (effect, value) => {
  switch (effect) {
    case 'chrome':
      return `grayscale(${value})`;
    case 'sepia':
      return `sepia(${value})`;
    case 'marvin':
      return `invert(${value}%)`;
    case 'phobos':
      return `blur(${value}px)`;
    case 'heat':
      return `brightness(${value})`;
    default:
      return '';
  }
};

const effects = {
  none: sliderOptionsDefault,
  chrome: sliderOptionsСhrome,
  sepia: sliderOptionsSepia,
  marvin: sliderOptionsMarvin,
  phobos: sliderOptionsPhobos,
  heat: sliderOptionsHeat,
};

export { effects, getStyleFilter };
