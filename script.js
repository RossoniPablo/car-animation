let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.getElementById('container')

let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider() {
  let itemActive = container.querySelector('.list .item.active')
  itemActive.classList.remove('active')

  let dotsActive = indicator.querySelector('ul li.active')
  dotsActive.classList.remove('active')
  dots[active].classList.add('active')

  indicator.querySelector('.number').innerText = '0' + (active + 1)
}


nextButton.onclick = () => {
  active = active + 1 > lastPosition ? 0 : active + 1
  setSlider()
  items[active].classList.add('active')

  list.style.setProperty('--calculation', 1)

}

prevButton.onclick = () => {
  active = active - 1 < firstPosition ? lastPosition : active - 1
  setSlider()
  items[active].classList.add('active')

  list.style.setProperty('--calculation', -1)
}


