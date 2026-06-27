// // unary and binary operators

// //unary operators
// let x = 1;
// x = -x;  //unary - operation
// console.log(x)

// let k = '4';
// let l = '6';
// let sum = +k + +l; //unary plus - converts string to number;
// let sum1 = k + l; // string
// console.log(sum1);
// console.log(sum);

// //binary operators ( + - * / % ** )
// let a=10 , b=2;
// console.log(a % b);
// console.log(a ** b);

// let str1 = "Hi" , str2 = " Hello";
// console.log(str1 + str2); // string concatenation

// /*
// assignment operators - ( = += -+ *= /= **= %= )
// */

// let m = n = o = 12;
// console.log(m, n, o)

// //modify in place
// let num = 5;
// num += 15;
// console.log(num)

// // increment and decrement
// //increment - x++ or ++x

// num++ // post increment
// // ++num is pre increment

// //difference between them is ++x first increments and rerturns
// //but post increment first returns and then increments
// //similar for decrement
// console.log(num)

// //comparision - ( < > <= >= != ==  )
// //note that they are not strict 

// let a = 10;
// let b = 2;
// console.log(a<b)

// //for strings it compares the unicode value of each character of the string 
// // capital letters comes first followed by lowercase so small > capital

// let str1 = "school"
// let str2 = "book"

// console.log(str1 > str2)

// //strict equality - ===
// // others !==
// console.log('0'== 0)
// console.log('0' === 0) //compares both value and type

//for null and undefined

console.log(null <= 0)
console.log(null >= 0)
console.log(null == 0)

console.log()
console.log(undefined <= 0)
console.log(undefined >= 0)
console.log(undefined == 0)
console.log(Number(undefined))

console.log()
console.log(null==undefined)
console.log(null === undefined)