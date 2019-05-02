var name = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
var r = 63;
var sum = 0;

function whoIsNext(names, r) {
    var i = 0;
    var sum = 0;
    while (r - sum > 2 ** i * names.length) {
        sum = sum + 2 ** i * names.length;
        i++;
    }
    return names[Math.ceil((r - sum) / 2 ** i) - 1];
}
console.log(whoIsNext(name, r));
