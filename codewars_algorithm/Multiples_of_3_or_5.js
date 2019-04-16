var nums = 19;

var solution = function(nums) {
    var result = 0;
    for (var i = 0; i < nums; i++) {
        if (i % 5 === 0 || i % 3 === 0) {
            result = result + i;
        }
    }
    return result;
};

console.log(solution(nums));
