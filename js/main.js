const getRandomInteger = (numberOne, numberTwo) => {


  const getRightCount = function () {
    if (numberOne > numberTwo) {
      return numberOne - numberTwo;
    } else if (numberTwo > numberOne) {
      return numberTwo - numberOne;
    }
    return 0;
  };

  const getMinNumber = function () {
    return numberOne < numberTwo ? numberOne : numberTwo;

  };


  return Number.isInteger(numberOne) && Number.isInteger(numberTwo) ? Math.floor(Math.random() * (getRightCount() + 1)) + getMinNumber() : NaN;


};
getRandomInteger(1, 2);


const isRightLengthOfString = function (string, maxLength) {

  return string.length <= maxLength;
};

isRightLengthOfString('я тут был',10)
