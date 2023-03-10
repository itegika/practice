// Пример - Стрелочные функции (explicit return)

// function sum(a, b) {
//   return a + b;
// }

// const sum = function (a, b) {
//   return a + b;
// };

// const sum = (a, b) => {
//   return a + b;
// };

const sum = (a, b) => a + b;
// console.log(sum(1, 2));


const hello = str => str + '!!!';
// console.log(hello("hi"));


///////////////////////////////////////////////////

// Выполните рефакторинг
// заменив объявление функции на стрелочную функцию.

// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} больше ${b}`;
//   }

//   return `число ${b} больше ${a}`;
// }

// const checkNumbers = (a, b) =>
//   a > b ? `число ${a} больше ${b}` : `число ${b} больше ${a}`;

// console.log(checkNumbers(7, 3)); // число 7 больше 3
// console.log(checkNumbers(7, 10)); // число 10 больше 7

//////////////////////////////////////////////////////////////////

// Пример - Стрелочные функции (implicit return)
// Выполните рефакторинг
// заменив объявление функции на стрелочную функцию.

// function mult(x, y, z) {
//   return x * y * z;
// }

// Результат рефакторинга:
// const mult = (x, y, z) => x * y * z;

// console.log(mult(1,2,3)); // 6
// console.log(mult(2, 5, 10)); // 100
