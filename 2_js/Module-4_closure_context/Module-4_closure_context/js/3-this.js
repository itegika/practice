// Пример 1 - Ключевое слово this
// Исправьте ошибки чтобы код работал.

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// product.showPrice();

// const fn = product.showPrice;
// fn();

//////////////////////////////////////////////////////

// Пример 2 - Привязка контекста
// Исправьте ошибки чтобы код работал.
// b

// const product = {
//   price: 5000,
//   showPrice(num) {
//     console.log(this.price + num);
//   },
// };

// // product.showPrice(5);

// function callAction(callback) {
//   callback();
//   // callback.apply(product, 5);
// }

// // callAction(product.showPrice, product);
// callAction(product.showPrice.bind(product, 5));
// // callAction(product.showPrice.bind(product2, 30));
// // callAction(product.showPrice.bind(product, 10));

/////////////////////////////////////////////////////////////////

// Пример 3 - есть пользователи и функция changeSalary
// нужно изменить зарплату юзеров с помощью этой ф-ии
// c/a

// const user1 = {
//   name: 'Афанасий',
//   salary: 1300,
// };

// const user2 = {
//   name: 'Анастасия',
//   salary: 2500,
// };

// function changeName(value) {
//   this.name = value;
// }

// function changeSalary(value) {
//   this.salary += value;
// }

// function changeUser(key, value) {
//   this[key] = value;
//   this.key = value;
// }

// // function changeUser2(name, value) {
// //   this.name = name;
// //   this.salary += value;
// // }

// // changeUser2.call(user1, 'Ivan', 500);
// changeUser.call(user1, 'name', 'Ivan');
// changeUser.call(user1, 'isValid', true);
// changeUser.apply(user2, ['salary', 500]);

// console.table(user1);
// console.table(user2);

/////////////////////////////////////////////////////
