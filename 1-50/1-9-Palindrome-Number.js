var isPalindrome = function(x) {
    var newArr = x
        .toString()
        .split("")
        .reverse()
        .join("");
    console.log(newArr);

    if (x == newArr) {
        return true;
    } else {
        return false;
    }
};
