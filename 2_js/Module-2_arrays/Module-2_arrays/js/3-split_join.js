// const str = 'Keep calm and carry on';
// const str = 'asdasd|dasd|rttewrtert';

// const delimeter = ' ';

// const arrFromStr = str.split(delimeter);
// const strFromArray = arrFromStr.join(' - ');

// console.log(str);
// console.log(arrFromStr);
// console.log(strFromArray);

////////////////////////////////////////////////////////////////

// Пример 1 - с помощью метода split() и метода join()
// изменить любое слово на слово с 1-м символом в верхнем регистре, а остальными - в нижнем

// const word = 'heLlO'; // Hello

// const letters = word.toLowerCase().split('');

// letters[0] = letters[0].toUpperCase();

// let capitalizedWord = letters.join('');

// let capitalizedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();

// console.log(word);
// console.log(capitalizedWord);

////////////////////////////////////////////////////////////

// reverse

// let arr = [1, 5, 9, 8, 7, 10];
// arr.reverse();
// console.log(arr);
// let newArr = arr.reverse();
// console.log(arr);
// console.log(newArr);

//////////////////////////////////////////////////

// palindrome

// Проверить, является ли слово палиндромом

// 1) Сделать строку массивом и записать в переменную
// 2) Реверс массива
// 3) Соединяем в строку
// 4) Сравнить обе строки

// const word = 'потоп';
// const word = 'ропот';

// const reversedWord = word.split('').reverse().join('');

// console.log(word === reversedWord);
