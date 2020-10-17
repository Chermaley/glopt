$(document).ready(function(){
    $('.review__wrapper').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
        ]
    });
});
document.addEventListener('DOMContentLoaded', () =>{
    const trigger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          close = document.querySelector('.menu__close'),
          overlay = document.querySelector('.menu__overlay');
    trigger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', () =>{
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });
    overlay.addEventListener('click', () =>{
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });

});

