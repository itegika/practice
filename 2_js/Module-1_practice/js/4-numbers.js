// Базовые операторы +, -, *, /
// Вывести на экран сумму: количество яблок + количество винограда.

// const appleCount = 47;
// const grapeCount = 135;
// const total = appleCount + grapeCount;

// console.log(total);

////////////////////////////////////////////////////

// Приоритет операторов
// Создать переменную result, присвоить ей выражение
// 10 + 22 - 2 * 5, разобрать приоритет и вывести её значение в консоль.

// const result = 10 + 22 - 2 * 5;

// console.log(result);

/////////////////////////////////////////////////////

// Операторы ++, --, +=, -=, *=, /=

// let a = 5;

///////////

// a = a + 1;
// console.log(a);

// a++;
// console.log(a);

// a += 1;
// console.log(a);

///////////

// a = a - 1;
// console.log(a);

// a--;
// console.log(a);

// a -= 1;
// console.log(a);

///////////

// a = a + 2;
// console.log(a);

// a += 2;
// console.log(a);

///////////

// let a = 5;

// console.log(a++); 
// console.log(a); 
// console.log(++a); 

// console.log(a--);
// console.log(a);
// console.log(--a);

///////////

// let a = 5;

// a += 5;
// console.log(a);

// a -= 3;
// console.log(a);

// a *= 2;
// console.log(a);

// a /= 7;
// console.log(a);

/////////////////////////////////////////////////

// Оператор остатка от деления %

// let a = 11;
// let b = 3;

// console.log(48 % 2);

// const a = Math.floor(47 / 3);

// console.log('is even', a % 2 === 0);

// console.log(a % b);

//////////////////////////////////////////////
// Методы parseInt, parseFloat, isNaN, Number, toFixed

// let a = 2.1;
// let b = 2.55;
// console.log(a * b);

// let c = (5.55).toFixed(1);
// console.log(c);
// console.log(Number(c));

// let c = a * b;
// console.log(Number(c)); // 5.3549999999999995
// console.log(Number('56')); // 56

//////////////

// let font = '2.578964rem';
// console.log(parseInt(font));
// console.log(parseFloat(font));

// console.log(parseInt('10.5px')); // 10
// console.log(parseInt('10px')); // 10
// console.log(parseFloat('25,5px')); // 25
// console.log(parseInt('aas20')); // NaN
// console.log(parseFloat('a25.5')); // NaN

///////////////

// const number = Number('56,555');
// console.log(number);

// console.log(Number.isNaN(number));
// console.log(Number.isNaN('qwerty'));
// console.log(Number.isNaN(5));

/////////////////////////////////////////////////////////
// Обьект Math

// console.log(Math.floor(2.99)); // 2
// console.log(Math.ceil(2.000000000001)); // 3
// console.log(Math.round(2.499999)); // 2
// console.log(Math.abs(-10)); // 10
// console.log(Math.pow(3, 2)); // 9
// console.log(Math.sqrt(4)); // 2
// console.log(Math.max(-50, -40)); // -40
// console.log(Math.min(5, 2, 4)); // 2
// console.log(Math.random()); // случайное число

// const min = 1; // включая
// const max = 101; // исключая
// console.log(Math.floor(Math.random() * (max - min)) + min);

////////////

// Возведение в степень
// Определить площадь круга с радиусом 10см.

// const radius = 10;
// const area = Math.PI * Math.pow(radius, 2);
// const area = Math.PI * radius * radius;
// const area = Math.PI * radius ** 2;

// console.log(area);

////////////////////////////////////////////////////
// конкатенация строк, сложение строк и чисел

///////////////////////////////////////////////// +
// let a = 'Join ';
// let b = 'us';
// let c = ' ';
// c = a + b;
// console.log(c);
// console.log(typeof c);

// let a = 3;
// let b = ' join';
// let c = ' ';
// console.log(a + b);

// let a = 3;
// let b = 10;
// let c = '12';
// console.log(a + b + c);
// console.log(typeof a + b + c);

// let a = true;
// let b = ' join';
// console.log(a + b); // true join

// let a = 12;
// let b = '1';
// console.log(a + b); // 121

// let a = true;
// let b = 12;
// console.log(a + b); //13

// let a = true;
// let b = true;
// console.log(a + b); //2

// let a = true;
// let b = false;
// console.log(a + b); // 1

// let a = 12;
// let b = null;
// console.log(a + b); // 12

// let a = undefined;
// let b = 10;
// console.log(a + b); // NaN
// console.log(typeof NaN); // number

// console.log(5 + 5 + 'a' + undefined); // 10aundefined

// let a = undefined;
// let b = ' join';
// console.log(a + b); // undefined join

////////////////////////////////////////////////////// -

// let a = 'join us';
// let b = 'us';
// console.log(a - b); // NaN

// let a = 10;
// let b = '2';
// console.log(b - a); // -8

/////////////////////////////////////////////////////// *

// let a = 10;
// console.log(a**); // error

// let a = 2;
// let b = '2.2';
// console.log(a * b); // 4.4

// let a = 2;
// let b = 'start';
// console.log(a * b); // NaN

// let a = 5;
// let b = null;
// console.log(a * b); // 0

// let a = 5;
// let b = undefined;
// console.log(a * b); // NaN

///////////////////////////////////////////////// /
// let a = 10;
// let b = '2';
// console.log(a / b); // 5

// let a = 10;
// let b = 'two';
// console.log(a / b); // NaN

// let a = 10;
// let b = 0;
// console.log(a / b); // Infinity

// let a = 10;
// let b = Infinity;
// console.log(a / b); //0
