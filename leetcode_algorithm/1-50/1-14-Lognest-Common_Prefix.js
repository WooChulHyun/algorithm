var a = ["", ""];
console.log(a[0]);

var longestCommonPrefix = function(strs) {
    var result = "";
    var shortestWord = strs[0];
    console.log(shortestWord);
    for (var a = 1; a < strs.length; a++) {
        if (shortestWord.length > strs[a].length) {
            shortestWord = strs[a];
        }
    }
    console.log(shortestWord);
    console.log(strs[0][0]);

    if (strs.length === 0) {
        return result;
    } else if (strs.length === 1) {
        return strs[0];
    } else if (shortestWord === "") {
        return result;
    } else {
        for (var i = 0; i < shortestWord.length; i++) {
            var words = strs[0][i];
            console.log(words);
            console.log(i);

            for (var j = 1; j < strs.length; ) {
                var compareWord = strs[j][i];
                console.log(compareWord);
                if (words === compareWord) {
                    console.log(compareWord);
                    j++;
                    if (j === strs.length) {
                        result = result + words;
                        if (i == shortestWord.length - 1) {
                            return result;
                        }
                    }
                } else {
                    console.log(result);
                    return result;
                }
            }
        }
    }
};

console.log(longestCommonPrefix(a));
