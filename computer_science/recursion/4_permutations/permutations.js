const permutations = function (arr) {
  let solutionArr = [];
  solutionArr.push(Array.from(arr)); //a copy
  if (arr.length === 0 || arr.length === 1) return solutionArr;
  if (arr.length === 2) {
    solutionArr.push(arr.toSorted((a, b) => b - a));
  } else {
    while (solutionArr.length < factorial(arr.length)) {
      taking2AtATime(solutionArr, arr);
    }
  }

  return solutionArr;
};
function taking2AtATime(solutionArr, arr) {
  for (let i = 1; i < arr.length; i++) {
    let sortArr = permutations([arr[i - 1], arr[i]])[1];
    for (let i of arr) {
      if (!sortArr.includes(i)) {
        let startIndex = parseInt(Math.random() * (arr.length));
        sortArr.splice(startIndex, 0, i);
      }
    }
    let addCond = true;
    for (let i of solutionArr) {
      if (arraysEqual(sortArr, i)) {
        addCond = false;
        break;
      }
    }
    if (addCond) solutionArr.push(sortArr);
  }
}
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function factorial(n) {
  if (n === 1) return 1;
  else return n * factorial(n - 1);
}
// Do not edit below this line
module.exports = permutations;
