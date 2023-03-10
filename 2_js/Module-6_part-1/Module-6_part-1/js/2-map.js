// Создать массив с числами, уменьшенными на 30%

// const prices = [500, 800, 100, 400, 1000];

// const result = prices.map(price => price * 0.7);

// console.log('~ result', result);

///////////////////////////////////////////////////////////////////////////

// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.

// const arr = [5, 6, 7, 8, 9];

// console.log('~ mapedSquares', mapedSquares);

////////////////////////////////////////////////////////////

const inventors = [
  {
    first: 'Albert',
    last: 'Einstein',
    born: 1879,
    passed: 1955,
  },
  {
    first: 'Isaac',
    last: 'Newton',
    born: 1643,
    passed: 1727,
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    born: 1564,
    passed: 1642,
  },
  {
    first: 'Marie',
    last: 'Curie',
    born: 1867,
    passed: 1934,
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    born: 1571,
    passed: 1630,
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    born: 1473,
    passed: 1543,
  },
  {
    first: 'Max',
    last: 'Planck',
    born: 1858,
    passed: 1947,
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    born: 1898,
    passed: 1979,
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
    passed: 1852,
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    born: 1855,
    passed: 1905,
  },
  {
    first: 'Lise',
    last: 'Meitner',
    born: 1878,
    passed: 1968,
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    born: 1829,
    passed: 1909,
  },
];

// Получить массив имен изобретателей

// const names = inventors.map(inventor => inventor.first);

// console.log(names);

////////////////////////////////////////////////////////////////////////

/*
  Функция multiplyBy принимает два аргумента - число и массив.
  Возвращает массив все значения которого умножены на число.
*/

// const multiplyBy = (num, arr) => arr.map(elem => elem * num);

// function multiplyBy(num, arr) {
//   const newArr = arr.map(elem => elem * num);
//   return newArr;
// }

// console.log(multiplyBy(2, [1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
// console.log(multiplyBy(3, [1, 2, 3, 4, 5])); // [3, 6, 9, 12, 15]
// console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]

//////////////////////////////////////////////////////////////////////////

/*
  Напишите функию getPropValues(arr, prop), принимающую
  параметры arr - массив, и prop - имя ключа в объекте.
  Функция должна возвращать массив всех значений этого ключа из объектов arr.
*/

// const guests = [
//   { name: 'Mango', age: 20, isActive: true },
//   { name: 'Poly', age: 18, isActive: false },
//   { name: 'Ajax', age: 30, isActive: true },
//   { name: 'Chelsey', age: 45, isActive: false },
// ];

// // function getPropValues(arr, key) {
// //   const values = arr.map(obj => obj[key]);
// //   return values;
// // }

// const getPropValues = (arr, key) => arr.map(obj => obj[key]);

// // // Вызовы функции для проверки

// console.log(getPropValues(guests, 'name')); // ['Mango', 'Poly', 'Ajax', 'Chelsey']

// console.log(getPropValues(guests, 'age')); // [20, 18, 30, 45]

// console.log(getPropValues(guests, 'isActive')); // [true, false, true, false]
