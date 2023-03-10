// Пример 3 - Поле
// При клике на клеточку она должна менять цвет
// с синего на желтый, с желтого на синий (класс item_active).
// Внизу таблицы должна быть кнопка «поменять цвета».
// При ее нажатии все цвета клеточек меняются
// на противоположные.

// const container = document.querySelector('.container');

// container.addEventListener('click', e => {
//   const targetElem = e.target;
//   const containerElem = e.currentTarget;

//   if (targetElem === containerElem) {
//     return;
//   }

//   if (targetElem.classList.contains('reverse')) {
//     const itemsElems = containerElem.querySelectorAll('.item');
//     itemsElems.forEach(item => item.classList.toggle('item_active'));
//     return;
//   }

//   targetElem.classList.toggle('item_active');
// });
