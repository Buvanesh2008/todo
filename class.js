//classes introduced in ES6 in 2015

// let user = {  //objects
//     name : 'Buvanesh',
//     age : 17,
// }

class Sample{
    #name; //#name is private class variable
    disp(){
        console.log(this.#name)
        console.log(this.age)
    }

    constructor(name,age){
        this.age = age;
        this.#name = name;
        console.log("Constructor")
    }
    get name(){ //getter method
        //this method is used to access the private variable outside the class
        return this.#name
    }
    set name(name){ //setter method
        this.#name = name
    }
}

let obj = new Sample("Buvanesh",17);

console.log(Sample)
console.log(obj)
console.log(typeof obj)

console.log(obj.name)
console.log(obj.age)

obj.name = "abcdef"
console.log(obj.name)