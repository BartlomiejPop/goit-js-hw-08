import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on(
  'timeupdate',
  throttle(
    (saveCurrentTime = e => {
      const savedTime = localStorage.setItem(
        'videoplayer-current-time',
        e.seconds
      );
     
    }),
    1000
  )
);
