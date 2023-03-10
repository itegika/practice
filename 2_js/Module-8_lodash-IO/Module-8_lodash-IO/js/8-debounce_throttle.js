import countries from './countries.js';

// Живой поиск с дебаунсом/тротлом

// const containerRef = document.querySelector('.country-list');
// const inputRef = document.querySelector('.search');

// let currentTime = Date.now();

// const renderCountries = countriesArr => {
//   const countriesElems = countriesArr
//     .map(country => `<p class="country">${country}</p>`)
//     .join('');

//   containerRef.innerHTML = countriesElems;
// };

// renderCountries(countries);

// // inputRef.addEventListener('input', onInputSearch);
// // inputRef.addEventListener('input', _.throttle(onInputSearch, 3000));
// inputRef.addEventListener('input', _.debounce(onInputSearch, 500));

// function onInputSearch(event) {
//   console.count('normal call #');
//   const newTime = Date.now();
//   const timeDiff = (newTime - currentTime) / 1000;
//   currentTime = newTime;
//   console.log('~ time period', timeDiff);

//   const inputValue = event.target.value.toLowerCase().trim();

//   const filteredCountries = countries.filter(country =>
//     country.toLowerCase().includes(inputValue),
//   );

//   renderCountries(filteredCountries);
// }
