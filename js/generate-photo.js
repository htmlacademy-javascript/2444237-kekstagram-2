const photoTemplateItem = document.querySelector('#picture').content;
const photo = photoTemplateItem.querySelector('a');
const pictures = document.querySelector('.pictures');

const generateUserPhoto = (photoArray) => {
  const pictureList = document.createDocumentFragment();

  photoArray.forEach((element) => {
    const userPhoto = photo.cloneNode(true);
    userPhoto.querySelector('.picture__img').src = `photos/${element.id}.jpg`;
    userPhoto.querySelector('.picture__img').alt = element.description;
    userPhoto.querySelector('.picture__likes').textContent = element.likes;
    userPhoto.querySelector('.picture__comments').textContent = element.comment;

    pictureList.append(userPhoto);
  });

  pictures.append(pictureList);
};

export {generateUserPhoto};
