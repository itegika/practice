// Пример 1 - Основы обьектов
// Напиши скрипт, который, для объекта user, последовательно:

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// console.table(user);

// // выводит в консоль значение поля name (2 варианта обращения к свойству)

// console.log(user.name);
// console.log(user['name']);

// // добавляет поле mood со значением 'happy'

// const happy = 'happy';

// user.mood = happy;

// console.table(user);

// // заменяет значение hobby на 'skydiving'

// user.hobby = 'skydiving'; // заменяет значение hobby на 'skydiving'
// // user.hobby = ['skydiving']; // добавляет значение hobby на 'skydiving' в массив

// console.table(user);

// заменяет значение premium на false

// user.premium = false

// console.table(user);

///////////////////////////////////////////////////////////////////////

// 2
// Функция getData должна возвращать значение свойства по переданному ключу

// const coffee = {
//   name: 'Late',
//   price: 3,
//   size: 'Medium',
//   sort: 'Arabica',
//   isMilk: true,
//   calories: 135,
//   coffeine: true,
//   sirop: ['caramel', 'chocolate', 'cherry'],
// };

// function getData(obj, key) {
//   return obj[key];
// }

// const value = getData(coffee, 'name');
// console.log(value);

// console.log(getData(coffee, 'price'));
// console.log(getData(coffee, 'sort'));

// console.log(getData(user, 'age')); //  ReferenceError: user is not defined

/////////////////////////////////////////////////////////////////////

// 3 Вывести в консоль значения вложенных свойств

// let user = {
//   id: 7851485214521452,
//   private: {
//     login: 'user256',
//     email: 'user@.com',
//     tel: '15-98-78-96-45',
//     'credit-card': 789654565214562,
//     password: '78fefd4521df411',
//   },
//   public: {
//     name: 'Bob',
//     age: 52,
//     gender: 'female',
//     surname: 'Dou',
//     photos: [
//       'https//sdfksdjfskj555',
//       'https//sdfksdjfskj',
//       'https//sdfksdjfskj',
//       'https//sdfksdjfskj',
//     ],
//     subscribers: 560,
//     likes: 1500,
//   },
// };

// console.table(user);

// // (публичное имя, личный телефон, певое публичное фото)

// console.log(user.public.name);
// console.log(user.private.tel);
// console.log(user.public.photos[0]);

///////////////////////////////////////////////////////////////////////

// Пример 4 - Массив объектов
// Напишите ф-цию calcTotalPrice(stones, stoneName),
// которая принимает массив обьектов и строку с названием камня.
// Ф-ция считает и возвращает общую стоимость камней с таким именем

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 },
// ];

// const calcTotalPrice = function (stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return "Такого камня нет в списке";
// };

// console.table(calcTotalPrice(stones, "Изумруд"));
// console.table(calcTotalPrice(stones, 'Изумруд'));
// console.table(calcTotalPrice(stones, 'Бриллиант'));
// // console.table(calcTotalPrice(stones, 'Сапфир'));
// // console.table(calcTotalPrice(stones, 'Щебень'));
// console.table(calcTotalPrice(stones, 'Галька'));
