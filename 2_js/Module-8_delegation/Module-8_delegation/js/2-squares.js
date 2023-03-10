// Пример 2 - Ecnm 8 синих квадратов,
// при клике на любой, он становится желтым (класс block_active),
// при этом если есть уже желтый квадрат,
// то он становится обратно синим и так можно кликать на любой квадрат,
// он становится желтым, а старый желтый квадрат обратно синим и тд.

// const parentRef = document.querySelector('.parent');

// parentRef.addEventListener('click', evt => {
//   const parent = evt.currentTarget;
//   const child = evt.target;

//   if (child.classList.contains('parent')) {
//     return;
//   }

//   const activeChild = parent.querySelector('.block_active');

//   // if (activeChild !== null) {
//   //   activeChild.classList.remove('block_active');
//   // }

//   // if (activeChild) {
//   //   activeChild.classList.remove('block_active');
//   // }

//   // activeChild && activeChild.classList.remove('block_active');

//   activeChild?.classList.remove('block_active');

//   child.classList.add('block_active');
// });
