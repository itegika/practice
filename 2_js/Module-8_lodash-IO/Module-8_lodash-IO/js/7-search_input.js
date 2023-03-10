import countries from './countries.js';

// Живой поиск простой (фильтрация)
// Отобразить все страны
// При вводе в инпут отображаются только те страны, в которых есть введенные символы

// const containerRef = document.querySelector('.country-list');
// const inputRef = document.querySelector('.search');

// const renderCountries = countriesArr => {
//   const countriesElems = countriesArr
//     .map(country => `<p class="country">${country}</p>`)
//     .join('');

//   containerRef.innerHTML = countriesElems;
// };

// renderCountries(countries);

// inputRef.addEventListener('input', onInputSearch);

// function onInputSearch(event) {
//   const inputValue = event.target.value.toLowerCase().trim();

//   const filteredCountries = countries.filter(country =>
//     country.toLowerCase().includes(inputValue),
//   );

//   renderCountries(filteredCountries);
// }
