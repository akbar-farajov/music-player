const progress = document.getElementById('progress');
const audio = document.getElementById('song');
const ctrlIcon = document.getElementById('control-icon');
const songcrrntTime = document.getElementById('current-time');
const songDuration = document.getElementById('duration');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const title = document.getElementById('title');
const musician = document.getElementById('songer');
const cover = document.querySelector('.music-img');
const musicImg = document.querySelector('.music-img');

//songs
const songs = ['all-eyez-on-me', 'goosebumps', 'middle-child', 'venom'];
const songers = ['2pac', 'travis-scott', 'j-cole', 'eminem'];

let songIndex = 0;

loadSong(songs[songIndex]);
loadSonger(songers[songIndex]);

//Update song details
function loadSong(song) {
    title.innerText = song;
    cover.src = `media/images/${song}.jpg`;
    audio.src = `media/musics/${song}.mp3`;
}

function loadSonger(songer) {
    musician.innerText = songer;
}

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function pauseSong() {
    audio.pause();
    ctrlIcon.classList.remove('fa-pause');
    ctrlIcon.classList.add('fa-play');
    musicImg.classList.remove('play');
}

function playSong() {
    audio.play();
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
    musicImg.classList.add('play');
}

function playPause() {
    if (ctrlIcon.classList.contains('fa-pause')) {
        pauseSong();
    } else {
        playSong();
    }
}

// Change song events
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    loadSonger(songers[songIndex]);
    musicImg.classList.add('play');
    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    loadSonger(songers[songIndex]);
    musicImg.classList.add('play');
    playSong();
}

if (audio.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
        songcrrntTime.innerText = (progress.value / 60).toFixed(2);
        songDuration.innerText = (song.duration / 60).toFixed(2);
    }, 500);
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
    musicImg.classList.add('play');
};
