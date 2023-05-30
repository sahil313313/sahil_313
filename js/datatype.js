//JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.

// 1.Primitive data type
// 2.Non-primitive (reference) data type

//JavaScript primitive data types
//There are five types of primitive data types in JavaScript. They are as follows:

//Data Type	Description
//1.String	= represents sequence of characters e.g. "hello"
//2.Number	= represents numeric values e.g. 100
//3.Boolean	= represents boolean value either false or true
//4.Undefined =	represents undefined value
//5.Null	= represents null i.e. no value at all


//JavaScript non-primitive data types
//The non-primitive data types are as follows:

//Data Type	Description
//Object	represents instance through which we can access members
//Array	represents group of similar values
//RegExp	represents regular expression


// 1. NUMBER DATA TYPE 


let abc = 100;       //number
let xyz = 1.2233;
// 'typeof()' is use to identify datatypes.

console.log(typeof(abc));
console.log(typeof(100 + xyz));
console.log(typeof(10 + 20 + 'sahil'));

// 2. STRING DATA TYPES
let a = 'sahil123'
console.log(a);
console.log(typeof(a))

let address = 'a/p nimblak,Anagar'
console.log(typeof(address));
console.log(address);
let num11 = '300'
console.log(typeof(num11));
console.log(num11 + 200);

// BOOLEAN DATATYPE
 let SahilisClever = true;
 let SahilIsMad = false;
 console.log(typeof(SahilisClever));
console.log(typeof(SahilIsMad));

//UNDEFINED DATATYPE
let num1;
console.log(typeof(num1));


//Null datatype
let myVillage = null;
console.log(typeof(myVillage));

//biginit datatypes
let x = 1111111111111111;
console.log(x);
let aa = 8999999999999999
console.log(aa);


//symbole datatype
let x1 = Symbol('sahil')
console.log(typeof(x1))



//OBJECT DATATYPES
//         1. Array []
let colour = [ 'pink', 'green', 'white', 'yellow' ]; //array with four value: homo
console.log(colour);
let mycity = []  //empty array

console.log(mycity);
console.log(typeof(colour));
console.log(typeof(mycity));

let cars = [100 , 200 , 'swift' , 'piaggio']
// to find the length of the object
console.log(cars.length);

let num3 = [ 1 , 2 ,3 , 4, 5] //homo items
console.log(num3.length);
let num4 = 6000 ;
console.log(num4.length);  //length properties does not apply on number properties

console.log(cars[3]);
console.log(cars[0]);
console.log(num3[2]);
console.log(cars[cars.length-1]);


let no = [10 , 20 ,true, 'good',10.5,] //hetero items


//       2. Object {}
EmpData = {
    name :'sahil',
    address : 'a/p khare karjune',
    mob : 883322 ,
    city : 'bombay'
}
console.log(EmpData);
console.log(EmpData.city);
console.log(EmpData.name);

//multiple data [{}]
MultEmpData =[
    {
        name :'sahil',
    address : 'a/p khare karjune',
    mob : 883322 ,
    city : 'bombay'
},
    {
        name : 'samar',
        add : 'aabb',
        mob : 112233,
        city : 'nagar',
    },
    {
        name : 'aj',
        add : 'nimb',
        mob : 888888,
        city : 'a.nagar'
    }


]
console.log(MultEmpData);
 