import { renderUserPhotos } from './render-photo.js';
import { showBigPicture } from './show-big-photo.js';
import { debounce, sortPhotosByComments, sortRandomPhotos} from './util.js';

const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');
const filterDefault = document.querySelector('#filter-default');
const filterForm = document.querySelector('.img-filters__form');
const filterFormButtons = filterForm.querySelectorAll('.img-filters__button');
const pictures = document.querySelector('.pictures');

const RERENDER_DELAY = 500;

const filterRandomPhotos = (photos, count) => sortRandomPhotos(photos, count);

const filterDiscussedPhotos = (photos) => sortPhotosByComments(photos);

const clearFilter = () => {
  pictures.querySelectorAll('.picture').forEach((picture) => picture.remove());
};

const debouncedRender = debounce((filteredPhotos) => {
  renderUserPhotos(filteredPhotos);
  showBigPicture(filteredPhotos);
}, RERENDER_DELAY);

const filter = (filterPhotos) => {
  debouncedRender(filterPhotos);
};

const setActiveFilter = (activeButton) => {
  filterFormButtons.forEach((button) => {
    if(button === activeButton) {
      button.classList.add('img-filters__button--active');
    }else {
      button.classList.remove('img-filters__button--active');
    }
  });
};

const onRandomButtonClick = (photos) => {
  setActiveFilter(filterRandom);

  clearFilter();
  filter(filterRandomPhotos(photos, 10));
};

const onDiscussedButtonClick = (photos) => {
  setActiveFilter(filterDiscussed);

  clearFilter();
  filter(filterDiscussedPhotos(photos));
};

const onDefaultButtonClick = (photos) => {
  setActiveFilter(filterDefault);

  clearFilter();
  filter(photos);
};


export const initFilters = (photos) => {
  filterRandom.addEventListener('click', () => onRandomButtonClick(photos));
  filterDiscussed.addEventListener('click',() => onDiscussedButtonClick(photos));
  filterDefault.addEventListener('click', () => onDefaultButtonClick(photos));
};
