/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }

  if (b > a && b > c) {
    return b;
  }

  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let isTriangleExist = false;
  if (a + b > c) isTriangleExist = true;

  if (isTriangleExist) {
    return a === b || a === c || b === c;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let str = '';
  const obj = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
  };
  const int = Math.trunc(num / 10);
  const remainder = num % 10;

  for (let i = 0; i < int; i += 1) {
    str += obj[10];
  }

  if (remainder !== 0) {
    str += obj[remainder];
  }

  return str;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let convertNumber = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i !== 0) convertNumber += ' ';

    switch (numberStr[i]) {
      case '0':
        convertNumber += 'zero';
        break;

      case '1':
        convertNumber += 'one';
        break;

      case '2':
        convertNumber += 'two';
        break;

      case '3':
        convertNumber += 'three';
        break;

      case '4':
        convertNumber += 'four';
        break;

      case '5':
        convertNumber += 'five';
        break;

      case '6':
        convertNumber += 'six';
        break;

      case '7':
        convertNumber += 'seven';
        break;

      case '8':
        convertNumber += 'eight';
        break;

      case '9':
        convertNumber += 'nine';
        break;

      case '.':
      case ',':
        convertNumber += 'point';
        break;

      case '-':
        convertNumber += 'minus';
        break;

      default:
        convertNumber += '';
    }
  }

  return convertNumber;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  if (str.length < 2) {
    return false;
  }

  for (let i = 0; i < Math.floor(str.length); i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let n = num;
  do {
    if (n % 10 === digit) {
      return true;
    }
    n = Math.trunc(n / 10);
  } while (n >= 1);

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) return -1;
  let balanceIndex = 1;
  let leftSum;
  let rightSum;

  while (balanceIndex < arr.length - 1) {
    leftSum = 0;
    rightSum = 0;
    for (let i = 0; i < balanceIndex; i += 1) {
      leftSum += arr[i];
    }
    for (let i = balanceIndex + 1; i < arr.length; i += 1) {
      rightSum += arr[i];
    }

    if (leftSum === rightSum) return balanceIndex;
    balanceIndex += 1;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const trueValue = true;
  const arr = new Array(size);
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
  }

  let n = 0;
  let N = 0;
  while (trueValue) {
    if (N === size ** 2 - 1) {
      N += 1;
      arr[n][n] = N;
      return arr;
    }
    for (let j = n; j < size - 1 - n; j += 1) {
      N += 1;
      arr[n][j] = N;
      if (N === size ** 2) {
        return arr;
      }
    }

    for (let i = n; i < size - 1 - n; i += 1) {
      N += 1;
      arr[i][size - 1 - n] = N;
      if (N === size ** 2) {
        return arr;
      }
    }

    for (let j = size - 1 - n; j > n; j -= 1) {
      N += 1;
      arr[size - 1 - n][j] = N;
      if (N === size ** 2) {
        return arr;
      }
    }

    for (let i = size - 1 - n; i > n; i -= 1) {
      N += 1;
      arr[i][n] = N;
      if (N === size ** 2) {
        return arr;
      }
    }

    n += 1;
  }
  return trueValue;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(/* matrix */) {
  throw new Error('Not implemented');
  //   const arr = new Array(matrix.length);
  //   for (let i = 0; i < matrix.length; i += 1) {
  //     arr[i] = new Array(matrix.length[0]);
  //   }

  //   if (matrix.length === 0) {
  //     return matrix;
  //   }

  //   for (let j = 0; j < matrix.length; j += 1) {
  //     for (let i = matrix[0].length - 1; i >= 0; i -= 1) {
  //       arr[j][matrix[0].length - 1 - i] = matrix[i][j];
  //     }
  //   }
  // matrix = [...arr];
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length < 2) return arr;

  const copyArr = arr;
  const left = [];
  let leftI = 0;
  const right = [];
  let rightI = 0;
  const middle = [];
  let middleI = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < 0) {
      left[leftI] = arr[i];
      leftI += 1;
    } else if (arr[i] > 0) {
      right[rightI] = arr[i];
      rightI += 1;
    } else {
      middle[middleI] = arr[i];
      middleI += 1;
    }
  }

  function intSortByAsc(intArr) {
    const trueValue = true;
    if (arr.length < 2) return intArr;

    let intLeftSorted = [];
    let intRightSorted = [];
    let tempArr = [...intArr];

    while (trueValue) {
      if (intLeftSorted.length + intRightSorted.length === intArr.length) {
        return [...intLeftSorted, ...intRightSorted];
      }

      const intLeft = [];
      let intLeftI = 0;
      const intRight = [];
      let intRightI = 0;
      const intMiddle = [];
      let intMiddleI = 0;
      const pivot = tempArr[0];

      for (let i = 1; i < tempArr.length; i += 1) {
        if (tempArr[i] < pivot) {
          intLeft[intLeftI] = tempArr[i];
          intLeftI += 1;
        } else if (tempArr[i] > pivot) {
          intRight[intRightI] = tempArr[i];
          intRightI += 1;
        } else {
          intMiddle[intMiddleI] = tempArr[i];
          intMiddleI += 1;
        }
      }
      if (intLeft.length === 0) {
        intLeftSorted = [...intLeftSorted, pivot, ...intMiddle];g
        tempArr = [...intRight];
      } else if (intRight.length === 0) {
        intRightSorted = [pivot, ...intMiddle, ...intRightSorted];
        tempArr = [...intLeft];
      } else {
        tempArr = [...intLeft, pivot, ...intMiddle, ...intRight];
      }
    }
    return trueValue;
  }

  const leftSorted = intSortByAsc(left);
  const rightSorted = intSortByAsc(right);

  for (let i = 0; i < leftSorted.length; i += 1) {
    copyArr[i] = leftSorted[i];
  }
  for (let i = 0; i < middle.length; i += 1) {
    copyArr[i + leftSorted.length] = middle[i];
  }
  for (let i = 0; i < rightSorted.length; i += 1) {
    copyArr[i + leftSorted.length + middle.length] = rightSorted[i];
  }

  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(/* str, iterations */) {
  throw new Error('Not implemented');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arrNumber = [];
  const arr = [];
  let arrResult = [];
  let int = number;
  let rest = 0;
  let numberToChange = 0;

  if (number < 12) {
    return number;
  }
  while (int > 0) {
    rest = int % 10;
    arrNumber.unshift(rest);
    int = Math.trunc(int / 10);
  }

  let i = arrNumber.length - 1;

  do {
    if (i === 1 && arrNumber[i - 1] > arrNumber[i]) {
      return number;
    }

    if (arrNumber[i - 1] < arrNumber[i]) {
      numberToChange = arrNumber[i - 1];
      arr.push(arrNumber[i]);
      arrResult = arrNumber.splice(0, i - 1);
      break;
    }
    arr.push(arrNumber[i]);
    i -= 1;
  } while (i > 0);

  const pos = arr.findIndex((item) => {
    return item > numberToChange;
  });

  arrResult.push(arr[pos]);
  arr[pos] = numberToChange;
  arrResult = [...arrResult, ...arr];

  let output = 0;
  let j = 1;

  for (let k = arrResult.length - 1; k >= 0; k -= 1) {
    output += arrResult[k] * j;
    j *= 10;
  }

  return output;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
