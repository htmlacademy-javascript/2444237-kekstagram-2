/* eslint-disable no-console */
import { getArrayPhotos } from './create-array-photo.js';
import {generateUserPhoto} from './generate-photo.js';

console.log(getArrayPhotos());

generateUserPhoto(getArrayPhotos());

