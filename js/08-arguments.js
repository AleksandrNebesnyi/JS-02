/*
 * Псевдомассив arguments и Array.from и ...
 */

// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);

//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// const fn = function (a, b, c, ...args) {
//   console.log(`${a} ${b} ${c}`);
//   console.log(args);
// };

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

// const filterNumbers = function (array, ...args) {
//   console.log("array: ", array);
//   console.log("args: ", args);
//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);

//       console.log(`${element} есть везде!`);
//     }
//   }

//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// // console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// // console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const uniqueElements = [];
//   for (const element of array1) {
//     if (array2.includes(element)) {
//       uniqueElements.push(element);
//     }

//     return uniqueElements;
//   }

//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);

// ------------------------------------------------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (let product of products) {
//     console.log(product.price);
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }
// getProductPrice("Scanner");
// --------------------------------------------------
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   const arrayValue = [];

//   for (const product of products) {
//     const keys = Object.keys(product);
//     for (const key of keys) {
//       if (key === propName) {
//         arrayValue.push(product[key]);
//         console.log(arrayValue);
//       }
//     }
//   }
//   return arrayValue;
//   // Change code above this line
// }
// getAllPropValues("name");

// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];
// for (const book of books) {
// Объект книги
// console.log(book);
// // Название
// console.log(book.title);
// // Автор
// console.log(book.author);
// Рейтинг
//   console.log(book.rating);
// }
// ----------------------------------------------------

// Напиши функцию calculateTotalPrice(productName) которая принимает один
// (
// цена * количество) товара с таким именем из массива products.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line

//   let totalPrice = 0;

//   for (const product of products) {
//     const keys = Object.keys(product);
//     const values = Object.values(product);

//     for (const value of values) {
//       if (value === productName) {
//         totalPrice = product.price * product.quantity;
//         console.log(totalPrice);
//       }
//     }
//   }

//   return totalPrice;
//   // Change code above this line
// }
// calculateTotalPrice("Radar");

// Деструктуризация обьекта

// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// Для того, чтобы сократить количество повторений, можно деструктуризировать свойства объекта в локальные переменные в теле цикла.

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// Если в объекте немного свойств, деструктуризацию можно выполнить прямо в месте объявления переменной book.

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

//  деструктуризации свойств вложенных объектов

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// Паттерн «Объект настроек»

// function doStuffWithBook(book) {
//   // Делаем что-то со свойствами объекта
//   console.log(book.title);
//   console.log(book.numberOfPages);
//   // И так далее
// }
//  Тогда во время её вызова передаём один объект с необходимыми свойствами.

// ✅ Всё понятно
// doStuffWithBook({
//   title: "Последнее королевство",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   public: true,
// });

// Ещё один плюс в том, что можно деструктуризировать объект в параметре book.

// // Это можно сделать в теле функции.
// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, public } = book;
//   console.log(title);
//   console.log(numberOfPages);
//   // И так далее
// }

// // Или в сигнатуре (подписи), разницы нет.
// function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
//   console.log(title);
//   console.log(numberOfPages);
//   // И так далее
// }

// Операция spread при передаче аргументов

// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25

// Операция spread позволяет создать копию массива или «склеить»
// произвольное количество массивов в один новый.

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// Операция spread при создании нового объекта
// Во время распыления можно добавлять свойства в произвольное место.Глав
// помнить про уникальность имени свойства и о том, что его значение может быть перезаписано.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  const { category, priority, completed } = data;

  console.log(data);
  // Change code above this line
}

makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
