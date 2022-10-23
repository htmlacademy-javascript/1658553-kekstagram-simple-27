import {createPhotoDescription} from '../mock/createPhotosList.js';

const QUANTITY_PHOTOS = 25;

const arrOfMockPhotos = createPhotoDescription(QUANTITY_PHOTOS);

const section = document.querySelector('.pictures');

const template = document.querySelector('#picture').content;




const renderThumbnails = function (template, arrOfMockPhotos) {

  const fragmentToPhotos = document.createDocumentFragment();

  arrOfMockPhotos.forEach(function (photo) {
    let clonedTemplate = template.cloneNode(true);
    clonedTemplate.querySelector('.picture__img').src = photo.url;
    clonedTemplate.querySelector('.picture__comments').textContent = photo.comments;
    clonedTemplate.querySelector('.picture__likes').textContent = photo.likes;
    fragmentToPhotos.appendChild(clonedTemplate);

  });
  section.appendChild(fragmentToPhotos);

};


// // eslint-disable-next-line no-console
renderThumbnails(template,arrOfMockPhotos)



let qwe = 123;
export {qwe};
