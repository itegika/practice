// 4 - Сделайте 3 промиса - по одному для каждого фреймворка из массива.
// В каждом расположена функция setTimeout со случайно задержкой от 1 до 3 секунд.
// Пусть каждый промис своим результатом возвращает эту задержку и имя фреймворка.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса
// и выведите результат его работы на экран.

// const frameworks = ['React', 'Vue', 'Angular'];

// const getRandomNumber = () => Math.floor(Math.random() * 3000) + 1;

// const getData = framework => {
//   return new Promise((res, rej) => {
//     const randomInt = getRandomNumber();
//     setTimeout(() => {
//       const isSuccess = Math.random() >= 0.5;

//       if (isSuccess) {
//         res({ framework, randomInt });
//       }
//       rej('🔴 NOT OK!');
//     }, randomInt);
//   });
// };

// const promises = frameworks.map(elem => getData(elem));
// // const promises = frameworks.map(getData);

// Promise.race(promises)
//   .then(res =>
//     console.log(`Framework ${res.framework} won with ${res.randomInt} ms`),
//   )
//   .catch(err => console.log(err));

// // С помощью Promise.all получите массив результатов,
// // выведите на экран информацию, с какой задержкой выполнился промис
// // для каждого фреймфорка.

// Promise.all(promises)
//   .then(arr =>
//     arr.forEach(({ framework, randomInt }) =>
//       console.log(`Framework ${framework} resolved in ${randomInt} ms`),
//     ),
//   )
//   .catch(err => console.log(err));

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

// //////////////////////////////////////////////////////////////////////

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
