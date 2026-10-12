function getRectangleArea(width, height) {
  return width * height;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getAverage(value1, value2) {
  return value1 / 2 + value2 / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

function getLinearEquationRoot(a, b) {
  return -b / a;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const crossProduct = x1 * y2 - y1 * x2;
  return Math.atan2(Math.abs(crossProduct), dotProduct);
}

function getLastDigit(value) {
  return value % 10;
}

function parseNumberFromString(value) {
  return Number(value);
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a * a + b * b + c * c);
}

function roundToPowerOfTen(num, pow) {
  const scale = 10 ** pow;
  return Math.round(num / scale) * scale;
}

function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let divisor = 3; divisor <= Math.sqrt(n); divisor += 2) {
    if (n % divisor === 0) {
      return false;
    }
  }
  return true;
}

function toNumber(value, def) {
  if (value === null || value === undefined) {
    return def;
  }
  const converted = Number(value);
  return Number.isNaN(converted) ? def : converted;
}

function getCube(num) {
  return num ** 3;
}

function getFibonacciNumber(index) {
  if (index <= 0) {
    return 0;
  }
  let previous = 0;
  let current = 1;
  for (let i = 1; i < index; i += 1) {
    const next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}

function getSumToN(n) {
  return (n * (n + 1)) / 2;
}

function getSumOfDigits(num) {
  let value = Math.abs(Math.trunc(num));
  let result = 0;
  while (value > 0) {
    result += value % 10;
    value = Math.floor(value / 10);
  }
  return result;
}

function isPowerOfTwo(num) {
  if (!Number.isSafeInteger(num) || num < 1) {
    return false;
  }
  let value = num;
  while (value > 1) {
    if (value % 2 !== 0) {
      return false;
    }
    value /= 2;
  }
  return true;
}

function getSine(num) {
  return Math.sin(num);
}

function numberToStringInBase(number, base) {
  return number.toString(base);
}

function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}

function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

function getNumberValue(number) {
  return number.valueOf();
}

function isNumber(number) {
  return Number.isFinite(number);
}

function isInteger(number) {
  return Number.isInteger(number);
}

function getFloatOnString(str) {
  return Number.parseFloat(str);
}

function getIntegerOnString(str, base) {
  return Number.parseInt(str, base);
}

function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}

function roundToSmallestInteger(number) {
  return Math.floor(number);
}

function roundToLargestInteger(number) {
  return Math.ceil(number);
}

function roundToNearestInteger(number) {
  return Math.round(number);
}

function getIntegerPartNumber(number) {
  return Math.trunc(number);
}

function getSumOfNumbers(x1, x2, x3) {
  return Number((x1 + x2 + x3).toPrecision(15));
}

function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}

function getCountOfOddNumbers(number) {
  return Math.ceil(Math.abs(number) / 2);
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
