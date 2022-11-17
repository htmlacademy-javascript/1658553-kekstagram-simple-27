import {getRandomInteger} from './utilits.js';

/**
 * Константы для объекта фото
 */
const LIKES_COUNT = {
  min: 15,
  max: 200
};
const COMMENT_COUNT = {
  min: 0,
  max: 200

};


/**
 * Создание массива объектов.
 * @param quantity кол-во созданных объектов
 * @returns {*[]} возвращает массив объектов
 */
const createPhotoDescription = function (quantity)
{
  const photosList = [];

  for (let i = 1 ; i <= quantity; i++) {
    photosList[i - 1] = {
      id: i,
      url: `photos/${i}.jpg`,
      description: (Math.random() + 1).toString(36).substring(7),
      likes: getRandomInteger(LIKES_COUNT.min, LIKES_COUNT.max),
      comments: getRandomInteger(COMMENT_COUNT.min, COMMENT_COUNT.max)
    };

  }
  return photosList;
};

export {createPhotoDescription};
