import {validateComment} from './validate-form-comment.js';

import {changeSizeUploadedImg} from './scale-img-form.js';

import {changeEffect} from './change-img-effect-in-form.js';

const imgInput = document.querySelector('.img-upload__input');

const imgEditor = document.querySelector('.img-upload__overlay');

const closeEditorPopupButton = document.querySelector('.img-upload__cancel');

const imgUploadForm = document.querySelector('.img-upload__form');



const validateType = function (file) {
  return file === 'image/jpeg' || file === 'image/png';
};


const onEditorPopupKeyDown = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeImgEditorPopup();


  }
};


const showImgEditorPopup = function ()
{
  imgEditor.classList.remove('hidden');

  imgUploadForm.addEventListener('submit',validateComment);

  changeSizeUploadedImg();

  changeEffect();

  document.addEventListener('keydown',onEditorPopupKeyDown);

};

const closeImgEditorPopup = function ()
{
  imgEditor.classList.add('hidden');
  document.removeEventListener('keydown', onEditorPopupKeyDown);
  imgInput.value = '';
}

closeEditorPopupButton.addEventListener('click', function (evt)
{
    closeImgEditorPopup();

});





imgInput.addEventListener('change', function (evt) {

  if (validateType(evt.target.files[0].type)) {
    showImgEditorPopup();

  }

});
