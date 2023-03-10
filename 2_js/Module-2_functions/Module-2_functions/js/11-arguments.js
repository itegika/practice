// 2 - Псевдомассив arguments

// Напишите функцию calculateAverage()
// которая принимает произвольное кол-во аргументов
// и возвращает их среднее значение.
// Все аругменты будут только числами.

// const calculateAverage = function () {
//   let sum = 0;
//   const arrayArgs = Array.from(arguments);
//   console.log(arrayArgs);

//   for (const arg of arguments) {
//     console.log(arg);
//     sum += arg;
//     console.log(sum);
//   }
//   return sum / arguments.length;
// };
// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

//////////////////////////////////////////////////////////////////

/*  
  3
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers = [2, 1, 4, 9];

// const addUniqueNumbers = function (baseNums, ...numbers) {
//   const uniques = baseNums.slice();
//   for (const number of numbers) {
//     if (!uniques.includes(number)) {
//       uniques.push(number);
//     }
//   }
//   return uniques;
// };

// // // Вызовы функции для проверки
// const newArray = addUniqueNumbers(uniqueNumbers, 1, 2, 3);
// console.log(uniqueNumbers); // [2, 1, 4, 9]
// console.log(newArray); // [2, 1, 4, 9, 3]

// const newArray = addUniqueNumbers(uniqueNumbers, 12, 2, 3, 19);
// console.log(uniqueNumbers); //  [2, 1, 4, 9]
// console.log(newArray); // [2, 1, 4, 9, 12, 3, 19]

// const newArray = addUniqueNumbers(uniqueNumbers, 4, 5, 12, 3, 1, 2, 8);
// console.log(uniqueNumbers); // [2, 1, 4, 9]
// console.log(newArray); //[2, 1, 4, 9, 5, 12, 3, 8]