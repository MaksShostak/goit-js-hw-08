import Player from '@vimeo/player';
// var throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe, {
  id: 'vimeo-player',
  width: 640,
});

player.on('timeupdate', throttle(onSaveTimeupdate, 500));

getCurrentTimePlay();

function onSaveTimeupdate(event) {
  const time = event.seconds;
  localStorage.setItem('videoplayer-current-time', time);
}

function getCurrentTimePlay() {
  const currentTime = Number(localStorage.getItem('videoplayer-current-time'));
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
