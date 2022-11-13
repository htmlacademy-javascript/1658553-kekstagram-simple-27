import {createPhotoDescription} from './mock/create-photos-list.js';
import {renderThumbnails} from './project-src/send-edit-form/rendering-thumbnails.js';



import './project-src/send-edit-form/send-form.js';

const QUANTITY_PHOTOS = 25;

const arrOfMockPhotos = createPhotoDescription(QUANTITY_PHOTOS);

renderThumbnails(arrOfMockPhotos);


// eslint-disable-next-line no-console


