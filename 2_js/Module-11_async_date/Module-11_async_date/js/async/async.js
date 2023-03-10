// Есть бутсраповский тост.
// Нужно показать его (bsToast.show()) через 2 секунды после открытия странички и скрыть (bsToast.hide()) через 3 секунды после того, как он появился.
// Это сообщение нужно показать юзеру только один раз.
// (привязка контекста при закрытии без анонимки)

// const toastRef = document.querySelector('.toast');
// const bsToast = new bootstrap.Toast(toastRef, { autohide: false });

// if (!localStorage.getItem('wasToastShown')) {
//   setTimeout(() => {
//     bsToast.show();
//     localStorage.setItem('wasToastShown', true);
//     // setTimeout(() => {
//     //   bsToast.hide();
//     // }, 3000);

//     setTimeout(bsToast.hide.bind(bsToast), 3000);
//   }, 2000);
// }

///////////////////////////////////////////////////////////
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

// Сделать секундомер
// По нажатию на кнопку запускать счетчик, который
// будет увеличиваться на 1 каждую секунду.
// Пока тамер запущен на кнопке должен быть текст "Pause", когда не запущен - "Start"

// const timerRef = document.querySelector('.timer');
// const btnRef = document.querySelector('[data-action="handle-timer"]');
// let counter = 0;
// let counterId = null;

// btnRef.addEventListener('click', e => {
//   if (!counterId) {
//     counterId = setInterval(() => {
//       counter += 1;
//       timerRef.textContent = counter;
//     }, 1000);
//   } else {
//     clearInterval(counterId);
//     counterId = null;
//   }
//   e.target.textContent = counterId ? 'Start' : 'Pause';
// });

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

// Есть бутсраповский тост.
// Нужно показать его (bsToast.show()) через 2 секунды после открытия странички и скрыть (bsToast.hide()) через 3 секунды после того, как он появился.
// Это сообщение нужно показать юзеру только один раз.
// (контекст при закрытии без анонимки)

// const toastRef = document.querySelector('.toast');
// const bsToast = new bootstrap.Toast(toastRef, { autohide: false });

// // bsToast.show();

// if (!localStorage.getItem('wasToastShown')) {
//   setTimeout(() => {
//     bsToast.show();
//     localStorage.setItem('wasToastShown', true);

//     setTimeout(bsToast.hide.bind(bsToast), 3000);
//   }, 2000);
// }

///////////////////////////////////////////////////////////

// Сделать таймер
// По нажатию на кнопку запускать счетчик, который
// будет увеличиваться на 1 каждую секунду.
// Пока тамер запущен на кнопке должен быть текст "Stop", когда не запущен - "Start"

// const timerRef = document.querySelector('.timer');
// const btnRef = document.querySelector('[data-action="handle-timer"]');

// btnRef.addEventListener('click', handleTimer);

// let counter = 0;
// let timerId = null;

// function handleTimer() {
//   if (timerId) {
//     clearTimeout(timerId);
//     timerId = null;
//   } else {
//     timerId = setInterval(() => {
//       counter += 1;
//       timerRef.textContent = counter;
//     }, 1000);
//   }

//   btnRef.textContent = timerId ? 'Stop' : 'Start';
// }
