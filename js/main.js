// $(function(){



$('.reviews__slider').slick({
  arrows:false,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        }
      },
  ] 
});

const btn = document.querySelector('.header__menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});