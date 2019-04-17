var song = "WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB";

function songDecoder(song) {
    return song
        .split("WUB")
        .filter(function(word) {
            return word !== "";
        })
        .join(" ");
}

console.log(songDecoder(song));
