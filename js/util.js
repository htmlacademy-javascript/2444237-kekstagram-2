export const isEscapeKey = (evt) => evt.key === 'Escape';

export const sortPhotosByComments = (photos) => {
  const sortedPhotos = [...photos].sort((a, b) => b.comments.length - a.comments.length);
  return sortedPhotos;
};

export function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export const sortRandomPhotos = (photos, count) => {
  const randomPhotos = [...photos].sort(() => Math.random() - 0.5);
  const sortedPhotos = randomPhotos.slice(0,count);
  return sortedPhotos;
};
