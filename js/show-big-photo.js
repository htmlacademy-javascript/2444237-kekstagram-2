const COMMENT_STEP_AMOUNT = 5;

import { renderUserComments } from './render-comments.js';
import { isEscapeKey } from './util.js';

const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const closeButton = document.querySelector('.big-picture__cancel');
const likesCount = document.querySelector('.likes-count');
const photoDescription = document.querySelector('.social__caption');
const totalCommentCount = document.querySelector('.social__comment-total-count');
const showCommentCount = document.querySelector('.social__comment-shown-count');
const commentLoader = document.querySelector('.comments-loader');
const commentsList = document.querySelector('.social__comments');

let shownComments = COMMENT_STEP_AMOUNT;
let abortController;

const shownCommentsCount = () => (showCommentCount.textContent = commentsList.querySelectorAll('li').length);

const renderBigPicture = (photoData) => {
  bigPicture.classList.remove('hidden');
  bigPictureImg.src = photoData.url;
  bigPictureImg.alt = photoData.alt;
  likesCount.textContent = photoData.likes;
  totalCommentCount.textContent = photoData.comments.length;
  photoDescription.textContent = photoData.description;

  commentsList.innerHTML = '';
  renderUserComments(photoData.comments.slice(0, shownComments));
  shownCommentsCount();
};

const openBigPicture = (photoData) => {
  document.body.classList.add('modal-open');
  abortController = new AbortController();
  bigPicture.classList.remove('hidden');
  commentsList.innerHTML = '';
  renderBigPicture(photoData);

  if (photoData.comments.length > 5) {
    commentLoader.classList.remove('hidden');
    commentLoader.addEventListener('click', () => onLoaderCommentClick(photoData.comments), {signal: abortController.signal});
  } else {
    commentLoader.classList.add('hidden');
  }

  document.addEventListener('keydown', onDocumentKeydown);
};

const closeBigPicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  abortController.abort();
  shownComments = COMMENT_STEP_AMOUNT;
};

const onPictureContainerClick = (evt, photos) => {
  const photoId = evt.target.dataset.id;
  const photoData = photos.find((photo) => photo.id === Number(photoId));

  if (photoData) {
    openBigPicture(photoData);
  }
};

function onLoaderCommentClick(comments) {
  const commentsToRender = comments.slice(shownComments, shownComments + COMMENT_STEP_AMOUNT);
  renderUserComments(commentsToRender);
  shownComments += COMMENT_STEP_AMOUNT;
  shownCommentsCount();

  if (shownComments >= comments.length) {
    commentLoader.classList.add('hidden');
  }
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

const onCloseButtonClick = () => closeBigPicture();

const showBigPicture = (photos) => {
  pictures.addEventListener('click', (evt) => onPictureContainerClick(evt, photos));
  closeButton.addEventListener('click', () => onCloseButtonClick());
};

export { showBigPicture };
