const video = document.getElementById("video");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const progressBar = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//Play and pause video
function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//Update play/pause button icon
function updatePlayIcon() {
    if(video.paused) {
        playBtn.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        playBtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

//Update progress bar with timestamp
function updateProgressBar() {
    progressBar.value = (video.currentTime/video.duration) * 100;

    //Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10) {
        mins = '0' + String(mins);
    }
    //Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;

}

//Set/Update the progress bar when there is a change in timestamp
function setVideoProgress() {
    video.currentTime = (+progressBar.value * video.duration) / 100;
}

//Stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}


//Add event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgressBar);

playBtn.addEventListener('click', toggleVideoStatus);

stopBtn.addEventListener('click', stopVideo);

progressBar.addEventListener('change', setVideoProgress);

