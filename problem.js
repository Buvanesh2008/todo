//first
let num = 0;
if(num>0)
    console.log("positive");
else if(num<0)
    console.log("negative")
else
    console.log("zero")



//condition for leapyear
/*
1) div by 4 but by 100
2) div by 400
*/

let year = 2000;
if(year%4 == 0){
    if(year%100 == 0){
        if(year%400 ==0)
            console.log("Leap year")
        else
            console.log("Not a leap year")
    }
    else
        console.log("Leap year")
}
else
    console.log("Not a leap year")