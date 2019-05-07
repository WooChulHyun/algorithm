var strarr = ["zone", "abigail", "theta", "form", "libe", "zas"];
var k = -2;

function longestConsec(strarr, k) {
    let totalLength = 0;
    let result = "";
    if (k < 0) return "";
    else {
        for (let i = 0; i <= strarr.length - k; i++) {
            let resultLength = strarr.slice(i, i + k).join("").length;
            console.log("totalLength " + totalLength);
            if (totalLength < resultLength) {
                totalLength = resultLength;
                result = strarr.slice(i, i + k).join("");
            }
        }
        return result;
    }
}

console.log(longestConsec(strarr, k));
