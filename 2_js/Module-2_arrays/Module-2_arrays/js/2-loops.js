// let arr = [5, 10, 25, 68, 78, 95];
// let total = 0;
// // імперативний код
// for (let i = 0; i < arr.length; i++) {
//   total += arr[i];
// }

// // декларативний код
// for (const el of arr) {
//   total += el;
// }
// console.log(total);

////////////////////////////////////////////////////////////////////////////////////////

// Пример 1 - Перебор массива
// Используй цикл for, который для каждого элемента массива будет
// выводить в консоль сообщение в формате
// <номер элемента> - <значение элемента>.
// Нумерация элементов должна начинаться с 1.

// Например для первого элемента массива
// ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const items = ['Mango', 'Poly', 'Ajax'];

// for (let i = 0; i < items.length; i++) {
//   const elNumber = i + 1;
//   const curEl = items[i];
//   console.log(`${elNumber} - ${curEl}`);
//   // console.log(i);
// }

/////////////////////////////////////////////////

// Пример 2 - Переписать на for of

// let arr = [5, 10, 15, 20, 25, 30, 35, 40, 48, 51];
// console.log(arr);

// for (let i = 0; i < arr.length; i += 1) {
//   if (arr[i] % 2 !== 0) {
//     continue;
//   }
//   console.log(arr[i]);
// }

// for (const item of arr) {
//   if (item % 2 !== 0) {
//     continue;
//   }
//   console.log(item);
// }

///////////////////////////////////////////////////////////////////////////////////////////

// Пример 3 - Поиск элемента
// Найти самое большое число в массиве.
// for of

// const numbers = [2, 17, 94, 1, 23, 37];

// let largestNum = 0;

// for (const number of numbers) {
//   if (number > largestNum) {
//     largestNum = number;
//   }
// }

// console.log(largestNum);
