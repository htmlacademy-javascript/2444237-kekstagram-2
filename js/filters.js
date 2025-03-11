import { renderUserPhotos } from './render-photo.js';
import { showBigPicture } from './show-big-photo.js';
import { debounce, sortPhotosByComments, sortRandomPhotos} from './util.js';

const filterForm = document.querySelector('.img-filters__form');
const filterFormButtons = filterForm.querySelectorAll('.img-filters__button');
const pictures = document.querySelector('.pictures');
const filters = document.querySelector('.img-filters');

const RERENDER_DELAY = 500;

const filterRandomPhotos = (photos, count) => sortRandomPhotos(photos, count);

const filterDiscussedPhotos = (photos) => sortPhotosByComments(photos);

const clearPictures = () => {
  pictures.querySelectorAll('.picture').forEach((picture) => picture.remove());
};

const debouncedRender = debounce((filterPhotos) => {
  renderUserPhotos(filterPhotos);
  showBigPicture(filterPhotos);
}, RERENDER_DELAY);

const onFilterButtonClick = (evt, photos) => {
  filterFormButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });

  evt.target.classList.add('img-filters__button--active');

  switch (evt.target.id) {
    case 'filter-random':
      debouncedRender(filterRandomPhotos(photos, 10));
      break;
    case 'filter-discussed':
      debouncedRender(filterDiscussedPhotos(photos));
      break;
    case 'filter-default':
      debouncedRender(photos);
      break;
    default:
      throw new Error(`Unknown filter: ${evt.target.id}`);
  }
  clearPictures();
};

export const initFilters = (photos) => {
  filters.classList.remove('img-filters--inactive');
  filterFormButtons.forEach((button) => {
    button.addEventListener('click', (evt) => onFilterButtonClick(evt, photos));
  });
};
