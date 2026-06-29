class Animal{ //parent class
    legs;
    tail;

    constructor(legs,tail){
        this.legs = legs;
        this.tail = tail;
    }
    disp(){
        console.log('Animal')
        console.log(this.legs)
        console.log(this.tail)
    }
}

class Human extends Animal{ //inheriting from class Animal
    //extends keyword is used to inherit

    nationality;

    constructor(legs,tail,nationality){
        super(legs,tail) // calling the constructor of parent class using he super keyword
        //calling the parent's constructor because legs and tail are property of parent
        this.nationality = nationality;
    }

    disp(){
        console.log("Human")
        console.log(this.legs)
        console.log(this.tail)
        console.log(this.nationality)
    }

}

//note
//during inheritance parent class' constructor must be called before child's

let obj1 = new Animal(4 , true)


let obj2 = new Human(2,false,"Indian")
obj2.disp()
//overriding - calls the disp() from the chile ignoring thr parent's