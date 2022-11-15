import {createPhotoDescription} from './mock/create-photos-list.js';
import {renderThumbnails} from './project-src/send-edit-form/rendering-thumbnails.js';
import {openEditorPopup,changeSizeInEditorPopup,closeEditorPopup} from './project-src/send-edit-form/send-form.js';
import {createSlider,changeSliderLine} from './project-src/send-edit-form/custom-slider.js';

const QUANTITY_PHOTOS = 25;

const arrOfMockPhotos = createPhotoDescription(QUANTITY_PHOTOS);

renderThumbnails(arrOfMockPhotos);

openEditorPopup();
changeSizeInEditorPopup();
closeEditorPopup();
createSlider();
changeSliderLine();





