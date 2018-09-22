const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
// console.log(checkboxes)

let lastChecked

function handleCheck(e) {
  // console.log(checkboxes)
  let inBetween = false
  // when shiftkey is down and this is checked
  if (e.shiftKey && this.checked) {
    // console.log(checkboxes)
    checkboxes.forEach(checkbox => {
      console.log(checkbox)
      if (checkbox === this || checkbox === lastChecked) {
        // when checkbox meets this or lastChecked
        // inBetween turns to be the opposite boulean
        inBetween = !inBetween
        console.log('Starting to check them inbetween')
      }

      if (inBetween) {
        console.log('inBetween = true')
        checkbox.checked = true
      }
    })
  }

  lastChecked = this
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
