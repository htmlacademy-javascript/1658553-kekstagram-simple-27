/**
 * получение случайного числа в диапазоне
 * @param numberOne первое число
 * @param numberTwo второе число
 * @returns {*|number} случайное число
 */
const getRandomInteger = (numberOne, numberTwo) => {

  /**
   * корректное вычисление большего из меньшего
   * @returns {number} остаток
   */
  const getRightCount = function () {
    if (numberOne > numberTwo) {
      return numberOne - numberTwo;
    } else if (numberTwo > numberOne) {
      return numberTwo - numberOne;
    }
    return 0;
  };

  /**
   * определение меньшего числа из двух заданных
   * @returns {*} меньшее число
   */
  const getMinNumber = function () {
    return numberOne < numberTwo ? numberOne : numberTwo;
  };


  return Number.isInteger(numberOne) && Number.isInteger(numberTwo) ? Math.floor(Math.random() * (getRightCount() + 1)) + getMinNumber() : NaN;


};
getRandomInteger(1, 2);

/**
 * проверяет длину строки
 * @param string строка
 * @param maxLength максимальная длина
 * @returns {boolean} значение, является ли длина строки меньше заданного значения
 */
const isRightLengthOfString = function (string, maxLength) {

  return string.length <= maxLength;
};

isRightLengthOfString('я тут был',10);


/**
 * Создание массива объектов.
 * @param quantity кол-во созданных объектов
 * @returns {*[]} возвращает массив объектов
 */
const createPhotoDescription = function (quantity )
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

const arrayOfPhotos = createPhotoDescription(25);

console.table(arrayOfPhotos)
