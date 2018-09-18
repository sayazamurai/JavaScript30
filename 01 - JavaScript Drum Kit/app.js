function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  // document.querySelector means $()
  // const ○○ = $(.class)
  if (!audio) return // stop the function from running all together
  // if number doesn't exist among audio => return
  audio.currentTime = 0 //rewind to the start
  audio.play()
  key.classList.add('playing')
  // JavaScript: document.querySelector('.audio').classList.add('playing)
  // jQuery: $('.audio').addClass('playing')
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return // skip if it's not a transform
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
// console.log(keys)
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)
// addEventListener means, "add 'event listener' function to something.
// listen to the event and run a function"

// Do something on a click
// jQuery: $(...).click(function() { ... })
// jQuery: $(...).on('click', function() { ... })

// Do something on a key press
// jQuery: $(window).on('keydown', function() { ... })
// JavaScript: window.addEventListener('keydown', function() { ... })
