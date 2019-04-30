var morseCode = ".... . -.--   .--- ..- -.. .";

decodeMorse = function(morseCode) {
    var newArr = morseCode.split("   ");
    var word = [];
    for (var i = 0; i < newArr.length; i++) {
        var spelling = newArr[i].split(" ").map(function(morse) {
            return MORSE_CODE[morse];
        });
        word.push(spelling.join(""));
    }
    return word.join(" ").trim();
};

console.log(decodeMorse(morseCode));
