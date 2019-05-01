var integers = [2, 6, 8, 2, -66, 34, -35, 66, 700, 1002, -84, 10, 4];

function findOutlier(integers) {
    var count = 0;
    var result;
    for (var i = 0; i < 3; i++) {
        if (integers[i] % 2 === 0) count = count + 1;
    }
    if (count === 2 || count === 3) {
        result = integers.filter(function(a) {
            return a % 2 === 1 || a % 2 === -1;
        });
    } else {
        result = integers.filter(function(a) {
            return a % 2 === 0;
        });
    }
    return Number(result);
}

console.log(findOutlier(integers));
