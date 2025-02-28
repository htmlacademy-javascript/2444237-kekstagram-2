import {renderUserPhotos} from './render-photo.js';
import { showBigPicture } from './show-big-photo.js';
import { initPhotoForm,} from './form/form.js';
import { getData } from './api.js';

const photos = await getData();

renderUserPhotos(photos);

showBigPicture(photos);

initPhotoForm();


