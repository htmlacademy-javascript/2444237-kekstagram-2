const SLIDER_OPTIONS_CHROME = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
};

const SLIDER_OPTIONS_SEPIA = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
};

const SLIDER_OPTIONS_MARVIN = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
};

const SLIDER_OPTIONS_PHOBOS = {
  range: {
    min: 0,
    max: 3,
  },
  start: 3,
  step: 0.1,
};

const SLIDER_OPTIONS_HEAT = {
  range: {
    min: 1,
    max: 3,
  },
  start: 3,
  step: 0.1,
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
  chrome:SLIDER_OPTIONS_CHROME,
  sepia: SLIDER_OPTIONS_SEPIA,
  marvin: SLIDER_OPTIONS_MARVIN,
  phobos: SLIDER_OPTIONS_PHOBOS,
  heat: SLIDER_OPTIONS_HEAT,
};

export { effects, getStyleFilter };
