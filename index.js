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

function includes(array, value) {
  // Change code below this line
  let t = true;
  let f = false;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return t;
    } else {
      return f;
    }
  }
  // Change code above this line
}

includes([1, 2, 3, 4, 5], 3);
includes([1, 2, 3, 4, 5], 17);
includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
includes(["apple", "plum", "pear", "orange"], "plum");
includes(["apple", "plum", "pear", "orange"], "kiwi");
