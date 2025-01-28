import { getArrayPhotos } from './create-array-photo.js';
import {renderUserPhotos} from './render-photo.js';
import {showBigPicture} from './show-big-photo.js';

const photos = getArrayPhotos();

renderUserPhotos(photos);

showBigPicture(photos);

