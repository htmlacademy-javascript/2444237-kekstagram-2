
const commentMassage = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const authorName = ['Павел','Владимир','Валерия','Марина','Максим','Кирилл'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


const generateUserComment = () => {
  let id = 1;
  return () => {
    const userComment = {
      id: id,
      avatar: `img/avatar-{${getRandomInteger(1,6)}}.svg`,
      message: getRandomArrayElement(commentMassage),
      name: getRandomArrayElement(authorName),
    };
    id++;
    return userComment;
  };
};


const createUserPhoto = () => {
  let id = 1;
  return () => {
    const userPhoto = {
      id: id,
      url: `photos/{${id}}.jpg`,
      description: `Очень красивая фотография под номером ${id}. Мне очень понравилось.`,
      numLikes: getRandomInteger(15, 200),
      comments: Array.from({length: getRandomInteger(1,30)}, generateUserComment()),
    };
    id++;
    return userPhoto;
  };
};


// eslint-disable-next-line no-unused-vars
const photo = Array.from({length: 25}, createUserPhoto());

