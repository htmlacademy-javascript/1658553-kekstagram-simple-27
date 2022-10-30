const effectsList = document.querySelectorAll('.effects__radio');

let bigImg = document.querySelector('.img-upload__preview').children[0]

const defaultEffectInput = document.querySelector('#effect-none')





const changeEffect = function ()
{
  for (const effect of effectsList) {
    effect.addEventListener('click',function (evt){


      effect.setAttribute('checked','');

      bigImg.classList.value = '';
      bigImg.classList.add('effects__preview--' + effect.value)
    })
  }
}

const defaultEffect = function ()
{
  for (const effect of effectsList) {
    effect.removeAttribute('checked')
  }
  defaultEffectInput.setAttribute('checked','')
  bigImg.classList.value = '';
  bigImg.classList.add('effects__preview--none')
}

export {changeEffect,defaultEffect};
