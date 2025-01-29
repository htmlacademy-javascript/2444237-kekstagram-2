const commentsList = document.querySelector('.social__comments');

const renderUserComments = ((comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach((element) => {
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

    fragment.appendChild(comment);
  });

  commentsList.appendChild(fragment);
});

export {renderUserComments};
