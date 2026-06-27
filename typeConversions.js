// let age = 23;
// age = String(age);// explicit type conversion 
// //explicitly converting string onlyn changes thr type but the value
// let bool = true;
// bool = String(bool)


// let age1 = '23';
// age1 = Number(age1)
// console.log(age1 + 2);


//Boolean() function converts 0 to false and any other number to true
//Boolean() function converts any string to true and empty string to false
let x = 0
x = Boolean(x);
console.log(x)

let str = "False"
str = Boolean(str)
console.log(str)

let str1 = "";//empty string
str1 = Boolean(str1);
console.log(str1);

let str2 = " ";
str2 = Boolean(str2);
console.log(str2)

let y = "0"
y = Boolean(y)
console.log(y)