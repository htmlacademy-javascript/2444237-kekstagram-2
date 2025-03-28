const photoTemplateItem = document.querySelector('#picture').content;
const photo = photoTemplateItem.querySelector('a');
const pictures = document.querySelector('.pictures');
const renderUserPhotos = (photos) => {
  const pictureList = document.createDocumentFragment();
  photos.forEach((element) => {
    const userPhoto = photo.cloneNode(true);
    userPhoto.querySelector('.picture__img').src = `photos/${element.id + 1}.jpg`;
    userPhoto.querySelector('.picture__img').alt = element.description;
    userPhoto.querySelector('.picture__img').setAttribute('data-id', element.id);
    userPhoto.querySelector('.picture__likes').textContent = element.likes;
    userPhoto.querySelector('.picture__comments').textContent = element.comments.length;

    pictureList.append(userPhoto);
  });

  pictures.append(pictureList);
};

export {renderUserPhotos};
