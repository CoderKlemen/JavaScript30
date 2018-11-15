// get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');

let mouseDown = false;
let fullscreenFlag = false;

const HEIGHT = video.videoHeight;
const WIDTH = video.videoWidth;

console.log(video);
console.log(window.innerWidth);
console.log(window.innerHeight);

// build functions
function togglePlay() {
  if(video.paused) {
    video.play();
  }
  else {
    video.pause();
  }

  // you can write it this way
  /* 
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  */
  // or:
  /*
  video[video.paused ? 'play' : 'pause']();
  */
};

function toggleFullscreen() {
  console.log('fires');
  fullscreenFlag = !fullscreenFlag;
  if (fullscreenFlag) {
    video.requestFullscreen();
    // video.height = window.innerHeight;
    // video.width = window.innerWidth;
  }
  else {
    document.exitFullscreen();
    // video.height = HEIGHT;
    // video.width = WIDTH;
  }
  console.log(video.clientHeight);
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
  //console.log('update button');
}

function skip() {
  // this function can be used with any element that has a data-skip property
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  // sliders are named in such a way that the names correspond to the video properties ( volume, playbackRate )
  // console.log(this.name);
  // console.log(this.value);
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  // for standard addEventListener
  /*
  if (mouseDown) {
    video.currentTime = scrubTime;
  }
  */
}

// hook up to the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach( button => button.addEventListener('click', skip) );
ranges.forEach( range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach( range => range.addEventListener('mousemove', handleRangeUpdate));

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
// progress.addEventListener('mousemove', scrub);
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);
progress.addEventListener('mouseout', () => mouseDown = false);

fullscreen.addEventListener('click', toggleFullscreen);