// const a = {
//   n: 1,
// };

// const b = {
//   n: 1,
// };

// console.log(a === b);
// console.log(JSON.stringify(a) === JSON.stringify(b));

// // -------------------

// const bInJson = JSON.stringify(b);

// console.log(bInJson);

// let bCopy = b;
// // let bCopy = JSON.parse(bInJson);

// console.log(bCopy);

// bCopy.n = 2;

// console.log('~ b', b);
// console.log('~ bCopy', bCopy);
// console.log('bCopy === b', bCopy === b);

// ------------------------------------------------

// const arr1 = [1, 2, 3];

// const arr2 = [1, 2, 3];

// console.log(arr1 === arr2);
// console.log(JSON.stringify(arr1) === JSON.stringify(arr2));

// const str = JSON.stringify(arr1);
// console.log(str);

// const aCopy = JSON.parse(str);
// console.log(aCopy);

// -----------------------------------

// let bCopy = '{"n" : 1}';

// bCopy = JSON.parse(bCopy);
// bCopy = JSON.parse('index.js:24 [1,2,3]');

// console.log(bCopy);

// try {
//   bCopy = JSON.parse(bCopy);
//   // bCopy = JSON.parse('index.js:24 [1,2,3]');
// } catch (error) {
//   // console.log(error.message);
//   console.log('NOT OK');
// }

// console.log(bCopy);

// try {
//   bCopy = JSON.parse(bCopy);
//   // bCopy = JSON.parse('index.js:24 [1,2,3]');
// } catch (err) {
//   console.log(err.message);
//   bCopy = null;
// }

// try {
//   bCopy = JSON.parse(bCopy);
//   // bCopy = JSON.parse('index.js:24 [1,2,3]');
// } catch (err) {
//   console.log(err.message);
//   bCopy = null;
// } finally {
//   console.log(bCopy);
// }

// console.log(bCopy);
