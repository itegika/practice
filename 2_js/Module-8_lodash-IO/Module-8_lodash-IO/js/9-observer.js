import countries from './countries.js';

// Пагинация с инфинити скрол IntersectionObserver

// 1. Функция, которая рендерить часть стран, начиная с переданной страницы
// 2. Создание экземпляра ІО
// 3. Колбек-обработчик, который увеличивает страницу и вызывает ф-цию-рендер (entry.isIntersecting)
// 4. Вызов на экземляре метода observe с якорем
// 5. Проблема повторяющихся вызовов, когда массив закончится
// 6. Объект options

// const listRef = document.querySelector('.country-list');
// const anchorRef = document.querySelector('.anchor');

// const ITEMS_PER_PAGE = 10;
// let curPage = 0;
// const lastPage = Math.floor(countries.length / ITEMS_PER_PAGE);

// function renderCountries(countries, page) {
//   const startIndex = page * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;

//   const countriesToRender = countries
//     .slice(startIndex, endIndex)
//     .map(country => {
//       const parEl = document.createElement('p');
//       parEl.classList.add('country');
//       parEl.textContent = country;
//       return parEl;
//     });

//   listRef.append(...countriesToRender);

//   console.log(listRef.children.length);
//   console.log(page);
// }

// renderCountries(countries, curPage);

// const observer = new IntersectionObserver(onItemIntersect, {});

// function onItemIntersect([entry], observer) {
//   if (entry.isIntersecting) {
//     curPage += 1;
//     renderCountries(countries, curPage);
//   }

//   if (curPage >= lastPage) {
//     observer.disconnect();
//   }
// }

// observer.observe(anchorRef);
