// import users from './users.js';

///////////////////////////////////////////////////////////

// Дан массив с числами.
// Получите сумму квадратов его элементов, но только тех квадратов, которые больше 40.

// Сделайте из него массив, состоящий из квадратов этих чисел
// Оставьте только элементы больше 40
// И посчитайте их сумму

// let arr = [5, 6, 7, 8, 9];

// const sum = arr
//   .map(item => item ** 2)
//   .filter(sqr => sqr >= 40)
//   .reduce((acc, num) => acc + num, 0);

// console.log(sum);

//////////////////////////////////////////////////////////////////////////////////

// const inventors = [
//   {
//     first: 'Albert',
//     last: 'Einstein',
//     born: 1879,
//     passed: 1955,
//   },
//   {
//     first: 'Isaac',
//     last: 'Newton',
//     born: 1643,
//     passed: 1727,
//   },
//   {
//     first: 'Galileo',
//     last: 'Galilei',
//     born: 1564,
//     passed: 1642,
//   },
//   {
//     first: 'Marie',
//     last: 'Curie',
//     born: 1867,
//     passed: 1934,
//   },
//   {
//     first: 'Johannes',
//     last: 'Kepler',
//     born: 1571,
//     passed: 1630,
//   },
//   {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     born: 1473,
//     passed: 1543,
//   },
//   {
//     first: 'Max',
//     last: 'Planck',
//     born: 1858,
//     passed: 1947,
//   },
//   {
//     first: 'Katherine',
//     last: 'Blodgett',
//     born: 1898,
//     passed: 1979,
//   },
//   {
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815,
//     passed: 1852,
//   },
//   {
//     first: 'Sarah E.',
//     last: 'Goode',
//     born: 1855,
//     passed: 1905,
//   },
//   {
//     first: 'Lise',
//     last: 'Meitner',
//     born: 1878,
//     passed: 1968,
//   },
//   {
//     first: 'Hanna',
//     last: 'Hammarström',
//     born: 1829,
//     passed: 1909,
//   },
// ];

// Получить отсортированные по алфавиту имена изобретателей, которые родились в 19-м веке

// const names = inventors
//   .filter(inventor => inventor.born >= 1800 && inventor.born < 1900)
//   .map(person => person.first)
//   .sort((a, b) => a.localeCompare(b));

// console.log('~ names', names);

///////////////////////////////////////////////////////////////////////////////
