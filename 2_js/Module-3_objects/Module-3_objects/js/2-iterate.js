// 5
// Напиши скрипт, который, для объекта user, последовательно:

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// // выводит содержимое объекта user в формате ключ:значение
// // используя for in

// for (const objKey in user) {
//   const objValue = user[objKey];
//   console.log(`${objKey}: ${objValue}`);
// }

// // используя Object.keys() и for...of

// const userKeys = Object.keys(user);
// console.log(userKeys);

// for (const userKey of userKeys) {
//   const userValue = user[userKey];
//   console.log(`${userKey}: ${userValue}`);
// }

/////////////////////////////////////////////////////////////////////////

// Пример 6 - метод Object.values()
// У нас есть объект,
// в котором хранятся зарплаты нашей команды.
// Напишите код для суммирования всех зарплат
// и сохраните результат в переменной sum.
// Должно получиться 390. Если объект salaries пуст,
// то результат должен быть 0.

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;

// const salariesList = Object.values(salaries);

// for (const salary of salariesList) {
//   sum += salary;
// }

// console.log(sum); // 390

////////////////////////////////////////////////////////////////////////////

// Пример 7 - используя Object entries
// напишите скрипт, который
// выводит содержимое объекта user в формате ключ:значение

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// const client = {
//   ff: 'Mango',
//   vv: 20,
//   hobby: 'html',
//   premium: true,
// };

// const userProps = Object.entries(client);
// console.log(userProps);

// console.log(userProps.join('---'));

// for (const userProp of userProps) {
//   const key = userProp[0];
//   const value = userProp[1];

//   console.log(`${key}: ${value}`);
// }

// console.table(userProps);
// console.log(userProps);

// console.log(`${}: ${}`);


////////////////////////////////////////////////////////////////////////////
