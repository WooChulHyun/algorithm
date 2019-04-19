var num = 999;

function persistence(num) {
    var i = 0;
    while (num >= 10) {
        String(num)
            .split("")
            .reduce(function(prev, value) {
                num = Number(prev) * Number(value);
                return num;
            });
        i++;
    }

    return i;
}

console.log(persistence(num));
