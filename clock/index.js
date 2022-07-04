const clockHour = document.querySelector('.clock-hour')
const clockMin = document.querySelector('.clock-min')
const clockSec = document.querySelector('.clock-sec')

setInterval(()=>{
  let day  = new Date()
  let hour = day.getHours()
  let min = day.getMinutes()
  let sec = day.getSeconds()
  /*
    hr = 360/12 = 30
    sec , min = 360/60 = 6
  */ 
  let hrRotate = (30 * hour) + (0.5 * min)
  let minRotate = (6 * min)
  let secRotate = (6 * sec)

  clockHour.style.transform = 
  `translate(-50%,-100%) rotate(${hrRotate}deg)`
  
  clockMin.style.transform = 
  `translate(-50%,-100%) rotate(${minRotate}deg)`

  clockSec.style.transform =
  `translate(-50%,-85%) rotate(${secRotate}deg)`

},1000)

