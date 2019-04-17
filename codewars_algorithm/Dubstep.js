var song = "WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB";

function songDecoder(song) {
    var songArr = song.split("");
    for (var i = 0; i < songArr.length; i++) {
        if (songArr[i] === "W") {
            if (songArr[i + 1] === "U" && songArr[i + 2] === "B") {
                songArr.splice(i, 3, " ");
                i = i - 3;
            }
        }
    }
    for (var j = 0; j < songArr.length; j++) {
        if (songArr[j] === " " && songArr[j + 1] === " ") {
            songArr.splice(j, 1);
            j--;
        }
    }
    return songArr.join("").trim();
}

console.log(songDecoder(song));
