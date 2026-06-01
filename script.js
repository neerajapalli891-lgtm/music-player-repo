const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const songs = [
{
title:"Song 2",
artist:"Artist 2",
file:"song2.mp3"
},
{
title:"Song 1",
artist:"Artist 1",
file:"song1.mp3"
}
];

let currentSong = 0;

function loadSong(index){
    audio.src = songs[index].file;
    document.getElementById("title").innerText =
    songs[index].title;
    document.getElementById("artist").innerText =
    songs[index].artist;
}

loadSong(currentSong);

function playPause(){
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
}

function nextSong(){
    currentSong++;
    if(currentSong >= songs.length){
        currentSong = 0;
    }
    loadSong(currentSong);
    audio.play();
}

function prevSong(){
    currentSong--;
    if(currentSong < 0){
        currentSong = songs.length - 1;
    }
    loadSong(currentSong);
    audio.play();
}

audio.addEventListener("timeupdate", () => {
    progress.value =
    (audio.currentTime / audio.duration) * 100 || 0;
});

progress.addEventListener("input", () => {
    audio.currentTime =
    (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

audio.addEventListener("ended", () => {
    nextSong(); // Autoplay
});
