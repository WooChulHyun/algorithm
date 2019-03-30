var a = "()[]{}";

var isValid = function(s) {
    var openBr = ["(", "[", "{"];
    var closeBr = [")", "]", "}"];
    var newArr = s.split("");
    console.log(newArr);

    for (var i = 0; i < newArr.length; i++) {
        if (
            newArr[i] !== openBr[0] &&
            newArr[i] !== openBr[1] &&
            newArr[i] !== openBr[2]
        ) {
            return false;
        } else {
            var openBracket = newArr[i];
            console.log(openBracket);
            var newIndex;
            for (var j = 0; j < openBr.length; j++) {
                if (openBracket === openBr[j]) {
                    newIndex = j;
                    console.log(newIndex);
                }
            }
            console.log(newArr[i + 1]);
            console.log(closeBr[newIndex]);
            if (newArr[i + 1] === closeBr[newIndex]) {
                newArr.splice(i, 2);
                i = -1;
                console.log(newArr);
            }
        }
    }
    if (newArr.length === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isValid(a));
