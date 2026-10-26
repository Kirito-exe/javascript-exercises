const contains = function (obj, search) {
  if (obj === search || (Number.isNaN(search) && Number.isNaN(obj))) {
    return true;
  } else if (!isPureObject(obj)) {
    return;
  } else {
    let keys = Object.keys(obj);
    for (let i of keys) {
      if (contains(obj[i], search) === true) return true;
    }
  }
  return false;
  function isPureObject(input) {
    return (
      null !== input &&
      typeof input === "object" &&
      Object.getPrototypeOf(input).isPrototypeOf(Object)
    );
  }
};

/*
wrong model:
issue was when i kept returning nothing after the pure object check, it was cancelling the previous function's
loop too since i was not checking and i was just returning from the loop which cancelled the loop hence the loop died

change implemented:
the loop checks the case if the returned statement runs true for any of the cases only then it returns true

wrong model:
contains(object,44)
  contains(data,44)
    contains("e",44)
    returns   (since e aka duplicate is not a pure object)
  return
return
*/
// Do not edit below this line
module.exports = contains;
