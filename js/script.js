const prevBtnMain = document.querySelector('.nav-btns__prev_main')
const nextBtnMain = document.querySelector('.nav-btns__next_main')
const mainPageTitle = document.querySelector('.main-page__title')
const mainPageSubTitle = document.querySelector('.main-page__subtitle')
const sheduleDaysFirst = document.querySelector('.shedule__days_first')
const sheduleTimeFirst = document.querySelector('.shedule__time_first')
const sheduleDaysSecond = document.querySelector('.shedule__days_second')
const sheduleTimeSecond = document.querySelector('.shedule__time_second')
const mainBackground = document.querySelector('.bg-picture')
const topPage = document.querySelector('.top-page')

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

//-----------------Events Swiper MOBILE--------------------//
const eventsNextMobile = document.querySelector('.events__next-mobile')
const eventsPrevMobile = document.querySelector('.events__prev-mobile')

// let spaceBetweenSlides = - (document.documentElement.clientWidth - 252 - 30 - 20)
// // console.log(document.documentElement.clientWidth)

// window.addEventListener('resize', () => {
//   // console.log(document.documentElement.clientWidth)
//   spaceBetweenSlides = - (document.documentElement.clientWidth - 252 - 30 - 20)
//   console.log(spaceBetweenSlides)
// })

function getSpaceBetweenSlides() {
  if (document.documentElement.clientWidth < 601) {
    return -1 * (document.documentElement.clientWidth - 252 - 30 - 20)
  } else {
    return -1 * (document.documentElement.clientWidth - 359 - 100 - 30 - 31)
  }
  
}

const slider_1_mobile = new Swiper('.slider_1-mobile', {
  direction: 'horizontal',
  loop: false,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 74,
    dragClass: 'slider_1__scrollbar-drag'
  },
  spaceBetween: getSpaceBetweenSlides(),
  slidesPerView: 1,
});

eventsNextMobile.addEventListener('click', () => {
  eventsPrevMobile.classList.remove('nav-inactive')
  slider_1_mobile.slideNext(1000)
  if (slider_1_mobile.isEnd) {
    eventsNextMobile.classList.add('nav-inactive')
  }
})

eventsPrevMobile.addEventListener('click', () => {
  eventsNextMobile.classList.remove('nav-inactive')
  slider_1_mobile.slidePrev(1000)
  if (slider_1_mobile.isBeginning) {
    eventsPrev.classList.add('nav-inactive')
  }
})

if (slider_1_mobile.isBeginning) {
  eventsPrevMobile.classList.add('nav-inactive')
}



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
const navTopSmall = document.querySelectorAll('.divisions-small__bullet')
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

prevSlideTop.classList.add('nav-inactive')

nextSlideTop.addEventListener('click', () => {
  if (sliderTop.activeIndex === mainMenu.length - 2) {
    nextSlideTop.classList.add('nav-inactive')
  }
  if (prevSlideTop.classList.contains('nav-inactive')) {
    prevSlideTop.classList.remove('nav-inactive')
  }
  sliderTop.slideNext(500)

  renderActiveBulletMobile()
}) 

prevSlideTop.addEventListener('click', () => {
  if (sliderTop.activeIndex === 1) {
    prevSlideTop.classList.add('nav-inactive')
  }
  if (nextSlideTop.classList.contains('nav-inactive')) {
    nextSlideTop.classList.remove('nav-inactive')
  }
  sliderTop.slidePrev(500)

  renderActiveBulletMobile()
})

function renderActiveBulletMobile() {
  navTopSmall.forEach( (el, index) => {
    el.classList.remove('divisions-small__bullet-active')
    if (index === sliderTop.activeIndex) {
      el.classList.add('divisions-small__bullet-active')
    }  
  })
}

asideItems.forEach( (el, index) => {
  el.addEventListener('click', () => {
    sliderTop.slideTo(index)
  })
})

navTopSmall.forEach( (el, index) => {
  el.addEventListener('click', () => {
    if (index > 0 && index < mainMenu.length - 1) {
      nextSlideTop.classList.remove('nav-inactive')
      prevSlideTop.classList.remove('nav-inactive')
    } else if (index === 0) {
      prevSlideTop.classList.add('nav-inactive')
    } else if (index === mainMenu.length - 1) {
      nextSlideTop.classList.add('nav-inactive')
    }
    navTopSmall.forEach( (el) => {
      el.classList.remove('divisions-small__bullet-active')  
    })
    el.classList.add('divisions-small__bullet-active')
    sliderTop.slideTo(index)
  })
})



//------------------EMAIL-------------//

const footerEmail = document.querySelector('.footer__email')
const emailText = document.querySelector('.email__text') 
const emailInput = document.querySelector('.email__input')
const emailSubscribe = document.querySelector('.email__subscribe')

emailInput.onfocus = function() {
  console.log('focus')
  emailText.classList.add('email__text-active')
}

emailSubscribe.addEventListener('click', () => {
  emailInput.value = ''
  emailText.classList.remove('email__text-active')
})


//for mobile
const emailTextMob = document.querySelector('.email__text-mobile') 
const emailInputMob = document.querySelector('.email__input-mobile')
const emailSubscribeMob = document.querySelector('.email__subscribe-mobile')

emailInputMob.onfocus = function() {
  console.log('focus')
  emailTextMob.classList.add('email__text-active')
}

emailSubscribeMob.addEventListener('click', () => {
  emailInputMob.value = ''
  emailTextMob.classList.remove('email__text-active')
})




//---------------MOBILE MENU----------------//

const mobileMenuBtn = document.querySelector('.header__nav-small-inactive')
const mobileMenuTop = document.querySelector('.top-page__mobile-menu')

const navLine_1 = document.querySelector('.nav-line-mobile-1')
const navLine_2 = document.querySelector('.nav-line-mobile-2')
const navLine_3 = document.querySelector('.nav-line-mobile-3')

mobileMenuBtn.addEventListener('click', () => {
  if (!mobileMenuTop.classList.contains('top-page__mobile-menu-active')) {
    mobileMenuTop.classList.add('top-page__mobile-menu-active')
    navLine_1.classList.add('nav-line-mobile-1-active')
    navLine_2.classList.add('nav-line-mobile-2-active')
    navLine_3.classList.add('nav-line-mobile-3-active')
    document.body.style.overflow = 'hidden'
  } else {
    closeMobileMenu()
  }

  topPage.addEventListener('click', (e) => {
    let current = e.target
    if (!current.classList.contains('top-page')) {
      while (!current.classList.contains('top-page')) {
        if (current.classList.contains('top-page__mobile-menu')) { 
          console.log('yes')
          break
        } else {
          if (current.parentNode.classList.contains('top-page') && !current.classList.contains('header__nav-small-inactive')) {
            closeMobileMenu()
          }
          current = current.parentNode    
        }
      }
    } else {
      closeMobileMenu()
    }
  })
})


function closeMobileMenu() {
  mobileMenuTop.classList.remove('top-page__mobile-menu-active')
  navLine_1.classList.remove('nav-line-mobile-1-active')
  navLine_2.classList.remove('nav-line-mobile-2-active')
  navLine_3.classList.remove('nav-line-mobile-3-active')
  document.body.style.overflow = ''
}

//--------------OUR-PLACES-MOBILE------------//

const filterMobileItems = document.querySelectorAll('.filter-mobile__item')
let lastCard

filterMobileItems.forEach( (el, index) => {
  if (index === 0) {
    el.addEventListener('click', () => {
      ourPlacesCards.forEach( (card) => {
        card.style.display = 'block'
        card.classList.remove('main-places__item-last-filter')
      })
    })
  } else if (index === 1) {
    el.addEventListener('click', () => {
      ourPlacesCards.forEach( (card) => {
        card.style.display = 'block'
      })
      for (let i = 0; i < ourPlacesCards.length; i++) {
        if (i !== 0) {
          ourPlacesCards[i].style.display = 'none'
        }
      }
      setLastCardMarginB(0)
    })
  } else if (index === 2) {
    el.addEventListener('click', () => {
      ourPlacesCards.forEach( (card) => {
        card.style.display = 'block'
      })
      for (let i = 0; i < ourPlacesCards.length; i++) {
        if (i !== 2 && i !== 3) {
          ourPlacesCards[i].style.display = 'none'
        } 
      }
      setLastCardMarginB(3)
    })
  } else if (index === 3) {
    el.addEventListener('click', () => {
      ourPlacesCards.forEach( (card) => {
        card.style.display = 'block'
      })
      for (let i = 0; i < ourPlacesCards.length; i++) {
        if (i !== 1 && i !== 4) {
          ourPlacesCards[i].style.display = 'none'
        } 
      }
      setLastCardMarginB(4)
    })
  } else if (index === 4) {
    el.addEventListener('click', () => {
      ourPlacesCards.forEach( (card) => {
        card.style.display = 'block'
      })
      for (let i = 0; i < ourPlacesCards.length; i++) {
        if (i < 5) {
          ourPlacesCards[i].style.display = 'none'
        } 
      }
    })
  }
} )

filterMobileItems.forEach( (el) => {
  el.addEventListener('click', () => {
    filterMobileItems.forEach( (el_1) => {
      if (el_1.classList.contains('filter-mobile__item-active')) {
        el_1.classList.remove('filter-mobile__item-active')    
      }
    })
    el.classList.add('filter-mobile__item-active')
  })
})

function setLastCardMarginB(index) {
  for (let i = ourPlacesCards.length - 1; i >= 0; i-- ) {
    if (i === index) {
      ourPlacesCards[i].classList.add('main-places__item-last-filter')
      break
    }
  }
}

//-----------------Last reports Swiper MOBILE--------------------//

const slider_2_mobile = new Swiper('.slider_2-mobile', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: getSpaceBetweenSlides(),
  slidesPerView: 1,
});

lastReportsNext.addEventListener('click', () => {
  lastReportsPrev.classList.remove('nav-inactive')
  slider_2_mobile.slideNext(1000)
  if (slider_2_mobile.isEnd) {
    lastReportsNext.classList.add('nav-inactive')
  }
})

lastReportsPrev.addEventListener('click', () => {
  lastReportsNext.classList.remove('nav-inactive')
  slider_2_mobile.slidePrev(1000)
  if (slider_2_mobile.isBeginning) {
    lastReportsPrev.classList.add('nav-inactive')
  }
})

if (slider_2_mobile.isBeginning) {
  lastReportsPrev.classList.add('nav-inactive')
}






  











