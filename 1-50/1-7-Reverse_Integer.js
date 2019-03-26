var reverse = function(x) {
    var newArr = Math.abs(x)
        .toString()
        .split("")
        .reverse()
        .join("");

    if (newArr > Math.pow(2, 31) - 1) {
        return 0;
    } else if (newArr < Math.pow(-2, 31)) {
        return 0;
    } else {
        if (x < 0) {
            var result = parseInt(-+newArr);
            return result;
        } else {
            var result = parseInt(newArr);
            return result;
        }
    }
};
