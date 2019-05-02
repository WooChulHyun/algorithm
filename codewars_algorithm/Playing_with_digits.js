var n = 46288;
var p = 3;

function digPow(n, p) {
    var count = p - 1;
    var result = String(n)
        .split("")
        .reduce(function(x, y) {
            count = count + 1;
            return x + Math.pow(y, count);
        }, 0);
    return result % n === 0 ? result / n : -1;
}

console.log(digPow(n, p));
