import {updateSliderClick} from './custom-slider.js';
const effectsList = document.querySelectorAll('.effects__radio');

const bigImg = document.querySelector('.img-upload__preview').children[0];

const defaultEffectInput = document.querySelector('#effect-none');


const changeEffect = function ()
{

  for (const effect of effectsList) {

    effect.addEventListener('click',() => {

      effect.checked = true;

      bigImg.classList.value = '';
      bigImg.classList.add(`effects__preview--${ effect.value}`);
      updateSliderClick(effect);

    });
  }
};

const defaultEffect = function ()
{
  for (const effect of effectsList) {
    effect.checked = false;
  }
  defaultEffectInput.checked = true;
  bigImg.classList.value = '';
  bigImg.classList.add('effects__preview--none');
};

export {changeEffect,defaultEffect};
