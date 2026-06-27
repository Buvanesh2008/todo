//objects - dictionary in python
//objects - key value pairs

let obj = {
    'my name' : "Buvanesh",
    age : 17,
    height : 180,
    hello(){
        return this.age; //this keyword is used by hello() to use the value inside the object
        // note that it uses only the value inside the current object not outside
        // we can also use obj.age;
    }
}
console.log()
obj.hello()
console.log(obj["my name"])
console.log(obj.age)
delete obj.height
obj['favColor'] = "Blue"
console.log(obj)

obj.favColor = "Red"
console.log(obj)

//in keyword

console.log('age' in obj) //in keyword is used to check whether a property is in the objects
//returns true or false
console.log('dob' in obj)

for(key in obj){
    console.log( key , '-' , obj[key])
}

//objects create reference that is if we create a object and assign it to another object
// if we change one object , then  the change is reflected in both objects
//example

let a = {
    name : "Buvanesh",
    age : 17
}
let b = a;
console.log(a,b)

a.age = 20;
console.log(a,b)

//but if we assign something
//example
b={}
console.log(a,b)

//note
//assigning an oblect to a const keyword does allow to change individual value but the total object

const user = {
    name : 'Babu',
    age : 23,
}
user.age = 17 //allows to change individual values
// user = {height : 176}; this throws error
//that is user is considered as a single variable
console.log(user.age)
