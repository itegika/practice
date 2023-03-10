// 1 - Функции resolve и reject

// Сделайте промис, внутри которого будет задержка setTimeout в 2 секунды,
// после которой промис должен зарезолвится со значением 'Resolved!' (то есть выполнится успешно). Результат вывести в консоль.

// const prom = new Promise(res => {
//   setTimeout(() => {
//     res('Resolved!');
//   }, 2000);
// });

// prom.then(data => console.log(data));
// prom.then(console.log);

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

///////////////////////////////////////////////////////////////////////

// Сделайте промис, внутри которого будет задержка setTimeout в 2 секунды,
// после которой промис должен зареджектится co значением "Error!" (то есть выполнится с ошибкой). Ошибку вывести в консоль.

// const prom = new Promise((_, rej) => {
//   setTimeout(() => {
//     rej('Error!');
//   }, 2000);
// });

// prom.catch(console.log);

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

//////////////////////////////////////////////////////////////////////

// Сделайте промис, который через 1 секунду случайным образом выполнится или с успехом '🟢 OK!', или с ошибкой '🔴 NOT OK!'.

// const prom = new Promise((res, rej) => {
//   const isSuccess = Math.random() >= 0.5;

//   if (isSuccess) {
//     res('🟢 OK!');
//   }
//   rej('🔴 NOT OK!');
// });

// // prom.then(console.log).catch(console.log);
// prom.then(data => console.log(data)).catch(err => console.log(err));

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

///////////////////////////////////////////////////////////////////////////

// Есть функция, которая генерирует случайные числа от 1 до 10.
// Написать функцию, которая возвращает промис.
// Сделайте так, чтобы сгенерированное число было задержкой функции setTimeout в секундах.
// Оберните все это в промис.
// Пусть промис выполнится успешно, если сгенерировано число от 1 до 5 (`🟢 Resolved after ${delay} sec`), и с ошибкой - если от 6 до 10 (`🔴 Rejected after ${delay} sec`).

// const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

// const makePromise = () => {
//   return new Promise((res, rej) => {
//     const randomDelay = getRandomNumber();

//     setTimeout(() => {
//       if (randomDelay <= 5) {
//         res(randomDelay);
//       }
//       rej(randomDelay);
//     }, randomDelay * 500);
//   });
// };

// makePromise()
//   .then(resDelay => console.log(`🟢 Resolved after ${resDelay / 2} sec`))
//   .catch(errDelay => console.log(`🔴 Rejected after ${errDelay / 2} sec`));
