//error handling
//using try and catch

let a = undefined;

try{

console.log(a.name)//error statement
}
catch(error){ // here error has the type of error occured
    console.log("Error has occured")
    //throw new Error("New error") // user defined error
}

//errors in js
// type error
// syntax error

let arr = new Array()
try{
    console.log(arr[9])
}
catch(error){
    console.log(error)
}
