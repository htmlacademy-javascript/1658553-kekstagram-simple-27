const slideElement = document.querySelector('.effect-level__slider');
const sliderField = document.querySelector('.img-upload__effect-level');
const effectElementsCount = document.querySelector('.effects__list').children.length;

const effectElementLevelInput = document.querySelector('.effect-level__value');

const bigImg = document.querySelector('.img-upload__preview').children[0];

const EFFECT_LIST = {
  effect_chrome: 'chrome',
  effect_sepia: 'sepia',
  effect_marvin: 'marvin',
  effect_phobos: 'phobos',
  effect_heat: 'heat',

}

noUiSlider.create(slideElement, {
  range: {
    min: 0,
    max: effectElementsCount - 1,
  },
  start: 0,
  step: 1,
  connetct: 'lower',
});

slideElement.noUiSlider.on('update', function (_,handle,unencoded) {
  let checkedElement = document.querySelectorAll('input[name=effect]:checked')[0]

  effectElementLevelInput.value = unencoded[handle];
  if (checkedElement.value===EFFECT_LIST.effect_chrome){
    bigImg.style.filter = `grayscale(${effectElementLevelInput.value})`
  }
  if (checkedElement.value===EFFECT_LIST.effect_sepia){
    bigImg.style.filter = `sepia(${effectElementLevelInput.value})`
  }
  if (checkedElement.value===EFFECT_LIST.effect_marvin){
    bigImg.style.filter = `invert(${effectElementLevelInput.value}%)`
  }
  if (checkedElement.value===EFFECT_LIST.effect_phobos){
    bigImg.style.filter = `blur(${effectElementLevelInput.value}px)`
  }
  if (checkedElement.value===EFFECT_LIST.effect_heat){
    bigImg.style.filter = `brightness(${effectElementLevelInput.value})`
  }


});


const sliderIntensitySetting = function (effect) {

  if (effect.value === EFFECT_LIST.effect_chrome) {
    slideElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1
    });

  }
  if (effect.value === EFFECT_LIST.effect_sepia) {
    slideElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1
    });
  }
  if (effect.value === EFFECT_LIST.effect_marvin) {
    slideElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1
    });
  }
  if (effect.value === EFFECT_LIST.effect_phobos) {
    slideElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1
    });
  }
  if (effect.value === EFFECT_LIST.effect_heat) {
    slideElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1
    });
  }

};


const onUpdateSliderClick = function (effect) {
  defaultSliderParams();
  if (effect.value !== 'none') {
    sliderField.style = 'display:block';
    sliderIntensitySetting(effect);
  }

};

const defaultSliderParams = function () {
  slideElement.noUiSlider.set([0]);
  bigImg.style.filter = 'none';
  sliderField.style = 'display:none';
};


export {onUpdateSliderClick, defaultSliderParams};





