// Пример 8 - Деструктуризация объекта
// Присвоить значение переменным name и status
// равные значениям соответсвующих полей объекта
// (явно и с помощью деструктуризации)

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // const name = hotel.name;
// // const stars = hotel.stars;

// const { name, stars } = hotel;

// console.log(name);
// console.log(stars);

/////////////////////////////////////////////////////

// Пример 9 - Деструктуризация объекта
// Объявим переменные name, stars, status ("online") и присвоим им значения из объекта
// а также значения по-умолчанию

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const { name, stars, status: userStatus = 'online' } = hotel;

// console.log(name);
// console.log(stars);
// console.log(userStatus);

/////////////////////////////////////////////////////////////////////

// Пример 10 - Деструктуризация объекта
// напишите функцию
// которая принимает информацию о пользователе
// и выводит ее в консоль в виде строки:
// `name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// // 1. Принимает список свойств (сначала деструктурировать в переменные, потом передать при вызове)

// const showUserInfo = (premium, name, age, hobby) => {
//   const message = `name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`;

//   console.log(message);
// };

// const { premium, age, name, hobby } = user;

// showUserInfo(premium, name, age, hobby);

// 2. Принимает объект, а внутри деструктурирует

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// const showUserInfo = anyUser => {
//   const { premium, age, name, hobby } = anyUser;
//   const message = `name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`;

//   console.log(message);
// };

// showUserInfo(user);

// 3. Принимает объект, деструктурирует в параметрах

// const showUserInfo = ({ premium, age, name, hobby }) => {
//   const message = `name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`;

//   console.log(message);
// };

// showUserInfo(user, 'isOnline');

//////////////////////////////////////////////////////////////////////////////////

// ⚠️Помятка для JS
// Передавай аргументы как один объект и сделай коллег счастливым.
// Все согласятся что довольно сложно разобратся в таком коде:

// const createUser = (username, date, isAdmin, isMod) => {
//   //create user
// };

// createUser('Ivan', '16-02-2021', false, true);

// // // А на примере ниже можно отчетливо в уме рассортировать аргументы по значениям.
// const createUser = ({ username, date, isAdmin, isMod, status = {} }) => {
//   //create user

// };

// createUser({
//   username: 'Ivan',
//   date: '16-02-2021',
//   idAdmin: false,
//   isMod: true,
// });

// ---------------------------------------------------------------------------------------
// // Используйте это в вашем коде и порадуйте ваших коллег.
// // ---------------------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////

// Пример 11 - Деструктуризация массива
// Запиши в переменные a, b, c, d значения элементов массива

// let strNum = ['one', 'two', 'three', 'four', 'five'];

// // // console.log(strNum[0], strNum[1], strNum[2]);

// const [a, , ...rest] = strNum;

// console.log(a);
// // console.log(b);
// console.log(rest);
// // console.log(d);

/////////////////////////////////////////////////////////

// Пример 12 - Деструктуризация массива
// в функции при получении аргумента

// let numb = [5, 10, 20];

// function showArrVal([a, b, c]) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// showArrVal(numb);

//////////////////////////////////////////////////////////////////////////////

// Пример 13 - Деструктуризация массива
// используя Object entries, for of
// и деструктуризацию массива напишите скрипт, который
// выводит содержимое объекта user в формате ключ:значение

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// const props = Object.entries(user);
// // console.log(props);

// for (const [key, value] of props) {
//   // const [key, value] = arr;
//   console.log(`${key}: ${value}`);
// }

///////////////////////////////////////////////////////////////////////

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// const { age, ...userCopy } = user;

// // // const userCopy = { ...user };

// // userCopy.age = 0;

// console.log(userCopy);
// // console.log(age);

// const getObjectWithoutPropperty = (obj, key) => {
//   const { [key]: keyToDelete, ...objCopy } = obj;
//   console.log(keyToDelete);
//   return objCopy;
// };

// // const newUser = getObjectWithoutPropperty(user, 'age');

// // console.table('newUser', newUser);
// // console.table('user', user);

// console.table(getObjectWithoutPropperty(user, 'age'));
// console.table(getObjectWithoutPropperty(user, 'name'));
// console.table(getObjectWithoutPropperty(user, 'jgljklkglk'));
// console.table('user', user);

//////////////////////////////////////////////////////////////////////////
