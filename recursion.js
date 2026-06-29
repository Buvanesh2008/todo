//recursive functions

function fact(n){
    if(n == 0)
        return 1; //base case 
    else //
        return n*fact(n-1)//recursive call
}
console.log(fact(5))

function sum(n){
    if(n==1)
        return 1;
    else
        return n+sum(n-1)
}
console.log(sum(5))