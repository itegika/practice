// import users from './users.js';

////////////////////////////////////////////////////////////////////////////////////

// Получить массив всех элемнтов матрицы, которые больше 16,
// отсортированных по возрастанию

// let superArr = [
//   [1, 5, 58, 11],
//   [54, [15, [1], 6], 17],
//   [2, 65, 47, 89],
// ];

// console.log(superArr.flat(3));

///////////////////////////////////////////////////////////////////

// 4 - Метод Array.prototype.flatMap

// const courses = [
//   {
//     name: 'Basic HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub Desktop', 'GitHub'],
//   },
//   {
//     name: 'Intermediate HTML+CSS',
//     topics: ['VSCode', 'Terminal', 'Git', 'GitHub', 'HTML', 'CSS'],
//   },
//   {
//     name: 'Basic JavaScript',
//     topics: [
//       'VSCode',
//       'Type system',
//       'Loops',
//       'Functions',
//       'Conditions',
//       'Classes',
//       'DOM',
//       'Git',
//       'GitHub',
//     ],
//   },
//   {
//     name: 'Intermediate JavaScript',
//     topics: [
//       'VSCode',
//       'NPM',
//       'Bundlers',
//       'Transpiling',
//       'Promises',
//       'AJAX',
//       'Git',
//       'GitHub',
//     ],
//   },
// ];

// Собрать в allTopics массив всех предметов всех курсов используя flatMap.
// Используя Array.prototype.filter выполнить фильтрацию,
// оставив в uniqueTopics только уникальные элементы.

// const allTopics = courses.flatMap(item => item.topics);

// const uniqueTopics = allTopics.filter(
//   (item, ind, arr) => arr.indexOf(item) === ind,
// );

// console.log(allTopics);
// console.log(uniqueTopics);

//////////////
