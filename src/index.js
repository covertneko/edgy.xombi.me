import {Actor, Tween} from 'popmotion';

(() => {
  const KEY_SPACE = 32
  var audio = new Audio('media/wakemeup.ogg')

  audio.loop = true

  window.addEventListener('keydown', (event) => {
    if (event.keyCode == KEY_SPACE) {
      (audio.paused) ?
        audio.play() :
        audio.pause()
    }
  })


  var bodyActor = new Actor({
    element: 'body',
    onUpdate: (output) => {
      // console.log(output)
    }
  })

  var foo = new Tween({
    yoyo: true,
    values: {
      x: {
        current: -100,
        to: 100
      }
    }
  })

  bodyActor.start(foo.extend({
    duration: 200,
    ease: 'backInOut'
  }))
}) ()
