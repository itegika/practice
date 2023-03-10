// Пример 3 - Переделайте предыдущую задачу так,
// чтобы один из промисов в цепочке выполнился с ошибкой.
// В конце цепочки расположите метод catch, который поймает эту ошибку.
// В конце вывести сообщение о том, что цепочка закончила выполнение.

// const makePromise = number => {
//   console.log(number);
//   return new Promise(res => {
//     setTimeout(() => {
//       res(Math.pow(number, 2));
//     }, 1000);
//   });
// };

// Promise.resolve(2)
//   .then(num2 => makePromise(num2))
//   .then(makePromise)
//   // .then(num => Promise.reject('Error!'))
//   .then(makePromise)
//   .catch(err => console.log(err))
//   .finally(() => console.log('Finish'));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
