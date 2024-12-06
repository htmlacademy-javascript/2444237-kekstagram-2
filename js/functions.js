// 1 задание
const funcLength = (string, maxLength) => {
  if(string.length <= maxLength){
    return true;
  }
  return false;
};

funcLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
funcLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
funcLength('проверяемая строка', 10); // false

// 2 задание
const IsPalindrom = (string) => {
  const normalizeString = string.replaceAll(' ', '').toLowerCase();
  let result = '';
  for(let i = normalizeString.length - 1; i >= 0; i--){
    result += normalizeString[i];
  }
  if(result === normalizeString){
    return true;
  }
  return false;
};

// Строка является палиндромом
IsPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
IsPalindrom('ДовОд'); // true
// Это не палиндром
IsPalindrom('Кекс'); // false

// 3 задание

const extractDigitsFromString = (string) => {
  let result = '';
  if(typeof(string) !== 'string'){
    string = string.toString();
  }
  for(let i = 0; i < string.length; i++){
    if(!isNaN(parseInt(string[i],10))){
      result += string[i];
    }
  }
  if(result === '') {
    return NaN;
  }
  return parseInt(result,10);

};

extractDigitsFromString('2023 год'); // 2023
extractDigitsFromString('ECMAScript 2022');// 2022
extractDigitsFromString('1 кефир, 0.5 батона'); // 105
extractDigitsFromString('агент 007'); // 7
extractDigitsFromString('а я томат');// NaN
