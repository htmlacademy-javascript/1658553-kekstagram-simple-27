/* global Pristine:readonly */
const imgUploadForm = document.querySelector('.img-upload__form');


const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'setup-wizard-form__error-text',
});


const validateComment = function (evt) {

  const isValid = pristine.validate();

  if (!isValid) {
    evt.preventDefault();
  }
};

export {validateComment};



