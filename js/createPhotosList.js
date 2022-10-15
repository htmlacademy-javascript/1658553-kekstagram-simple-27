import {getRandomInteger} from './utilits/utilits.js';

/**
 * Константы для объекта фото
 */
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENT = 0;
const MAX_COMMENT = 200;

/**
 * Создание массива объектов.
 * @param quantity кол-во созданных объектов
 * @returns {*[]} возвращает массив объектов
 */
const createPhotoDescription = function (quantity)
{
  const photosList = [];

  for (let i = 1; i < quantity; i++)
  {
    photosList[i - 1] = {
      id: i,
      url: `photos/${i}.jpg`,
      description: (Math.random() + 1).toString(36).substring(7),
      likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
      comments: getRandomInteger(MIN_COMMENT, MAX_COMMENT)
    };

  }
  return photosList;
};

export {createPhotoDescription};
