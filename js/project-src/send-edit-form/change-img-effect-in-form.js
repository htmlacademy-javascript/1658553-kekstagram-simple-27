const effectsList = document.querySelectorAll('.effects__radio');




let bigImg = document.querySelector('.img-upload__preview').children[0]


// const findOldChecked = function (){
//   for (const element of effectsList) {
//     if (element.checked === true){
//       return element;
//     }
//   }
// }


const changeEffect = function (qualifiedName)
{
  for (const effect of effectsList) {
      effect.addEventListener('click',function (evt){
      // let oldChecked = findOldChecked();



      effect.setAttribute('checked','');

      bigImg.classList.value = '';
      bigImg.classList.add('effects__preview--' + effect.value)
    })
  }
}

export {changeEffect};
