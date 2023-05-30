//String length
//String slice()
//String substring()
//String substr()
//String replace()
//String replaceAll()
//String toUpperCase()
//String toLowerCase()
//String concat()
//String trim()
//String trimStart()
//String trimEnd()
//String padStart()
//String padEnd()
//String charAt()
//String charCodeAt()
//String split()

//1 . string length

let abc = 'ssajkhdlihfiudhgfghrtgtrhgrhgwh'
console.log(abc.length);

//2. string slice
let text = 'sahil is a rapper and fighter'
console.log(text.slice(0,5));
console.log(text.slice(11,17));
console.log(text.slice(22,29));
//negative slice
let txt = 'i like apple'
console.log(txt.slice(-5));

//3. substing
//substring() is similar to slice().

//The difference is that start and end values less than 0 are treated as 0 in substring().
let txt1 = 'i am a kingmaker'
console.log(txt1.substring(7,16));

// 4.substr
let txt2 = 'adsfsfergrtth22'
console.log(txt2.substr(5,8));

//5 . replace
//The replace() method replaces a specified value with another value in a string

let txt3 = 'nagar i love nagar and nagar is a good city'
let txt4 = txt3.replace(/nagar/g, 'ahmednagar');
console.log(txt4);
