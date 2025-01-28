import { getRandomInteger,getRandomArrayElement } from './util.js';

import { COMMENT_MESSAGES, AUTHOR_NAMES} from './data.js';

const generateUserComment = () => {
  let id = 1;

  return () => {
    const userComment = {
      id,
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomArrayElement(COMMENT_MESSAGES),
      name: getRandomArrayElement(AUTHOR_NAMES),
    };

    id++;

    return userComment;
  };
};

const createUserPhoto = () => {
  let id = 1;

  return () => {
    const userPhoto = {
      id,
      url: `photos/{${id}}.jpg`,
      description: `Очень красивая фотография под номером ${id}. Мне очень понравилось.`,
      likes: getRandomInteger(15, 200),
      comments: Array.from({length: getRandomInteger(1, 30)}, generateUserComment()),
    };

    id++;

    return userPhoto;
  };
};

const getArrayPhotos = () => Array.from({length: 25}, createUserPhoto());

export { getArrayPhotos };

