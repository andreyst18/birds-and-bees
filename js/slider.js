const prevBtn = document.querySelector('.events__prev')
const nextBtn = document.querySelector('.events__next')
const gallery = document.querySelector('.slider-events__gallery')
const slide_1 = document.querySelector('.slider__item-red'),
      slide_2 = document.querySelector('.slider__item-green'),
      slide_3 = document.querySelector('.slider__item-blue'),
      slide_4 = document.querySelector('.slider__item-yellow'),
      slide_5 = document.querySelector('.slider__item-magenta')
const slides = [ slide_1, slide_2, slide_3, slide_4, slide_5 ]

const eventsThumb = document.querySelector('.events__thumb')

let current,
    shift,
    isNext
    

window.onload = () => {
  current = 0
  shift = 0
}

prevBtn.addEventListener('click', () => {
  
  if (current > 0) {
    current--
    shift += 359 + 31
    move(gallery, shift, false)
  }
})

nextBtn.addEventListener('click', () => {
  
  if (current < slides.length - 1) {
    current++
    shift -= 359 + 31
    move(gallery, shift, true)
  }
})

function move(el, shift, isNext) {
  el.style.transform = `translateX(` + shift + `px)`
  el.style.transition = 'transform 1s'
  // if (isNext) {
  //   eventsThumb.style.transform = `translateX(` + (-1) * shift + `px)`
  // } else {
  //   eventsThumb.style.transform = `translateX(` + shift + `px)`
  // }
  // eventsThumb.style.transition = 'transform 1s'
}


console.log(current)