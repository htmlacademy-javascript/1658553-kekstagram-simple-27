import {onCommentSubmit} from './validate-form-comment.js';

import {defaultSize, onChangeSizeUploadedImgToHigh, onChangeSizeUploadedImgToLow} from './scale-img-form.js';

import {changeEffect, defaultEffect} from './change-img-effect-in-form.js';
import {defaultSliderParams} from './custom-slider.js';
//test git
const imgInput = document.querySelector('.img-upload__input');

const imgEditor = document.querySelector('.img-upload__overlay');

const closeEditorPopupButton = document.querySelector('.img-upload__cancel');

const imgUploadForm = document.querySelector('.img-upload__form');

const biggerButton = document.querySelector('.scale__control--bigger');

const smallerButton = document.querySelector('.scale__control--smaller');

const validateType = function (fileType) {
  return fileType === 'image/jpeg' || fileType === 'image/png';
};


const onCloseImgEditorPopup = function () {

  defaultEffect();
  defaultSize();
  imgEditor.classList.add('hidden');

  document.removeEventListener('keydown', onEditorPopupKeyDown);
  imgInput.value = '';
  defaultSliderParams();

};

function onEditorPopupKeyDown(evt) {
  if (evt.key === 'Escape' || evt.key === 'esc') {
    evt.preventDefault();
    onCloseImgEditorPopup();
  }
}


const showImgEditorPopup = function () {
  imgEditor.classList.remove('hidden');
  imgUploadForm.addEventListener('submit', onCommentSubmit);
  changeEffect();
  document.addEventListener('keydown', onEditorPopupKeyDown);
};

const openEditorPopup = function () {
  imgInput.addEventListener('change', (evt) => {

    if (validateType(evt.target.files[0].type)) {
      showImgEditorPopup();
    }
  });
};

const changeSizeInEditorPopup = function () {
  biggerButton.addEventListener('click', onChangeSizeUploadedImgToHigh);

  smallerButton.addEventListener('click', onChangeSizeUploadedImgToLow);
};

const closeEditorPopup = function () {
  closeEditorPopupButton.addEventListener('click', onCloseImgEditorPopup);
};

export {openEditorPopup, changeSizeInEditorPopup, closeEditorPopup};


