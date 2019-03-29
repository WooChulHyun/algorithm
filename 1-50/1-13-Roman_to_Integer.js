var a = "MCMXCIV";

var romanToInt = function(s) {
    var romanNum = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    var result = 0;
    var newArr = s.split("");
    console.log(newArr);

    for (var i = 0; i < newArr.length; i++) {
        var currentNum = romanNum[newArr[i]];
        var nextNum = romanNum[newArr[i + 1]];
        if (currentNum === undefined) {
            return "null";
        } else if (currentNum < nextNum) {
            result = result + nextNum - currentNum;
            i++;
        } else {
            result = result + currentNum;
        }
    }
    return result;
};

console.log(romanToInt(a));
