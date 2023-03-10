// По функциям важные понятия:
// - зачем нужны функции
// - зачем нужен return
// - функция всегда что-то возвращает - если нет return, вернется undefined
// - объявление это еще не вызов - работать не будет
// - локальные переменные - функциональная область видимости

// const a = 1;
// const b = 2;

// function addTwoNumbers() {
//   // const a = 3;
//   // const b = 4;

//   console.log('функция вызвана');

//   return a + b;
// }

// const functionResult = addTwoNumbers();
// console.log('functionResult -', functionResult);

////////////////////////////////////////////////////////////////////////////////

// - в чем разница между параметрами функции и ее аргументами;

// const subtractTwoNumbers = function (number1, number2) {
//   return number1 - number2;
// };

// const a = 1;
// const b = 2;

// const functionResult = subtractTwoNumbers(b, a);
// console.log(functionResult);

///////////////////////////////////////////////////////////////////////////////
// - нежелательно мутировать внешние переменные
// - нежелательно мутировать свои параметры

// let a = 1;
// let b = 2;

// const subtractTwoNumbers = function (number1, number2) {
//   return number1 - number2;
// };

// let functionResult = subtractTwoNumbers(b, a);
// console.log(functionResult);

///////////////////////////////////////////////////////////////////////////

// Пример - Дефолтные значения параметров функции

// Написать функцию showMessage, которая получает два аргумента - name и days
// Возвращать она должна строку:
// "[user name] has trial version for [how many days] days"
// Если аргументы не переданы, должна выводиться строка
// 'User has trial version for 30 days';

// const showMessage = function (name = 'User', days = 30) {
//   // if (name === undefined && days === undefined) {
//   //   return 'User has trial version for 30 days';
//   // }
//   const message = `${name} has trial version for ${days} days`;

//   return message;
// };

// const userName = 'Mick';
// const trialDays = 20;

// const message = showMessage(userName, trialDays, false);
// // const message = showMessage('Jack', 60);
// console.log(message);

// console.log(showMessage());

//////////////////////////////////////////////////////////////////////////

// Напишите функцию getMin(a,b), которая возвращает меньшее из чисел a и b.
// Если равны - возвращает любое.

// function getMin(a, b) {
//   return a < b ? a : b;

//   // if (a < b) {
//   //   return a;
//   // }

//   // return b;
// }

// const result = getMin(2, 5);
// console.log(result); // 2

// console.log(getMin(3, -1)); // -1
// console.log(getMin(1, 1)); // 1
