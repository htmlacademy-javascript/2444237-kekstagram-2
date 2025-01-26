/* eslint-disable no-console */
import { getArrayPhotos } from './create-array-photo.js';
import {renderUserPhotos} from './render-photo.js';

const photos = getArrayPhotos();

renderUserPhotos(photos);

