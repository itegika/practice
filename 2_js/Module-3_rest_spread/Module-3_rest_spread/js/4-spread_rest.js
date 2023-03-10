// Пример 1 Array SPREAD
// Напиши функции getMinOfArray/getMaxOfArray, которые принимают массив чисел и находят минимальное/максимальное, используя методы объекта Math

// const arrayOfNumbers = [24, 11, 5, 127];

// const maxNumber = Math.max(...arrayOfNumbers);

// console.log(maxNumber);
// console.log(getMinOfArray(arrayOfNumbers));
// console.log(getMaxOfArray(arrayOfNumbers));

//////////////////////////////////////////////////////////////////////////

// Пример 2 Object SPREAD
// 1) Сделать копию объекта userSettings
// 2) объеденить объекты defaultSettings и userSettings
// в объект finalSettings

// const defaultSettings = {
//   ff: 'TMR',
//   fsz: 16,
//   color: '#000',
//   bgc: '#fff',
// };

// const userSettings = {
//   ff: 'Arial',
//   fsz: 14,
// };

// const userSettingsCopy = { ...userSettings };
// const finalSettings = { ...defaultSettings, ...userSettings };

// // console.log('defaultSetting', defaultSetting);
// // console.log('userSettings', userSettings);

// console.log(
//   'userSettingsCopy === userSettings',
//   userSettingsCopy === userSettings,
// );
// console.log('finalSettings', finalSettings);

//////////////////////////////////////////////

// Пример 3 Object SPREAD
// Напишите функцию getObjectWithoutProperty
// которая принимает объект и название свойства
// и возвращает копию объекта без этого свойства
// spread / delete (или rest)

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// const getObjectWithoutProperty = function (obj, keyName) {
//   const objCopy = { ...obj };
//   delete objCopy[keyName];

//   return objCopy;
// };

// // const userWithoutAge = getObjectWithoutProperty(user, 'age');

// // console.table('userWithoutAge', userWithoutAge);
// // console.table('user', user);

// console.table(getObjectWithoutProperty(user, 'age'));
// console.table(getObjectWithoutProperty(user, 'name'));
// console.table(getObjectWithoutProperty(user, 'jgljklkglk'));
// console.table('user', user);

//////////////////////////////////////////////////////////////////////////////

// Пример 4
// Что будет в консоли

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = {
//   ...a,
//   ...b,
//   d: 2000,
// };

// const c = {
//   ...b,
//   ...a,
//   w: 5,
// }

// const c = {
//   ...b,
//   ...a,
//   x: 5,
//   z: 3,
// };

// console.log(c);

///////////////////////////////////////////////////////////

// Пример 5
// Array SPREAD
// add the elements of an existing array (certsToAdd) into a new array (certifications) at index 1
// Вставить сплайсом / Вставить распылением

// let certsToAdd = ['Algorithms', 'Front End'];

// let certifications = [
//   'Web Design',
//   'Data Visualization',
//   'APIs',
//   'Information Security',
// ];

// const unitedArr = [...certsToAdd, ...certifications];

// console.log(unitedArr);

// certifications.splice(1, 0, ...certsToAdd);

// console.table(certifications);

////////////////////////////////////////////////////////////////////

// Пример 6
// Array SPREAD
// // pass elements of an array as arguments to a function

// function addThreeNumbers(x, y, z) {
//   console.log(x + y + z);
// }

// let salary = [100, 200, 500];

// // variant #1 (manualy by array and indexes)
// addThreeNumbers(...salary);

// // variant #2 (spread)
// addThreeNumbers(salary[0], salary[1]);

////////////////////////////////////////////////////////////////////

// Пример 7
// Array SPREAD

// 1) copy arrays (slice vs spread)

// let arr = [1, 2, 3];

// let arrCopy = [...arr];

// console.log('arr', arr);
// console.log('arrCopy', arrCopy);

// 2) concatenate arrays (concat vs spread)

// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];

// let unitedArr;

// console.log('unitedArr', unitedArr);
// console.log(arr1);

/////////////////////////////////////////////////////////////////

// REST: condense multiple elements into an array
// Написать функцию, которая получает разное количество
// аргументов (первый аргумент - множитель, остальные - числа). Нужно вернуть массив остальных чисел, умноженных
// на множитель

// function multiply(...rest) {
//   console.log(rest);
// }

// multiply(2, 1, 2, 3, 8, 9);

/////////////////////////////////////////////////////////////////////
