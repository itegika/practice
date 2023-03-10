// 1. Задача. Выведите в консоль текущие день, месяц и год в формате 'год-месяц-день'.

const padDate = num => String(num).padStart(2, 0);

// const date = new Date();

// const year = date.getFullYear();
// const month = padDate(date.getMonth() + 1);
// const day = padDate(date.getDate());

// console.log(`${year}-${month}-${day}`);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 2. Выведите в консоль количество часов, прошедшее между 13 марта и текущим моментом

// const curDate = new Date();
// // const dateInPast = new Date(2021, 2, 13);
// // const dateInPast = new Date('2021, Mar 13');
// const dateInPast = new Date('2021-03-13');

// const msDiff = curDate - dateInPast;

// const hourDiff = parseInt(msDiff / 1000 / 60 / 60);

// console.log(hourDiff);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 3. Есть инпут, в который пользователь вводит дату своего рождения в формате '1995-12-31' (с конкретным годом).
// По нажатию кнопки выведите под инпутом сколько дней осталось до его дня рождения.

const input = document.querySelector('.date');
const button = document.querySelector('[data-action="count-days"]');
const result = document.querySelector('.days-left');

button.addEventListener('click', () => {
  if (!Date.parse(input.value)) {
    alert('Введите верную дату!');
    return;
  }

  const curDate = new Date();
  const userDate = new Date(input.value);
  const curYear = curDate.getFullYear();
  userDate.setFullYear(curYear);

  if (userDate < curDate) {
    userDate.setFullYear(curYear + 1);
  }

  const daysLeft = Math.ceil((userDate - curDate) / (1000 * 60 * 60 * 24));
  result.textContent = `Осталось ${daysLeft} дней`;
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// // 1. Задача. Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.

// const dateRef = document.querySelector('.result');
// const padDate = num => String(num).padStart(2, 0);

// const date = new Date();

// const year = date.getFullYear();
// const month = padDate(date.getMonth() + 1);
// const day = padDate(date.getDate());

// dateRef.textContent = `${year}-${month}-${day}`;

// // 2. Выведите на экран количество часов, прошедшее между 11 марта 2000 года и текущим моментом

// const presentTime = Date.now();
// const pastDate = new Date('11 Mar 2000');
// // const pastDate = new Date('Mar 11, 2000');
// // const pastDate = new Date(2000, 2, 11);
// const pastTime = pastDate.getTime();

// const hourDiff = Math.round((presentTime - pastTime) / 1000 / 60 / 60);

// console.log('hourDiff', hourDiff);

// // 3. Создайте инпут, в который пользователь вводит дату своего рождения в формате
// // '2014-12-31' (с конкретным годом).
// // По нажатию кнопки выведите под инпутом сколько дней осталось до его дня рождения.

// const input = document.querySelector('.date');
// const button = document.querySelector('[data-action="count-days"]');
// const result = document.querySelector('.days-left');

// button.addEventListener('click', countDaysLeft);

// function countDaysLeft() {
//   if (!Date.parse(input.value)) {
//     result.textContent = '';
//     return;
//   }

//   const now = new Date();
//   const birthDate = new Date(input.value);

//   birthDate.setFullYear(now.getFullYear());

//   if (birthDate < now) {
//     birthDate.setFullYear(now.getFullYear() + 1);
//   }

//   const diff = birthDate.getTime() - now.getTime();

//   const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

//   result.textContent = days;
// }
