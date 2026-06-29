function Name(name){ //constructor
    //background process ( implicit )
    //this = {};
    this.name = name;
    //return this;

    this.age = function(){ //anonymous functions
        return 17;
    }
}
let a,b;
a = new Name("Buvanesh")
b = new Name("Gayathri")
console.log(a,a.age())
console.log(b,b.age())

function Num(){
    this.a = 10;
    this.b = 15;
    this.add = function(num){
        return this.a + this.b + num
    }
}

let obj = new Num()
console.log(obj.add(20))