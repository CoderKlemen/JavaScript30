const a = {
  buttonPlay: '',
  buttonMinus: '',
  buttonPlus: '',
  sliderVolume: '',
  sliderPlaybackRate: '',
  video: '',
  progressBar: '',
  progress: '', 
  flagPlay: false,
  clicked: false,
  
  addEventListeners: () => {
    a.buttonPlay.addEventListener('click', a.handleButtonPlay);
    a.buttonPlus.addEventListener('click', a.handleButtonPlus);
    a.buttonMinus.addEventListener('click', a.handleButtonMinus);
    a.sliderVolume.addEventListener('change', a.handleSliderVolume);
    a.sliderPlaybackRate.addEventListener('change', a.handleSliderPlaybackRate);
    a.progressBar.addEventListener('mousedown', a.handleProgressClick);
    a.progressBar.addEventListener('mouseup', a.handleProgressClick);
    a.progressBar.addEventListener('mousemove', a.handleProgressDrag);
  },
  
  getElements: () => {
    a.buttonPlay = document.getElementsByClassName('toggle')[0];
    a.buttonPlus = document.querySelector('button[data-skip="25"]');
    a.buttonMinus = document.querySelector('button[data-skip="-10"]');
    a.sliderVolume = document.querySelector('input[name="volume"]');
    a.sliderPlaybackRate = document.querySelector('input[name="playbackRate"]');
    a.video = document.getElementsByClassName('viewer')[0];
    a.progressBar = document.getElementsByClassName('progress')[0];
    a.progress = document.getElementsByClassName('progress__filled')[0].style.width;
    // console.log(a.buttonPlay);
    // console.log(a.buttonPlus);
    // console.log(a.buttonMinus);
    // console.log(a.sliderVolume);
    // console.log(a.sliderPlaybackRate);
    // console.log(a.video);
    console.log(a.progressBar);
    console.log(a.progress);
  },

  handleButtonPlay: () => {
    a.flagPlay = !a.flagPlay;
    if (a.flagPlay) {
      a.video.play();
    }
    else {
      a.video.pause();
    }
  },

  handleButtonPlus: () => {
    const currentTime = a.video.currentTime;
    const duration = a.video.duration;
    if (currentTime + 25 >= duration){
      a.video.currentTime = duration;
    }
    else {
      a.video.currentTime = currentTime + 25;
    }  
  },

  handleButtonMinus: () => {
    const currentTime = a.video.currentTime;
    if (currentTime - 10 <= 0){
      a.video.currentTime = 0;
    }
    else {
      a.video.currentTime = currentTime - 10;
    }  
  },

  handleSliderVolume: () => {
    const sliderValue = Number.parseFloat(a.sliderVolume.value);
    a.video.volume = sliderValue;
  },

  handleSliderPlaybackRate: () => {
    const sliderValue = Number.parseFloat(a.sliderPlaybackRate.value);
    a.video.playbackRate = sliderValue;
  },

  handleProgressClick: () => {
    
    a.clicked = !a.clicked;
    console.log(a.clicked);
  },

  handleProgressDrag: (e) => {
    console.log(e);
   /* if(a.clicked) {
      const x = e.clientX;
      const windowWidth = window.innerWidth;

      const width = Math.floor((x - windowWidth / 4) / a.progressBar.clientWidth  * 100);
      console.log(x);
      console.log(a.progressBar.clientWidth);
      console.log(width);
      a.progress.style.width = `${width}%`;
    }*/
    console.log(a.progress);
  },


  // set volume: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume

  start: () => {
    a.getElements();
    a.addEventListeners();
  }
}

a.start();


