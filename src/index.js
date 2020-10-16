const numberMap = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
};

module.exports = function toReadable (number) {
  if (number === 0) {
      return numberMap[0];
  }

  let result = '';
  let currentNumber = number;

  if (currentNumber / 100 >= 1) {
      result += numberMap[Math.floor(currentNumber / 100)] + ' hundred';
      currentNumber -= Math.floor(currentNumber / 100) * 100;
  }

  if (currentNumber / 10 >= 2) {
      if (result !== '') {
          result += ' ';
      }
      result += numberMap[Math.floor(currentNumber / 10) * 10];
      currentNumber -= Math.floor(currentNumber / 10) * 10;
  }

  if (currentNumber > 0) {
      if (result !== '') {
          result += ' ';
      }
      result += numberMap[currentNumber];
  }

  return result;
}
