// const vimeoPlayer = require('@vimeo/player');
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

// Запис часу перегляду в змінну

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
//Добавляєм бібліотеку
var throttle = require('lodash.throttle');
const lodashOnPlay = throttle(onPlay, [(wait = 1000)]);

player.on('timeupdate', lodashOnPlay);

//Відтворення з записаного часу

if (localStorage.getItem('videoplayer-current-time')) {
  player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}
