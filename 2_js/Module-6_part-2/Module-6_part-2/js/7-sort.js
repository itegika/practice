// Сортировка примитивов
// Выполнить сортировку массива цен по убыванию и возрастанию.
// Вспомнить как сортирует по умолчанию.
// Рассмотреть callback для метода sort.

// const numbers = [7, 1, 9, 3, 2, 8, 6];
// const numbers = [2, 14, 1, 37, 263, 8, 111];

// numbers.sort();

// console.log(numbers);

// const letters = ['a', 'q', 'b', 's', 'z'];
// const letters = ['a', 'Q', 'B', 's', 'z'];

// letters.sort();

// console.log(letters);

///////////////////////////////////////////////////////////

// Сортировка строк (по умолчанию и с помощью localeCompare)
// Выполнить сортировку массива названий мониторов
// в алфавитном и обратном алфавитном порядке.

// const items = ['SAMSUNG', 'lg', 'ASUS', 'dell', 'BENQ'];

// const sotedItems = [...items].sort((a, b) => b.localeCompare(a));

// console.log(sotedItems);

///////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////

// Пример 3 - Сортировка сложных типов
// Выполнить сортировку массива объектов, не изменяя исходный массив:

// по возрастанию и убыванию значения свойства price.

// по имени в алфавитном и обратном алфавитном порядке.

// const items = [
//   { name: 'SAMSUNG', price: 15000 },
//   { name: 'LG', price: 9000 },
//   { name: 'ASUS', price: 27000 },
//   { name: 'DELL', price: 12000 },
//   { name: 'BENQ', price: 7000 },
// ];

// const itemsByPrice = [...items].sort((a, b) => a.name.localeCompare(b.name));

// console.log('~ itemsByPrice', itemsByPrice);

// const itemsByName;

// console.log('~ itemsByName', itemsByName);

///////////////////////////////////////////////////////////

// const inventors = [
//   {
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955,
//   },
//   {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727,
//   },
//   {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642,
//   },
//   {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934,
//   },
//   {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630,
//   },
//   {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543,
//   },
//   {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947,
//   },
//   {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979,
//   },
//   {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852,
//   },
//   {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905,
//   },
//   {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968,
//   },
//   {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909,
//   },
// ];

// Отсортировать изобретателей по дате рождения.
// Отсортировать изобретателей по фамилии в алфавитном порядке.
