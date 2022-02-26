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

const asideItems = document.querySelectorAll('.aside__item')
const asidePanel = document.querySelector('.aside')
const asideTitle = document.querySelectorAll('.aside__title')
const placeName = document.querySelector('.chapter-title')
const mainMenu = document.querySelectorAll('.divisions__item')
const outerLinksTitle = document.querySelectorAll('.outer-links__title')

let currentPlace = 0
let isNextMainPlace
//let currentItem = getCurrentPlace() //меню выбора места


//--------------------------------------------------------------
/*
prevBtnMain.addEventListener('click', () => { 
  isNextMainPlace = false
  currentPlace = fillMainSection(currentPlace, isNextMainPlace)
  removeActiveItem()
  currentItem = getCurrentPlace()
})

nextBtnMain.addEventListener('click', () => { 
  isNextMainPlace = true
  currentPlace = fillMainSection(currentPlace, isNextMainPlace) 
  removeActiveItem()
  currentItem = getCurrentPlace()
})


function removeActiveItem() {
  let prevCurrentPlace
  for (let i = 0; i < mainMenu.length; i++) {
    if (mainMenu[i].classList.contains('divisions__item-active')) { 
      prevCurrentPlace = mainMenu[i]
    }  
  }
  prevCurrentPlace.classList.remove('divisions__item-active')
}

function fillMainSection(index, direction) {
  if (index > 0 && !direction) {
    index--
  } else if ((index < places.length - 1) && direction) {
    index++
  }
  getDataForFilling(index)
  return index    
}

function getDataForFilling(index) {
  mainPageTitle.innerHTML = places[index].title
  mainPageSubTitle.innerHTML = places[index].subtitle
  sheduleDaysFirst.innerHTML = places[index].sheduleFirstPart.sheduleDays
  sheduleTimeFirst.innerHTML = places[index].sheduleFirstPart.sheduleTime
  sheduleDaysSecond.innerHTML = places[index].sheduleSecondPart.sheduleDays
  sheduleTimeSecond.innerHTML = places[index].sheduleSecondPart.sheduleTime
  mainBackground.setAttribute('src', places[index].picture)
}

*/
//-----------------Events Swiper--------------------//


const slider_1 = new Swiper('.slider_1', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 74,
    dragClass: 'slider_1__scrollbar-drag'
  },
  spaceBetween: 30,
  slidesPerView: 3,
});

eventsNext.addEventListener('click', () => {
  slider_1.slideNext(1000)
})

eventsPrev.addEventListener('click', () => {
  slider_1.slidePrev(1000)
})

//----------------last report-----------------//

/*
const slider_2 = new Swiper('.slider_2', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 30,
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
*/

//--------------active aside-------------------


// asideItems.forEach((el) => {
  // el.addEventListener('mouseover', () => {
  //   const image = el.querySelector('.pic-aside__img')
  //   let way = image.getAttribute('src')
  //   image.setAttribute('src', way.replace('aside', 'divisions'))
  // })
  // el.addEventListener('mouseout', () => {
  //   const image = el.querySelector('.pic-aside__img')
  //   let way = image.getAttribute('src')
  //   image.setAttribute('src', way.replace('divisions', 'aside'))
  // })
  /*
  el.addEventListener('click', () => {
    console.log('Y')
    let placeIndex,
        targetPlace
    const asidePic = el.querySelector('.pic-aside__img')
    placeIndex = asidePic.src[asidePic.src.length - 5]
    switch(placeIndex) {
      case '1': targetPlace = 'Ресторан'
        break
      case '2': targetPlace = 'Караоке-бар'
        break
      case '3': targetPlace = 'Детский клуб'
        break
      case '4': targetPlace = 'Веревочный парк'
        break
      case '5': targetPlace = 'Бассейн'
        break
      case '6': targetPlace = 'Отель'
        break
    }
    fillMainSectionByName(targetPlace)
    removeActiveItem()
    currentItem = getCurrentPlace()
  })
})



asidePanel.addEventListener('mouseenter', () => {
  asidePanel.classList.add('aside-active')
  asideTitle.forEach( el => {
      el.classList.add('aside__title-active')    
    })
    asideItems.forEach( el => {
      el.classList.add('aside__item-active')
    })
    outerLinksTitle.forEach( el => {
      el.style.display = 'block'  
    })
})

asidePanel.addEventListener('mouseleave', () => {
  asideTitle.forEach( el => {
    el.classList.remove('aside__title-active')
  })
  asidePanel.classList.remove('aside-active')
  outerLinksTitle.forEach( el => {
    el.style.display = 'none'
  })
})

*/

//--------------main page menu---------------//

  /*
mainMenu.forEach((el) => {
  el.addEventListener('mouseover', () => {
    if (el !== currentItem) {
      currentItem.classList.remove('divisions__item-active')
    }
    el.classList.add('divisions__item-active')
  })
  el.addEventListener('mouseout', () => {
    currentItem.classList.add('divisions__item-active')    
    if (el !== currentItem) {
      el.classList.remove('divisions__item-active')
    }
  })

  el.addEventListener('click', () => {
    const targetPlace = el.querySelector('.divisions__title').innerHTML
    // console.log(targetPlace)
    fillMainSectionByName(targetPlace)
    currentItem = getCurrentPlace()
    el.classList.add('divisions__item-active')
  })
})

function fillMainSectionByName(targetPlace) {
  for (let i = 0; i < places.length; i++) {
    if (targetPlace === places[i].title) {
      getDataForFilling(i)
    }
  }
}

function getCurrentPlace() {
  for (let i = 0; i < mainMenu.length; i++) {
    if (mainMenu[i].querySelector('.divisions__title').innerHTML === placeName.innerHTML) {
      // prevCurrentPlace.classList.remove('divisions__item-active')
      mainMenu[i].classList.add('divisions__item-active')
      return mainMenu[i]
    }
  }
}
*/

//---------------our-places------------------

///////Передвижение ползунка

const ourPlacesNames = document.querySelectorAll('.filter__item')
const thumb = document.querySelector('.nav-line__thumb-thin')
const gap = 37 //px
const startWidth = ourPlacesNames[0].clientWidth
const ourPlacesCards = document.querySelectorAll('.main-places__item')

ourPlacesNames.forEach(el => {
  let currentThumbPosition = thumb.getBoundingClientRect().x
  let targetThumbPosition
  el.addEventListener('click', () => {
    const placeName = el.innerHTML
    targetThumbPosition = el.getBoundingClientRect().x
    thumb.style.transform = `translateX(${targetThumbPosition - currentThumbPosition}px)`
    thumb.style.transition = 'transform 0.8s'
    thumb.style.width = `${el.clientWidth}px`  
    // thumb.style.transition = 'width 0.8s'

    ourPlacesCards.forEach( elCard => {
      elCard.style.display = 'block'
    })
    switch (placeName) {
      case 'Банкетные': hideCard('banquet')
        break
      case 'Общие': hideCard('public')
        break
      case 'Индивидуальные': hideCard('individual')
        break
      case 'Караоке': hideCard('karaoke')
        break
    }

    function hideCard(name) {
      ourPlacesCards.forEach( elCard => {
        if (!elCard.classList.contains(name)) {
          elCard.style.display = 'none'
        }
      })
    }
  })
})

//----------SLIDER-TOP----------//

const nextSlideTop = document.querySelector('.nav-btns__next_top-page')
const prevSlideTop = document.querySelector('.nav-btns__prev_top-page')
const sliderTop = new Swiper('.slider-top', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.divisions__list',
    type: 'bullets',
    bulletElement: 'div',
    bulletClass: 'divisions__item',
    bulletActiveClass: 'divisions__item-active',
    clickable: true,
    renderBullet: function(index) {
      return `<div class='divisions__item'>${mainMenu[index].innerHTML}</div>`
    }    
  },
  slidesPerView: 1
})

nextSlideTop.addEventListener('click', () => {
  sliderTop.slideNext(500)
}) 

prevSlideTop.addEventListener('click', () => {
  sliderTop.slidePrev(500)
})

asideItems.forEach( (el, index) => {
  el.addEventListener('click', () => {
    console.log(index)
    sliderTop.slideTo(index)
  })
})

//------------------EMAIL-------------//

const emailText = document.querySelector('.email__text')
emailText.addEventListener('click', () => {
  console.log('click!')
  emailText.classList.add('email__text-active')
})






