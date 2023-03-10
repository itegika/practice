// import users from './users.js';

///////////////////////////////////////////////////////////

// Создать массив с числами не больше 10

// const numbers = [250, 1, 10, 3, 25, 5, 10, 60, 7, 12, 9];

// const result = numbers.filter(number => number < 10 || number > 100);

// console.log('~ result', result);

//////////////////////////////////////////////////////////

// Дан массив с числами. Оставьте в нем только отрицательные числа.

// const numbers = [4, -6, 7, 3, -9, 1];

// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

// Дан массив с числами. Оставьте в нем только четные числа.

///////////////////////////////////////////////////////////

// Дан массив со строками. Оставьте в нем только те строки,
// длина которых больше 5-ти символов.

// const items = ['SAMSUNG', 'lg', 'ASUS', 'dell', 'BENQ'];

// const longNames = items.filter(item => item.length > 5);

// console.log(longNames);

///////////////////////////////////////////////////////////

// Дан массив, в нем могут быть обычные элементы и подмассивы,
// например [1, 2, [3, 4], 5, [6, 7]].
// Оставьте в нем только подмассивы (Array.isArray())

// const data = [1, 2, [3, 4], 5, [6, 7]];

////////////////////////////////////////////////////////////

// Напишите функцию filterRange(arr, a, b),
// которая принимает массив arr,
// ищет в нём элементы между a и b
// и отдаёт массив этих элементов.
// Функция должна возвращать новый массив
// и не изменять исходный.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.table(filterRange(numbers, 3, 7));
// console.table(filterRange(numbers, 2, 5));
// console.log(filterRange(numbers, 6, 5));

///////////////////////////////////////////////////////////

const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    born: 1879,
    passed: 1955,
  },
  {
    first: "Isaac",
    last: "Newton",
    born: 1643,
    passed: 1727,
  },
  {
    first: "Galileo",
    last: "Galilei",
    born: 1564,
    passed: 1642,
  },
  {
    first: "Marie",
    last: "Curie",
    born: 1867,
    passed: 1934,
  },
  {
    first: "Johannes",
    last: "Kepler",
    born: 1571,
    passed: 1630,
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    born: 1473,
    passed: 1543,
  },
  {
    first: "Max",
    last: "Planck",
    born: 1858,
    passed: 1947,
  },
  {
    first: "Katherine",
    last: "Blodgett",
    born: 1898,
    passed: 1979,
  },
  {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
    passed: 1852,
  },
  {
    first: "Sarah E.",
    last: "Goode",
    born: 1855,
    passed: 1905,
  },
  {
    first: "Lise",
    last: "Meitner",
    born: 1878,
    passed: 1968,
  },
  {
    first: "Hanna",
    last: "Hammarström",
    born: 1829,
    passed: 1909,
  },
];

// Получить массив изобреталей, рожденных в 19-м веке

// const invetors19c = inventors.filter(({ born }) => born >= 1800 && born < 1900);

// console.log('~ invetors19s', invetors19c);

///////////////////////////////////////////////////////////////////////////////

/*
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/

//
// console.log( findGreaterThen(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
// console.log( findGreaterThen(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
// console.log( findGreaterThen(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]

///////////////////////////////////////////////////////////

/*
  Напишите функию getActiveGuests(guests), принимающую
  один параметр guests - массив объектов гостей.
  Функция должна возвращать массив объектов активных гостей.
*/

// const guests = [
//   { name: 'Mango', age: 20, isActive: true },
//   { name: 'Poly', age: 18, isActive: false },
//   { name: 'Ajax', age: 30, isActive: true },
//   { name: 'Chelsey', age: 45, isActive: false },
// ];

// const activeGuests = guests.filter(guest => !guest.isActive);

// console.log(activeGuests);

// console.log(getActiveGuests(array)); // массив из 2-х объектов Mango и Ajax

///////////////////////////////////////////////////////////
