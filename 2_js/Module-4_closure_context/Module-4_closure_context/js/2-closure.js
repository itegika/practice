// Пример 6 - Замыкания
// Напишите функцию makeCounter(), которая возвращает другую функцию, которая считает и возвращает количество своих вызовов.

// function makeCounter() {
//   let counter = 0;

//   const result = function () {
//     counter += 1;
//     return counter;
//   };

//   return result;
// }

// const counter1 = makeCounter(); // fn #1
// const callCount1 = counter1(); // 1
// const callCount2 = counter1(); // 2

// console.log(`Вызов counter1 № ${callCount1}`);
// console.log(`Вызов counter1 № ${callCount2}`);
// console.log(`Вызов counter1 № ${counter1()}`);
// console.log(`Вызов counter1 № ${counter1()}`);
// console.log(`Вызов counter1 № ${counter1()}`);
// console.log(`Вызов counter1 № ${counter1()}`);

// console.log('--------------------');

// const counter2 = makeCounter(); // fn #2
// const call2Count1 = counter2(); // 1
// const call2Count2 = counter2(); // 2

// console.log(`Вызов counter2 № ${call2Count1}`);
// console.log(`Вызов counter2 № ${call2Count2}`);
// // console.log(`Вызов counter2 № ${counter2()}`);

// // console.log(`Вызов counter1 № ${counter1()}`);
// // console.log(`Вызов counter1 № ${counter1()}`);

// // console.log(`Вызов counter2 № ${counter2()}`);

// console.log('--------------------');

// const counter3 = makeCounter(); // fn #3

// console.log(`Вызов counter3 № ${counter3()}`);

////////////////////////////////////////////////////////////////////

// Пример 7 - напишите функцию
// makeCounter() - которая возвращает обект счетчик
// у которого есть методы
// increment() - увеличить на 1
// decrement() - уменьшить на 1
// reset() - сбросить счетчик на 0
// show() - вывести текущее значение в консоль

// function makeCounter() {
//   let counter = 0;

//   const obj = {
//     increment(num = 1) {
//       counter += num;
//     },
//     decrement() {
//       counter -= 1;
//     },
//     reset() {
//       counter = 0;
//     },
//     show() {
//       console.log(counter);
//     },
//   };

//   return obj;
// }

// const counter1 = makeCounter(); // counter = 0

// const counter2 = makeCounter(); // counter = 0

// // console.log(counter1 === counter2);

// counter1.increment();
// counter1.increment(5);
// // counter1.increment();
// // counter1.increment();
// // counter1.increment();

// counter1.show();
// counter2.show();

// // counter1.decrement();
// // counter1.decrement();
// // counter1.decrement();
// // counter1.decrement();
// // counter1.decrement();
// // counter1.decrement();
// // counter1.decrement();
// // counter1.decrement();

// // counter1.show();
// // counter2.show();

// // counter.reset();

// counter2.decrement();

// counter1.show();
// counter2.show();

// counter2.show();

// console.dir(counter1);

////////////////////////////////////////////////////////
