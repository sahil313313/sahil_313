// 1. array length
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

//2. toString() converts an array to a string of (comma separated) array values.
let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let fruits2 = fruits1.toString()
console.log(fruits2);

//The join() method also joins all array elements into a string.
 let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
ff = fruits3.join("*")
console.log(ff);  

//The pop() method removes the last element from an array:
let ff1 = ["Banana", "Orange", "Apple", "Mango"];
let ff2 = ff1.pop();
console.log(ff2);
console.log(ff1);

//The push() method adds a new element to an array (at the end):
let ff3 = ["Banana", "Orange", "Apple", "Mango"];
let ff4 = ff3.push("banana");
console.log(ff4);
console.log(ff3);