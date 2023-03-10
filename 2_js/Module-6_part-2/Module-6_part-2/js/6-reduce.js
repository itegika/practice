// const number = [250, 1, 10, 3];

// Посчитать сумму чисел в массиве

///////////////////////////////////////////////////////////

/*
  Функция summAllNumbers принимает любое число аргументов.
  Возвращает число - сумму всех аргументов.
*/

// const summAllNumbers = (...arr) => {
// return arr.reduce((sum, num) => sum + num, 0);
// };

// console.log(summAllNumbers(1, 2, 3)); // 6
// console.log(summAllNumbers(1, 2, 3, 4)); // 10
// console.log(summAllNumbers(1, 2, 3, 4, 5)); // 15*/

///////////////////////////////////////////////////////////

// Напишите функцию getAverage(numbers),
// которая принимает массив чисел и возвращает среднее

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// console.table(getAverage(numbers));

///////////////////////////////////////////////////////////

// Посчитать сколько всего упражнений нужно сделать за неделю

// const hoursWorkedPerWeek = [
//   { day: 'Mon', count: 9 },
//   { day: 'Tue', count: 10 },
//   { day: 'Wen', count: 11 },
//   { day: 'Thu', count: 5 },
//   { day: 'Fri', count: 12 },
// ];

// const hoursCount = hoursWorkedPerWeek.reduce(
//   (acc, workDay) => acc + workDay.count,
//   0,
// );

// console.log(hoursCount);

///////////////////////////////////////////////////////////

// Напишите функцию unique(arr),
// которая возвращает массив,
// содержащий только уникальные элементы arr

// const unique = arr =>
//   arr.reduce((newArr, num) => {
//     if (!newArr.includes(num)) {
//       newArr.push(num);
//     }
//     return newArr;
//   }, []);

// const notUniqueNumbers = [1, 2, 3, 1, 3, 2, 4, 5, 4, 7, 5];

// console.log(unique(notUniqueNumbers));

////////////////////////////////////////////////////////////
