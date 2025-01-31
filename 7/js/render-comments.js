const commentsList = document.querySelector('.social__comments');
const showCommentCount = document.querySelector('.social__comment-shown-count');
let shownComments = 0;

const renderUserComments = ((comments) => {
  const fragment = document.createDocumentFragment();
  // let commentCount = 0;
  comments.forEach((element) => {
    let commentCount = 0;
    const comment = document.createElement('li');
    comment.classList.add('social__comment');

    const avatarInfo = document.createElement('img');
    avatarInfo.classList.add('social__picture');
    avatarInfo.src = element.avatar;

    avatarInfo.alt = `${element.name}`;
    avatarInfo.width = 35;
    avatarInfo.height = 35;

    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = `${element.message}`;

    comment.appendChild(avatarInfo);
    comment.appendChild(commentText);
    commentCount++;

    fragment.appendChild(comment);
    shownComments += commentCount;

  });

  commentsList.appendChild(fragment);
  showCommentCount.textContent = shownComments;
});

export {renderUserComments};
