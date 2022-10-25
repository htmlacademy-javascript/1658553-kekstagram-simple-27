import {createPhotoDescription} from './mock/create-photos-list.js';
import {renderThumbnails} from './project-src/rendering-thumbnails.js';

const QUANTITY_PHOTOS = 25;

const arrOfMockPhotos = createPhotoDescription(QUANTITY_PHOTOS);

renderThumbnails(arrOfMockPhotos);

// eslint-disable-next-line no-console









