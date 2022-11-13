const sizeImgValue = document.querySelector('.scale__control--value');

const image = document.querySelector('.img-upload__preview');

const ONE_STEP_SIZE = 25;

const DEFAULT_SIZE = 100;

const changeSizeUploadedImgToHigh = function (evt)
{
  let sizeImgValueNumber = parseInt(document.querySelector('.scale__control--value').value,10);
  if (sizeImgValueNumber < DEFAULT_SIZE){
    sizeImgValueNumber = sizeImgValueNumber + ONE_STEP_SIZE;
    sizeImgValue.setAttribute('value',`${sizeImgValueNumber }%`);
    image.style.scale = sizeImgValue.value;

  } else {
    evt.preventDefault();
  }
};

const changeSizeUploadedImgToLow = function (evt)
{
  let sizeImgValueNumber = parseInt(document.querySelector('.scale__control--value').value,10);
  if (sizeImgValueNumber > ONE_STEP_SIZE){
    sizeImgValueNumber = sizeImgValueNumber - ONE_STEP_SIZE;
    sizeImgValue.setAttribute('value',`${sizeImgValueNumber }%`);
    image.style.scale = sizeImgValue.value;
  } else {
    evt.preventDefault();
  }
};

const defaultSize = function ()
{
  sizeImgValue.setAttribute('value',`${DEFAULT_SIZE }%`);
  image.style.scale = sizeImgValue.value;

};

export {changeSizeUploadedImgToHigh,changeSizeUploadedImgToLow,defaultSize};
