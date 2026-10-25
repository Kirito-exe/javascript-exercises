const factorial = function(n) {
    if(n<0 || (typeof n !== "number") || n%1!==0){
        return;
    }
    if(n===1 || n===0){
        return 1;
    } else{
        return n*factorial(n-1)
    }
};

// Do not edit below this line
module.exports = factorial;