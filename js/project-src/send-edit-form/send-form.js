import {validateComment} from './validate-form-comment.js';

import {changeSizeUploadedImgToHigh, changeSizeUploadedImgToLow, defaultSize} from './scale-img-form.js';

import {changeEffect, defaultEffect} from './change-img-effect-in-form.js';
import {defaultSliderParams} from './custom-slider.js';

const imgInput = document.querySelector('.img-upload__input');

const imgEditor = document.querySelector('.img-upload__overlay');

const closeEditorPopupButton = document.querySelector('.img-upload__cancel');

const imgUploadForm = document.querySelector('.img-upload__form');

const biggerButton = document.querySelector('.scale__control--bigger');

const smallerButton = document.querySelector('.scale__control--smaller');

const validateType = function (file) {
  return file === 'image/jpeg' || file === 'image/png';
};

// eslint-disable-next-line no-console
const closeImgEditorPopup = function () {

  defaultEffect();
  defaultSize();
  imgEditor.classList.add('hidden');
  // eslint-disable-next-line no-console
  document.removeEventListener('keydown', onEditorPopupKeyDown);
  imgInput.value = '';
  defaultSliderParams();

};

const onEditorPopupKeyDown = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    closeImgEditorPopup();
  }
};
const showImgEditorPopup = function () {
  imgEditor.classList.remove('hidden');

  imgUploadForm.addEventListener('submit', validateComment);

  changeEffect();

  document.addEventListener('keydown', onEditorPopupKeyDown);

};

imgInput.addEventListener('change', function (evt) {

  if (validateType(evt.target.files[0].type)) {
    showImgEditorPopup();

  }

});


biggerButton.addEventListener('click', changeSizeUploadedImgToHigh);

smallerButton.addEventListener('click', changeSizeUploadedImgToLow);


closeEditorPopupButton.addEventListener('click', function () {
  closeImgEditorPopup();

});


