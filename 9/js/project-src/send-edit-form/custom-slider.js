const slideElement = document.querySelector('.effect-level__slider');
const sliderField = document.querySelector('.img-upload__effect-level');
const effectElementsCount = document.querySelector('.effects__list').children.length;

const effectElementLevelInput = document.querySelector('.effect-level__value');

const bigImg = document.querySelector('.img-upload__preview').children[0];

const EFFECT_LIST = {
  chrome: {
    effect: 'grayscale',
    format: '',
    min: 0,
    max: 1,
    step: 0.1
  },
  sepia: {
    effect: 'sepia',
    format: '',
    min: 0,
    max: 1,
    step: 0.1
  },
  marvin: {
    effect: 'invert',
    format: '%',
    min: 0,
    max: 100,
    step: 1
  },
  phobos: {
    effect: 'blur',
    format: 'px',
    min: 0,
    max: 3,
    step: 0.1
  },
  heat: {
    effect: 'brightness',
    format: '',
    min: 1,
    max: 3,
    step: 0.1
  },
  none: {
    effect: '',
    format: '',
  }

};
const createSlider = function (){
  noUiSlider.create(slideElement, {
    range: {
      min: 0,
      max: effectElementsCount - 1,
    },
    start: 0,
    step: 1,
    connetct: 'lower',
  });
};


const effectFilterValue = function (checkedElement) {
  return `${EFFECT_LIST[checkedElement.value].effect }(${effectElementLevelInput.value}${EFFECT_LIST[checkedElement.value].format})`;
};

const changeSliderLine = function (){
  slideElement.noUiSlider.on('update', (_, handle, unencoded) => {
    const checkedElement = document.querySelectorAll('input[name=effect]:checked')[0];

    effectElementLevelInput.value = unencoded[handle];


    bigImg.style.filter = effectFilterValue(checkedElement, effectElementLevelInput);

  });
};


const sliderIntensitySetting = function (currentEffect) {


  for (const effect in EFFECT_LIST) {

    if (currentEffect.value === effect) {

      const sliderConfig = {
        start: EFFECT_LIST[effect].max,
        range: {
          min: EFFECT_LIST[effect].min,
          max: EFFECT_LIST[effect].max,
        },
        step: EFFECT_LIST[effect].step
      };
      slideElement.noUiSlider.updateOptions(sliderConfig);
    }
  }


};

const defaultSliderParams = function () {
  slideElement.noUiSlider.set([0]);
  bigImg.style.filter = 'none';
  sliderField.style = 'display:none';
};

const updateSliderClick = function (effect) {
  defaultSliderParams();
  if (effect.value !== 'none') {
    sliderField.style = 'display:block';
    sliderIntensitySetting(effect);
  }

};


export {updateSliderClick, defaultSliderParams,changeSliderLine,createSlider};


