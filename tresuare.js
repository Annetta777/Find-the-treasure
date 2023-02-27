const map = document.querySelector('#map')
const distance = document.querySelector('#distance')
const paragraph = document.querySelector('.paragraph')
let width = 400
let height = 400
let clicks = 0

let target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
}

map.addEventListener('click', click)

function getRandomNumber (size) {
  return Math.floor(Math.random() * size)
}
function click (event) {
  let distanceClick = getDistance(event, target)
  distance.innerHTML = getDistanceHint(distanceClick)
  clicks++
}

function getDistance(event, target) {
  let disX = event.offsetX - target.x
  let disY = event.offsetY - target.y
  return Math.sqrt((disX * disX) + (disY * disY))
}

function getDistanceHint(distanceClick) {
  if (distanceClick < 25) {
    alert('Клад найден! Сделано кликов: ' + clicks)
    clicks = 0
    location.reload()
  }
  else if (distanceClick < 35) {
    paragraph.style.backgroundColor = '#FF6374'
    return 'Обожжешься!'
  } else if ( distanceClick < 40) {
    paragraph.style.backgroundColor = '#FF7F50'
      return 'Очень горячо'
    } else if ( distanceClick < 60) {
      paragraph.style.backgroundColor = '#FFA07A'
      return 'Горячо'
    } else if ( distanceClick < 100) {
      paragraph.style.backgroundColor = '#E0FFFF'
      return 'Холодно'
    } else if ( distanceClick < 160) {
      paragraph.style.backgroundColor = '#B0E0E6'
      return 'Очень холодно'
    } else  if (distanceClick < 180) {
      paragraph.style.backgroundColor = '#AFEEEE'
      return 'Замерзнешь!'
    }
    else {
      paragraph.style.backgroundColor = '#00FFFF'
      return 'Колотун!'
    }
  }
