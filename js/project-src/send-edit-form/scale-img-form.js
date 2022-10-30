let sizeImgValue = document.querySelector('.scale__control--value');

const image = document.querySelector('.img-upload__preview');





const changeSizeUploadedImgToHigh = function (evt)
{
  let sizeImgValueNumber = parseInt(document.querySelector('.scale__control--value').value);
  if (sizeImgValueNumber<100){
    sizeImgValueNumber = sizeImgValueNumber + 25;
    sizeImgValue.setAttribute('value',sizeImgValueNumber + '%');
    image.style.scale = sizeImgValue.value;

  } else {
    evt.preventDefault();
  }
}

const changeSizeUploadedImgToLow = function (evt)
{
  let sizeImgValueNumber = parseInt(document.querySelector('.scale__control--value').value);
  if (sizeImgValueNumber>25){
    sizeImgValueNumber = sizeImgValueNumber - 25;
    sizeImgValue.setAttribute('value',sizeImgValueNumber + '%');
    image.style.scale = sizeImgValue.value;
  } else {
    evt.preventDefault();
  }
}

const defaultSize = function ()
{
  sizeImgValue.setAttribute('value',100 + '%');
  image.style.scale = sizeImgValue.value;

}

export {changeSizeUploadedImgToHigh,changeSizeUploadedImgToLow,defaultSize};
