const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  speed: 400,
  spaceBetween: 10,
  navigation: {
    nextEl: '.slider__control-right',
    prevEl: '.slider__control-left',
  },
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3

    },
    1400: {
      spaceBetween: 30,
      slidesPerView: 4
    }
  }
});
const headerLink = document.querySelectorAll('.header__link'),
  mainPage = document.querySelector('.main__page'),
  mainPageTwo = document.querySelector('.main__page-two'),
  catalog = document.querySelector('.catalog'),
  cart = document.querySelector('.cart'),
  menu4 = document.querySelector('.menu-4'),
  menu3 = document.querySelector('.menu-3');


headerLink.forEach(item => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('catalog')) {
      mainPage.classList.remove('main__page-noactive');
      mainPageTwo.classList.remove('main__page-two-active')
      catalog.classList.add('active');
    }
    if (e.target.classList.contains('cart')) {
      cart.classList.add('active');
      classAdd();
    } else {
      cart.classList.remove('active');
    }
    if (e.target.classList.contains('menu-3')) {
      menu3.classList.add('active');
      classAdd();
      } else {
          menu3.classList.remove('active');
      }
      if (e.target.classList.contains('menu-4')) {
        menu4.classList.add('active');
        classAdd();
      } else {
          menu4.classList.remove('active');
      }
  })
})
function classAdd() {
  mainPage.classList.add('main__page-noactive');
  mainPageTwo.classList.add('main__page-two-active');
  catalog.classList.remove('active');
}

if (window.screen.width <= 1024) {
  const hamburger = document.querySelector('.hamburger'),
  headerNav = document.querySelector('.header__nav'),
  headerHambLink = document.querySelectorAll('.header__hamburger-link');
  hamburger.addEventListener('click', () => {
  headerNav.classList.toggle('header__nav-active');
  hamburger.classList.toggle('hamburger-active');
  document.body.classList.toggle('is-hidden')
  });
  headerHambLink.forEach(item => {
  item.addEventListener('click', () => {
    headerNav.classList.toggle('header__nav-active');
    document.body.classList.toggle('is-hidden')
  })
  })
}


const screenWidth = window.screen.width
console.log(screenWidth);
