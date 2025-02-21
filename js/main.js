import { getArrayPhotos } from './create-array-photo.js';
import {renderUserPhotos} from './render-photo.js';
import { showBigPicture } from './show-big-photo.js';
import { initPhotoForm } from './form/form.js';
const photos = getArrayPhotos();


renderUserPhotos(photos);

showBigPicture(photos);

initPhotoForm();

