import {getRandomInteger} from './utilits/utilits';


/**
 * Создание массива объектов.
 * @param quantity кол-во созданных объектов
 * @returns {*[]} возвращает массив объектов
 */
const createPhotoDescription = function (quantity = 10 )
{
  const photosList = [];

  for (let i = 1; i < quantity; i++)
  {
    photosList[i - 1] = {
      id: i,
      url: `photos/${i}.jpg`,
      description: (Math.random() + 1).toString(36).substring(7),
      likes: getRandomInteger(15, 200),
      comments: getRandomInteger(0, 200)
    };

  }
  return photosList;
};

export {createPhotoDescription};
