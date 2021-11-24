// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const allArray = firstArray.concat(secondArray);
//   if (allArray.length > maxLength) {
//     console.log(allArray.slice(0, maxLength));
//     return allArray.slice(0, maxLength);
//   }
//   console.log(allArray);
//   return allArray;
//   // Change code above this line
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

//============================LONGEST WORD==========================================//

// function findLongestWord(string) {
//   let longest = 0;
//   let str = string.split(" ");
//   let word = null;
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i].length > longest) {
//       longest = str[i].length;
//       word = str[i];
//     }
//   }
//   console.log(word);
//   return word;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");

//=======================================================================================================//

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line

//   console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

//=======================================================================================//

// function filterArray(numbers, value) {
// Change code below this line

// let array = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
//   if (numbers[i] > value) {
//     array.push(numbers[i]);
//   }
// }
// console.log(array);
// Change code above this line
// console.log(array);
// return array;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// var a = ["a", "b", "c"];
// var index;
// for (index = 0; index < a.length; ++index) {
//   console.log(a[index]);
// }

// =======================================================================================//

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let array = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       array.push(array1[i]);
//     }
//   }
//   console.log(array);
//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

//============================================================//

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let array = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   console.log(array);
//   return array;
//   // Change code above this line
// }
// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

// function includes(array, value) {
//   // Change code below this line
//   let t = true;
//   let f = false;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return t;
//     } else {
//       return f;
//     }
//   }
//   // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   const keys = Object.keys(object);

//   for (const key of keys) {
//     if (keys.hasOwnProperty(key)) {
//       propCount += 1;
//       console.log(propCount);
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const keys = Object.keys(salaries);
//   console.log(keys);
//   for (const key of keys) {
//     totalSalary += salaries[key];
//   }
//   // Change code above this line
//   console.log(`total:`, totalSalary);
//   return totalSalary;
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// console.log(products);
// function getProductPrice(productName) {
//   // Change code below this line

//   for (const product of products) {
//     // console.log(product);
//     // console.log(product.name);
//     // console.log(product.price);
//     // console.log(productName);
//     if (product.name === productName) {
//       console.log(product.price);
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// getProductPrice("Radar");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Grip");
// getProductPrice("Engine");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const array = [];
//   console.log(propName);

//   for (product of products) {
//     if (product.hasOwnProperty(propName)) {
//       array.push(product[propName]);
//     }
//   }
//   console.log(array);
//   return array;
//   // Change code above this line
// }

// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// const keys = Object.keys(products);
// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   // console.log(productName);

// for (let product of products) {
//   // console.log(product);
//   if (product.hasOwnProperty(productName)) {
//     console.log(product[keys]);
//     // let total = product[price] * product[quantity];
//     // console.log(product[price] * product[quantity]);
//     // return total;
//     return;
//   }
//   }

//   // Пиши код выше этой строки
// }

// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");

// let products = {
//   name: "Radar",
//   price: 1300,
//   quantity: 4,
// };
// const price = products.price;

// console.log(products.price);
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// // console.log(products.price);
// const keys = Object.keys(products);

// for (let key of keys) {
//   console.log(products[key]);
// }

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const first = { category, priority };
//   // console.log(first);
//   const final = { ...first, ...data, completed };
//   console.log(final);
//   // Change code above this line
// }

// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" });
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });

// Change code below this line
// function add(...args) {
//   console.log(args);

//   total = 0;
//   for (let arg of args) {
//     total += arg;
//   }
//   console.log(total);
//   // Change code above this line
// }

// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);

// Change code below this line
// function findMatches(...args , secondArgs) {
//   const matches = []; // Don't change this line
// for(let arg of args){
// if(arg.includes(secondArgs)){
// matches.push(arg)
// }
// }
//   // Change code above this line
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
//  findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)
//  findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)
//  findMatches([63, 11, 8, 29], 4, 7, 16)

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     this.books.splice(this.books.indexOf(oldName), 1, newName);

//     // Change code above this line
//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// // bookShelf.updateBook("The last kingdom", "Dune");

//==================================НАЧАЛЬНОЕ СОСТОЯНИЕ КОДА=======================================//

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//=======================================СДЕЛАНОЕ ЗАДАНИЕ==========================================//

//     const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       const potionIndex = this.potions.indexOf(potion);
//       if (potion.name === potionName) {
//         this.potions.splice(potionIndex, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       const potionIndex = this.potions.indexOf(potion);
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],

//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       console.log(
//         onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//       );
//     } else {
//       console.log(onSuccess(pizzaName));
//     }
//   },
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// const changeEven = (numbers, value) => {
//   // Change code below this line

//   const newArray = [];
//   numbers.forEach((number) => {
//     if (number % 2 != 0) {
//       newArray.push(number);
//     }
//     if (number % 2 === 0) {
//       number = number + value;
//       newArray.push(number);
//     }
//   });
//   console.log(newArray);
//   // console.log(numbers);
//   // Change code above this line
// };

// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   console.log(numbers);
//   // Change code above this line
// }
// changeEven([1, 2, 3, 4, 5], 10);
// changeEven([2, 8, 3, 7, 4, 6], 10);
// changeEven([17, 24, 68, 31, 42], 100);
// changeEven([44, 13, 81, 92, 36, 54], 100);

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length());

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planets);
// console.log(planetsLengths);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.map((book) => book.title);
// console.log(genres);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, books) => books.indexOf(genres) === index
// );

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

const players = [
  {
    name: ["Mango", "Briana Decker", "Sharron Pace"],
    playtime: 1270,
    gamesPlayed: 4,
  },
  {
    name: ["Poly", "Briana Decker", "Sharron Pace"],
    playtime: 469,
    gamesPlayed: 2,
  },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((total, player) => {
  console.log(total[player]);
  return total[player];
}, 0);
