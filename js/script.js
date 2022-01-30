const prevBtnMain = document.querySelector('.nav-btns__prev_main')
const nextBtnMain = document.querySelector('.nav-btns__next_main')
const mainPageTitle = document.querySelector('.main-page__title')
const mainPageSubTitle = document.querySelector('.main-page__subtitle')
const sheduleDaysFirst = document.querySelector('.shedule__days_first')
const sheduleTimeFirst = document.querySelector('.shedule__time_first')
const sheduleDaysSecond = document.querySelector('.shedule__days_second')
const sheduleTimeSecond = document.querySelector('.shedule__time_second')
const mainBackground = document.querySelector('.bg-picture')

const places = [
  {
    picture: 'img/restaurant.jpg',
    title: 'Ресторан',
    subtitle: 'Идеальное место для вашего праздника!',
    sheduleFirstPart: {
      sheduleDays: 'ПН — ЧТ',
      sheduleTime: '10:00 — 00:00'
    },
    sheduleSecondPart: {
      sheduleDays: 'ПТ — СБ',
      sheduleTime: 'Круглосуточно'
    }
  },
  {
    picture: 'img/karaoke.jpg',
    title: 'Караоке-бар',
    subtitle: 'Идеальное место для шумной компании!',
    sheduleFirstPart: {
      sheduleDays: 'ПТ — СБ',
      sheduleTime: 'с 21:00'
    },
    sheduleSecondPart: {
      sheduleDays: '',
      sheduleTime: ''
    }
  }
]

const eventsNext = document.querySelector('.events__next'),
      eventsPrev = document.querySelector('.events__prev'),
      lastReportsNext = document.querySelector('.last-reports__next'),
      lastReportsPrev = document.querySelector('.last-reports__prev')



let currentPlace = 0
let isNextMainPlace

prevBtnMain.addEventListener('click', () => { 
  isNextMainPlace = false
  currentPlace = fillMainSection(currentPlace, isNextMainPlace) 
})

nextBtnMain.addEventListener('click', () => { 
  isNextMainPlace = true
  currentPlace = fillMainSection(currentPlace, isNextMainPlace) 
})

function fillMainSection(index, direction) {
  if (index > 0 && !direction) {
    index--
  } else if ((index < places.length - 1) && direction) {
    index++
  }
  
  mainPageTitle.innerHTML = places[index].title
  mainPageSubTitle.innerHTML = places[index].subtitle
  sheduleDaysFirst.innerHTML = places[index].sheduleFirstPart.sheduleDays
  sheduleTimeFirst.innerHTML = places[index].sheduleFirstPart.sheduleTime
  sheduleDaysSecond.innerHTML = places[index].sheduleSecondPart.sheduleDays
  sheduleTimeSecond.innerHTML = places[index].sheduleSecondPart.sheduleTime
  mainBackground.setAttribute('src', places[index].picture)
  
        
  return index    
}

//-----------------Events Swiper--------------------//


const slider_1 = new Swiper('.slider_1nt', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  spaceBetween: 30,
  slidesPerView: 4,
  // watchSlidesProgress: true,
  // initialSlide: 1
});

eventsNext.addEventListener('click', () => {
  slider_1.slideNext(1000)
})

eventsPrev.addEventListener('click', () => {
  slider_1.slidePrev(1000)
})

//----------------last report-----------------//

const slider_2 = new Swiper('.slider_2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // spaceBetween: 30,
  slidesPerView: 3,
});

lastReportsNext.addEventListener('click', () => {
  console.log('next')
  slider_2.slideNext(1000)
})

lastReportsPrev.addEventListener('click', () => {
  console.log('prev')
  slider_2.slidePrev(1000)
})