var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var maxSequence = function(arr) {
    var result = 0;
    var newArr;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr = arr.slice(i);
            console.log(newArr);
            if (resultFunction(newArr) > result) {
                result = resultFunction(newArr);
                console.log("result: ", result);
            }
        }
    }
    return result;
};

var resultFunction = function(newArr) {
    var temResult = newArr[0];
    newArr.reduce(function(prev, curr) {
        var c = prev + curr;
        if (c > temResult) {
            temResult = c;
        }
        console.log("C: ", c);
        console.log("TemResult: ", temResult);
        return c;
    }, 0);
    return temResult;
};

console.log(maxSequence(arr));
