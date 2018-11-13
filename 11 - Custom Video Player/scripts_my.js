const a = {
  buttonPlay: '',
  flagPlay: false,
  
  addEventListeners: () => {
    a.buttonPlay.addEventListener('click', a.handleButtonPlay);
  },
  
  getElements: () => {
    // a.buttonPlay = document.querySelector('.toggle button[type="submit"]');
    a.buttonPlay = document.getElementsByClassName('toggle')[0];
    // console.log(a.buttonPlay);
  },

  handleButtonPlay: (e) => {
    // console.log(e);
    a.flagPlay = !a.flagPlay;

    // pause: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause

    // play: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play

  },

  // set the time: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime
  // slider, forward, backward


  // set volume: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume

  start: () => {
    a.getElements();
    a.addEventListeners();
  }
}

a.start();


