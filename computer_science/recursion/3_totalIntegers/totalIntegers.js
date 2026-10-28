const totalIntegers = function (obj) {
  if (!Array.isArray(obj) && !isPureObject(obj)) {
    return;
  }
  if (Array.isArray(obj)) {
    if (purityCheck(obj)) {
      return obj.filter((item) => Number.isInteger(item)).length;
    } else {
      return (
        obj.filter((item) => Number.isInteger(item)).length +
        obj
          .filter((item) => Array.isArray(item) || isPureObject(item))
          .map((item) => totalIntegers(item))
          .reduce((acc, curr) => acc + curr, 0)
      );
    }
  } else if (isPureObject(obj)) {
    if (purityCheck(Object.values(obj))) {
      return Object.values(obj).filter((item) => Number.isInteger(item)).length;
    } else {
      return (
        Object.values(obj).filter((item) => Number.isInteger(item)).length +
        Object.values(obj)
          .filter((item) => Array.isArray(item) || isPureObject(item))
          .map((item) => totalIntegers(item))
          .reduce((acc, curr) => acc + curr, 0)
      );
    }
  }

  function purityCheck(arr) {
    let purity = true;
    arr.forEach((item) => {
      if (Array.isArray(item) || isPureObject(item)) {
        purity = false;
      }
    });
    return purity;
  }
  function isPureObject(input) {
    return (
      input !== null &&
      typeof input === "object" &&
      Object.getPrototypeOf(input).isPrototypeOf(Object)
    );
  }
};

// Do not edit below this line
module.exports = totalIntegers;
