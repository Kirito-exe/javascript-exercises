const pascal = function(n,result=[1],index=1) {
    if(index===n) return result;
    let newResult = [];
    result.push(0);
    result.unshift(0);
    for(let i =1;i<result.length;i++){
      newResult.push(result[i-1]+result[i]);
    }
    return pascal(n,newResult,index+1);
};
  
// Do not edit below this line
module.exports = pascal;
