var arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];

function dirReduc(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "NORTH") {
            if (arr[i + 1] === "SOUTH") {
                arr.splice(i, 2);
                i = i - 2;
                console.log(arr);
                console.log(i);
            }
        } else if (arr[i] === "SOUTH") {
            if (arr[i + 1] === "NORTH") {
                arr.splice(i, 2);
                i = i - 2;
                console.log(arr);
                console.log(i);
            }
        } else if (arr[i] === "WEST") {
            if (arr[i + 1] === "EAST") {
                arr.splice(i, 2);
                i = i - 2;
                console.log(arr);
                console.log(i);
            }
        } else if (arr[i] === "EAST") {
            if (arr[i + 1] === "WEST") {
                arr.splice(i, 2);
                i = i - 2;
                console.log(arr);
                console.log(i);
            }
        }
    }
    return arr;
}

console.log(dirReduc(arr));
