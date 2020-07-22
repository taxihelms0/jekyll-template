let player = document.getElementById("audio_player");

function playSomeAudio(post) {
    console.log(post);
    let mediaFile = document.getElementById(post + " media").innerHTML;
    let source = document.getElementById("audioSource");
    source.src = mediaFile;
    console.log(source.src);
    if (player.className != "show") {
        player.className = "show";
        console.log("show");
    }
    // source = ;
    // console.log(source);
}
