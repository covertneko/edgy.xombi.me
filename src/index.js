import {Actor, Simulate, Input, Track, calc} from 'popmotion';

(() => {
  const KEY_SPACE = 32
  var audio = new Audio('media/wakemeup.ogg')

  audio.loop = true

  // Pause/play audio with space
  window.addEventListener('keydown', (event) => {
    if (event.keyCode == KEY_SPACE) {
      (audio.paused) ?
        audio.play() :
        audio.pause()
    }
  })

  // Autoplay that shit
  audio.play()

  // Animation stuff.
  // TODO: Better comments

  var pageActor = new Actor({
    element: '.background'
  })

  var shakeData = new Input({
    shakeX: 2500,
    shakeY: 2500
  })

  var shakeSource = new Track({
    smooth: 50,
    direct: true,
    values: {
      x: {
        watch: 'shakeX',
        mapFrom: [0, 5000],
        mapTo: [-100, 100]
      },
      y: {
        watch: 'shakeY',
        mapFrom: [0, 5000],
        mapTo: [-100, 100]
      }
    }
  })

  var springBack = new Simulate({
    simulate: 'spring',
    friction: 0.15,
    spring: 300,
    values: {
      x: {
        to: 0
      },
      y: {
        to: 0
      }
    }
  })

  setInterval(() => {
    shakeData.update({
      shakeX: calc.random(0, 5000),
      shakeY: calc.random(0, 5000)
    })
  }, 40)

  pageActor.start(shakeSource.extend({
    onComplete: () => {
      this.start(springBack)
    }
  }), shakeData)
}) ()
