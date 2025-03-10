const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const sortPhotosByComments = (photos) => {
  const sortedPhotos = [...photos].sort((a, b) => b.comments.length - a.comments.length);
  return sortedPhotos;
};

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const sortRandomPhotos = (photos, count) => {
  const randomPhotos = [...photos].sort(() => Math.random() - 0.5);
  const sortedPhotos = randomPhotos.slice(0,count);
  return sortedPhotos;
};

export { getRandomInteger, getRandomArrayElement, isEscapeKey, sortPhotosByComments, sortRandomPhotos ,debounce };
