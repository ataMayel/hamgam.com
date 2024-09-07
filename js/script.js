const collapsBtn = document.querySelector('#collaps');
const mobileMenu = document.querySelector('#mobile-menu');

collapsBtn.addEventListener('click', () => {
    collapsBtn.classList.toggle('opened')
    mobileMenu.classList.toggle('mobile-menu-on')
})
const searchBtns = document.querySelectorAll('.searchBtn');
const closeSearch = document.querySelector('#closeSearchBtn');
const searchDiv = document.querySelectorAll('.search-div')[0];
const searchBox = document.querySelectorAll('#search');

searchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.style.overflowY = 'hidden'
        searchDiv.style.display = 'block';
        searchBox.autofocus = true;
    })
})

closeSearch.addEventListener('click', () => {
    searchDiv.style.display = 'none';
    document.body.style.overflowY = 'visible'
})

const cartBtns = document.querySelectorAll('.cartBtn');
const cart = document.querySelector('#cart');
const closeCart = document.querySelector('#closeCartBtn');

cartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('opened');
        cart.style.left = '0';
    })
})

closeCart.addEventListener('click', () => {
    cart.style.left = '-320px';
})

let title = new Typing('#element', {
    data: 'آموزشگاه آنلاین زبان انگلیسی',
    repeat: true,
    speed: 60,
    delay: 1500,
    back: {
        speed: 20,
        delay: 5000
    }
});

title.start()
AOS.init()

const courses = new Slider('#course-slider', {
    slides: '.course',
    gap: 40,
    rtl: true,
    loop: true,
    autoPlay: {
        delay: 4500
    },
}).start()

const reviews = new Slider('#reviews', {
    slides: '.review',
    gap: 20,
    loop: true,
    rtl: true,
    autoPlay: {
        delay: 3000
    },
    controlls: {
        next: '#reviewNext',
        perv: '#reviewPerv'
    },
    navigation: {
        items: '.slider-nav-item',
        activation: 'active-slide'
    }
}).start()