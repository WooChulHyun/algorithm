var c = [1, 2, 4];
var d = [1, 3, 4];

var mergeTwoLists = function(l1, l2) {
    for (var i = 0; i < l2.length; i++) {
        l1.push(l2[i]);
    }
    var result = [];
    for (var i = 0; i < l1.length; i++) {
        var smallest = l1[0];
        for (var j = i + 1; j < l1.length; j++) {
            if (smallest > l1[j]) {
                smallest = l1[j];
            }
        }
        i = -1;
        result.push(smallest);
        var index = l1.indexOf(smallest);
        l1.splice(index, 1);
    }
    return result;
};

console.log(mergeTwoLists(c, d));
