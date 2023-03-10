// 2 - Написать промис, который сразу зарезолвится и вернет число в resolve
// Создать на нем цепочку из 3 then. В каждом увеличивать число вдвое.

// Promise.resolve(3)
//   .then(num => {
//     console.log(num);
//     return num * 2;
//   })
//   .then(num2 => {
//     console.log(num2);
//     return num2 * 2;
//   })
//   .then(num3 => {
//     console.log(num3);
//     return num3 * 2;
//   });

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

////////////////////////////////////////////////////////////////

// Сделайте цепочку из трех промисов.
// Пусть первый промис сразу возвращает число.
// Сделайте так, чтобы каждый последующий промис через 1 секунду
// возводил в квадрат результат предыдущего промиса.
// После окончания манипуляций выведите полученное число в консоль.

// const makePromise = number => {
//   console.log(number);
//   return new Promise(res => {
//     setTimeout(() => {
//       res(Math.pow(number, 2));
//     }, 1000);
//   });
// };

// Promise.resolve(2)
//   // .then(num => {
//   //   console.log(num);
//   //   return new Promise(res => {
//   //     setTimeout(() => {
//   //       res(Math.pow(num, 2));
//   //     }, 1000);
//   //   });
//   // })
//   .then(num2 => makePromise(num2))
//   .then(makePromise)
//   .then(makePromise)
//   .then(makePromise);

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

