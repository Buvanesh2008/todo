//arrays - list of values
let arr = new Array(); // array initialization
// arr = ['Apple', null , undefined , true , 17 , {name : 'buvanesh', age : 17}, function add(a,b){return a+b}] //valid array declaration

arr = ['Apple', 'Mango' , 'orange', 'banana']
arr.push("grapes") // similar to arr[4] = "grapes"
//push() adds elements at the end
console.log(arr)

arr.unshift("plum")
//unshift adds element at the beginning
console.log(arr)

console.log(arr.pop())
console.log(arr)
//pop() removes the last element and returns it

console.log(arr.shift())
console.log(arr)
//shift() removes the first element and returns it

for(i of arr){
    console.log(i)
}
for(i in arr){ // so slower
    console.log(arr[i])
}
//alternative
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}
//arr.length returns the length of arr

let int = new Array(1,2,3,4,5,6)
console.log(int)