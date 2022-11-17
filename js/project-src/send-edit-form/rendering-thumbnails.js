
const section = document.querySelector('.pictures');

const template = document.querySelector('#picture').content;


const renderThumbnails = function (arrOfMockPhotos)
{

  const fragmentToPhotos = document.createDocumentFragment();

  arrOfMockPhotos.forEach((photo) => {
    const clonedTemplate = template.cloneNode(true);
    clonedTemplate.querySelector('.picture__img').src = photo.url;
    clonedTemplate.querySelector('.picture__comments').textContent = photo.comments;
    clonedTemplate.querySelector('.picture__likes').textContent = photo.likes;
    fragmentToPhotos.appendChild(clonedTemplate);

  });
  section.appendChild(fragmentToPhotos);

};


export {renderThumbnails};
