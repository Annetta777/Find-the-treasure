const map = document.querySelector('#map')
const distance = document.querySelector('#distance')
const paragraph = document.querySelector('.paragraph')
//const colors = ['#E6E6FA', '#D8BFD8', '#DDA0DD', '#FFFFE0', '#FFFACD', '#EEE8AA']
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

/*function getRandomColor() {
  const index = Math.floor(Math.random() *  colors.length)
  return  colors[index]
  }*/

function click (event) {
  let distanceClick = getDistance(event, target)
 // paragraph.style.background = getRandomColor()
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
    return 'Обожжешься!'
  } else if ( distanceClick < 40) {
      return 'Очень горячо'
    } else if ( distanceClick < 60) {
      return 'Горячо'
    } else if ( distanceClick < 100) {
      return 'Холодно'
    } else if ( distanceClick < 160) {
      return 'Очень холодно'
    } else  if (distanceClick < 180) {
      return 'Замерзнешь!'
    }
    else {
      return 'Колотун!'
    }
  }