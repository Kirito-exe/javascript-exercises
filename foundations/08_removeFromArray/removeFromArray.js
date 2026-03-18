const removeFromArray = function(arr,...args) {
    function inclusion(num){
        return !args.includes(num);
    }
    const newarry =arr.filter(inclusion);
    return newarry;
}


// Do not edit below this line
module.exports = removeFromArray;
