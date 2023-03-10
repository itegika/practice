// Пример 6 - Операторы сравнения и приведение типов
// Каким будет результат этих выражений?

// const a = '5';
// const b = 10;

// console.log(a >= b);

// const password = prompt('Enter password');
// console.log(password.length >= 4);

// const a = 5;
// const b = '5';
// console.log(a == b);
// console.log(a === b);

// const a = 1;
// const b = '1';
// console.log(a === b);
// console.log(a == b);

// const a = NaN;
// const b = NaN;
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);

// const a = 0;
// const b = null;
// console.log(a == b);
// console.log(a === b);
//
// const a = null;
// const b = null;
// console.log(a == b);
// console.log(a === b);

// const a = null;
// const b = undefined;
// console.log(a == b);
// console.log(a === b);

// const a = 0;
// const b = undefined;
// console.log(a == b);
// console.log(a === b);
//
// const a = 'a';
// const b = null;
// console.log(a == b);
// console.log(a === b);

// const a = '0';
// const b = 0;
// console.log(a == b);
// console.log(a === b);

// const a = 'H';
// const b = 'h';

// console.log(a == b);
// console.log(a === b);

// const c = "Hello";
// const d = "Hello";
// console.log(c == d);
// console.log(c === d);

// console.log(5 > 4);
// console.log(10 >= '7');
// console.log('2' > '12');
// console.log('2' < '12');
// console.log('4' == 4);
// console.log('6' === 6);
// console.log('false' === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log('0' == false);
// console.log("0" === false);
// console.log('Ё' < 'ё');
// console.log('а' < 'я');
// console.log(undefined == null);
// console.log(undefined === null);


////////////////////////////////////////////////////////////////
// Логические операторы
// Что выведет код?

// - возвращают не true или false, а значение переменной;
// - не сравнивают два операнда слева и справа, а проверяют булевое значение операнда слева, а потом уже принимают решение.
// - приоритет операторов - сначала &&, потом ||

// || or
// && and
// ! not

// if(true && 4 && 'hello') {}

// const data = 'dog';

// const finalData = data || 'cat';

// console.log(finalData);

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'hello');

// console.log(true && 0 && 'hello');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log(!null || !(2 && undefined));

// console.log((1 && null && 2) > 0);

// console.log(null || 2 && 3 || 4);

// console.log(0 || '' || '0');

// console.log(0 || null || '0');

// console.log(0 || undefined || null);

// console.log(4 + 5 === 8 || 5 * 4 === 20 || 'q' + 'a' >= 'qw');
// console.log(false || (true && true));

// console.log(0 || '' || 0);

// console.log(0 || null || 'undefined');

// console.log(NaN || null || 5);

// console.log(28 || null || '');

// console.log(Infinity || 55 || NaN);

// console.log(undefined || 'true' || NaN);

// console.log('a' && 1 && 0);

// console.log('a' && 1 && 2);

// console.log('a' && 0 && 2);

// console.log('0' && NaN && 2);

// console.log('' && NaN && 2);

// console.log(' ' && NaN && 2);

// console.log([] && 'null' && 2);

// console.log([] && null && 2);

// console.log([] && undefined && 2);

// console.log([] && 8 && -Infinity);

// console.log(false && 'false' && -Infinity);

// console.log('true' && -0 && null);

// console.log('Отримав відпустку' && "Квитки" && 'Train');

// console.log('Отримав відпустку' || "Квитки" || 'Train');

// console.log(typeof Infinity);

////////////////////////////////////////////////////////
// Метод Boolean и falsy значения

// // false
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(-0));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(false));

// // true
// console.log(Boolean('add'));
// console.log(Boolean(Infinity));
// console.log(Boolean(' '));
// console.log(Boolean(-5));
