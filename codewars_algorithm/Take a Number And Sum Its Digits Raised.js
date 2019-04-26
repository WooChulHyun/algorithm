var a = 80;
var b = 90;

function sumDigPow(a, b) {
    var result = [];

    for (var i = a; i <= b; i++) {
        var count = 0;
        if (
            String(a)
                .split("")
                .reduce(function(x, y) {
                    count = count + 1;
                    return x + Math.pow(y, count);
                }, 0) === a
        ) {
            result.push(a);
        }
        a++;
    }
    return result;
}

console.log(sumDigPow(a, b));
