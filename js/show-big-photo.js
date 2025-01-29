import {renderUserComments} from './render-comments.js';

const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const closeButton = document.querySelector('.big-picture__cancel');
const likesCount = document.querySelector('.likes-count');
const photoDescription = document.querySelector('.social__caption');
const totalCommentCount = document.querySelector('.social__comment-total-count');
// const showCommentCount = document.querySelector('.social__comment-shown-count');
const commentLoader = document.querySelector('.comments-loader');
const commentCount = document.querySelector('.social__comment-count');
const commentsList = document.querySelector('.social__comments');

const isEscapeKey = (evt) => evt.key === 'Escape';

const renderBigPicture = (photoData) => {
  bigPicture.classList.remove('hidden');
  bigPictureImg.src = photoData.url;
  bigPictureImg.alt = photoData.alt;
  likesCount.textContent = photoData.likes;
  totalCommentCount.textContent = photoData.comments.length;
  photoDescription.textContent = photoData.description;

  commentsList.innerHTML = '';
  renderUserComments(photoData.comments);
};

const openBigPicture = (photoData) => {
  document.body.classList.add('modal-open');
  commentLoader.classList.add('hidden');
  commentCount.classList.add('hidden');
  bigPicture.classList.remove('hidden');

  renderBigPicture(photoData);
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeBigPicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onPictureContainerClick = (evt, photos) => {
  const photoId = evt.target.dataset.id;

  const photoData = photos.find((photo) => photo.id === Number(photoId));

  if(photoData) {
    openBigPicture(photoData);
  }
};

function onDocumentKeydown(evt) {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

const onCloseButtonClick = () => closeBigPicture();

const showBigPicture = (photos) => {
  pictures.addEventListener('click', (evt) => onPictureContainerClick(evt, photos));
  closeButton.addEventListener('click', () => onCloseButtonClick());
};

export {showBigPicture};
