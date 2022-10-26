let sizeImgValueNumber = parseInt(document.querySelector('.scale__control--value').value);

let sizeImgValue = document.querySelector('.scale__control--value');

let image = document.querySelector('.img-upload__preview');

const biggerButton = document.querySelector('.scale__control--bigger');

const smallerButton = document.querySelector('.scale__control--smaller');

const changeSizeUploadedImg = function ()
{

  biggerButton.addEventListener('click',function (evt){
    if (sizeImgValueNumber<100){

      sizeImgValueNumber = sizeImgValueNumber + 25;
      sizeImgValue.setAttribute('value',sizeImgValueNumber + '%');
      image.style.scale = sizeImgValue.value;
    } else {
      evt.preventDefault();
    }
  });

  smallerButton.addEventListener('click',function (evt){
    if (sizeImgValueNumber>25){
      sizeImgValueNumber = sizeImgValueNumber - 25;
      sizeImgValue.setAttribute('value',sizeImgValueNumber + '%');
      image.style.scale = sizeImgValue.value;
    } else {
      evt.preventDefault();
    }
  })

}
export {changeSizeUploadedImg};
