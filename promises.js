//promise 
//async and await is used to handle a promise

let isHalwaThere = false;

function waitInQueue(){
    return new Promise((resolve , reject) => { //definition of promise
        setTimeout(() =>{ 
            if(isHalwaThere){
                resolve("Buy half kg halwa")
            }
            else{
                reject("Halwa finished")
            }
        } , 1000) //here the function waits for 1000ms (1s) before execution
    })
}

async function buyHalwa(){ //handling promise
    // waitInQueue().then((message) =>{ //positive outcome
    //     console.log(message)
    // })
    // .catch((error) =>{ //negative outcome
    //     console.log(error)
    // })
    // .finally(() =>{ //final outcome
    //     console.log("Go home")
    // })


    try{
        let result = await waitInQueue()
        console.log(result)
    }    
    catch(error){
        console.log("Halwa finished")
    }
}
   


buyHalwa()



