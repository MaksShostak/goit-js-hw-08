import Player from '@vimeo/player';
// var throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe, {
  id: 'vimeo-player',
  width: 640,
});

player.on('timeupdate', throttle(onSaveTimeupdate, 500));
player.on('ended', () => {
  localStorage.removeItem('videoplayer-current-time');
});
getCurrentTimePlay();

function onSaveTimeupdate(event) {
  console.log('початок');
  const time = event.seconds;
  console.log(event);
  if (event.duration - 0.55 < event.seconds) {
    localStorage.removeItem('videoplayer-current-time');
  } else {
    localStorage.setItem('videoplayer-current-time', time);
  }
}

function getCurrentTimePlay() {
  const currentTime = Number(localStorage.getItem('videoplayer-current-time'));
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
