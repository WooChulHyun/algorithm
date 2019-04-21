var ints = [2, 5, 2, 3, 7, 5];
var s = 10;

var sum_pairs = function(ints, s) {
    var newArr = [];
    var result = [];
    for (var i = 0; i < ints.length; i++) {
        console.log(ints[i]);
        if (newArr.includes(s - ints[i]) && ints.indexOf(s - ints[i]) !== -1) {
            console.log(ints[i]);
            result.push(s - ints[i], ints[i]);
            console.log(result);
            return result;
        } else if (newArr.indexOf(ints[i]) === -1) {
            newArr.push(ints[i]);
            console.log(newArr);
        }
    }
};

console.log(sum_pairs(ints, s));
