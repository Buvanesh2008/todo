//  big int - a number greater than 2^53-1 that is 9007199254740991 
// exceding it causes error
// issues in odd number but correct in even number
console.log(9007199254740991 + 1) //correct
console.log(9007199254740991 + 2) // wrong
console.log(9007199254740991 + 3) // correct

const limit = 9007199254740991n; // considers as big int
console.log(limit + 1n)
console.log(limit + 2n)
console.log(limit + 3n)