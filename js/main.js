import {renderUserPhotos} from './render-photo.js';
import { showBigPicture } from './show-big-photo.js';
import { initPhotoForm,} from './form/form.js';
import { getData } from './api.js';
import { loadDataErrorMessage } from './messages.js';
import {initFilters} from './filters.js';


getData().then((photos) => {
  renderUserPhotos(photos);
  showBigPicture(photos);
  initPhotoForm();
  initFilters(photos);
}).catch(() => {
  loadDataErrorMessage();
});
