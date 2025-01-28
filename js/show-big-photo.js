import {renderUserComment} from './render-comment.js';

const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const closeButton = document.querySelector('.big-picture__cancel');
const likesCount = document.querySelector('.likes-count');
const photoDescription = document.querySelector('.social__caption');
const totalCommentCount = document.querySelector('.social__comment-total-count');
const showCommentCount = document.querySelector('.social__comment-shown-count');
const commentLoader = document.querySelector('.comments-loader');
const commentCount = document.querySelector('.social__comment-count');
const commentsList = document.querySelector('.social__comments');

const isEscapeKey = (evt) => evt.key === 'Escape';

const showBigPicture = (photos) => {
  pictures.addEventListener('click', (evt) => {
    document.body.classList.add('modal-open');
    commentLoader.classList.add('hidden');
    commentCount.classList.add('hidden');
    const photoId = evt.target.getAttribute('data-id');

    const photoData = photos.find((photo) => photo.id === Number(photoId));
    if(photoData) {
      bigPicture.classList.remove('hidden');
      bigPictureImg.src = evt.target.src;
      bigPictureImg.alt = evt.target.alt;
      likesCount.textContent = photoData.likes;
      showCommentCount.textContent = commentsList.querySelectorAll('li').length;
      totalCommentCount.textContent = photoData.comments.length;
      photoDescription.textContent = photoData.description;
      renderUserComment(photoData.comments);
    }
  });

  closeButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
    }
  });

  document.removeEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
    }
  });

};

export {showBigPicture};
