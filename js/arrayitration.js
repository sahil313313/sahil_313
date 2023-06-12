// The JavaScript spread operator (...) allows us to quickly copy all or part of an 
// existing array or object into another array or object.

let colors = ['red','blue','yellow','pink'];
let copyColours = [];
//first way
for (let index = 0; index <  colors.length; index++) {
    copyColours.push(colors[index]) 
    
}
console.log(copyColours);

//by using spread oprator
let copyColours1 = [...colors]
console.log(copyColours1);



let obj = {
    name : 'sahil',
    address : 'nagar'
}
 let obj1 ={...obj}
 console.log(obj1);


 let no1 = [10,20,30];
 let no2 = [40,50,60];
 let no = [...no1,...no2];
 console.log(no);



 //copying some parts
 let no3 = [12,13,133,14,15];
 let [firsti,secoundi,thirdi, ...rest] = no3;
 console.log(firsti);
 console.log(...rest);

 let no4 = [12,13,133,14,15];
 let copyno4 = [];
 no4.forEach(item=>{
    copyno4.push(item)
 })
 console.log(copyno4);
//MAP FILTER
 let student = [
    {
        name: 'om',
        age: 20
    }, {
        name: 'Radha',
        age: 19
    }, {
        name: 'Ram',
        age: 20
    }
]
NameStud = student.map(item=>{
    return item.name
})
console.log(NameStud);

NameStud1 = student.map(item=>{
    return item.age
})
console.log(NameStud1);

//filter filter

let num = [10,11,12,13,21,22,23,31,32,33];
let num1 = num.filter(item=>{
    return item < 25
})
console.log(num1);

let num3 = [10,11,12,13,21,22,23,31,32,33];
 num3.forEach((item,index)=>{
    console.log(item,index);
})


// to rmoved duplicate itoms in the array we use set()method

let x1 = [11,12,13,14,11,12,13,14,15,16];
let x2 = [...new Set(x1)];
console.log(x2);

//2nd way
let newx1=x1.filter((item,i)=>{
   return x1.indexOf(item)===i;
})
console.log(newx1);

