(function() {
  const KEY_SPACE = 32
  var audio = new Audio('media/wakemeup.ogg')

  audio.loop = true

  window.addEventListener('keydown', function(event) {
    if (event.keyCode == KEY_SPACE) {
      (audio.paused) ?
        audio.play() :
        audio.pause()
    }
  })
}) ()
