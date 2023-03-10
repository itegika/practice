// Пример 5 - Шаблонные строки
// Написать фразу с помощью конкатенации и шаблонных строк
// "Здравствуйте, меня зовут [name], мне [age] лет и мне нравится [hobby]", где в квадратных скобках - переменные вставленные в строку.

// const name = 'Манго';
// const age = 5;
// const hobby = 'плавать';

// let message = `Здравствуйте, меня зовут ${name}, мне ${age} лет и мне нравится ${hobby}`;

// console.log(message);

/////////////////////////////////////////////////////

// Спросить у юзера его имя, фамилию и возраст с помощью prompt
// Записать все ответы в переменные и  вывести в консоль:
// User's full name is [name] [lastName]. He is [age] years old.

/////////////////////////////////////////////////////
// Cвойства и методы строк

// let str = 'Hello world!!!!';

// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str);
// console.log(str.includes('hello'));

// console.log(str.toLowerCase().includes('World'.toLowerCase()));
// const normalizedStr = str.toLowerCase();
// const normalizedSubStr = 'World'.toLowerCase();
// console.log(normalizedStr.includes(normalizedSubStr));

////////////////////

// console.log(str[2]);
// console.log(str.indexOf('llo'));
// let arr = str.split(' ');
// console.log(arr);
// let strNew = arr.join(' ');
// console.log(strNew);

///////////////////

// let str = "The quick red fox jumped over the lazy dog's back.";
// const strPart = str.slice(2, -5); // начиная со второго отрезать 5 с конца
// console.log(strPart); // e quick red fox jumped over the lazy dog's 
// console.log(str);

///////////////////////////////////////////// экранирование
// let day = 18;
// let month = 6;
// let year = 2018;
// console.log(`date = ${day}\\0${month}\\${year}`);

/////////////////////

// let b = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis dolores impedit molestiae nesciunt numquam placeat qui recusandae! Amet culpa eos iusto perferendis reiciendis sunt velit voluptatem. Commodi, esse, tempora?';

// console.log(b.length);
// let a = 'Hello';
// console.log(a.length);
// console.log(b[12]);

// let c = 'Hello';
// console.log(c.toLowerCase());
// console.log(c.toUpperCase());

// let d = 'Hello World';
// let splitWord = d.split(' ');
// console.log(splitWord);
// console.log(splitWord.join('-'));

// let a = 'heroplus';
// console.log(a.substring(1,3));
// console.log(a.substr(4, 4));
