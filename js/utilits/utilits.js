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


/**
 * проверяет длину строки
 * @param string строка
 * @param maxLength максимальная длина
 * @returns {boolean} значение, является ли длина строки меньше заданного значения
 */
const isRightLengthOfString = function (string, maxLength) {

  return string.length <= maxLength;
};

export {getRandomInteger,isRightLengthOfString};
