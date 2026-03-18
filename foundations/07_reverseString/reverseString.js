const reverseString = function(word) {
    let reverse='';
    if (!word) return "";
    let i = word.length;
    do {
        reverse += word[i-1]
        i--
    } while (i>0)
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
