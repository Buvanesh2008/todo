//json - javascript object notation
let user = {
    name : "Buvanesh",
    age : 17,
}

let a = JSON.stringify(user)
console.log(a)
console.log(typeof a)

let str = '{"name " : "Buvanesh" , "age" : 17}';

let b = JSON.parse(str)
console.log(b)
console.log(typeof b)
