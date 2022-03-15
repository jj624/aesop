// swiper.js

const swiper = new Swiper('.swiper', {
    direction: 'horizontal', 
    effect: 'fade',
    loop: true, 
    autoplay: {
        delay: 5000
    },
  

    pagination: {
      el: '.swiper-pagination',
    }
  });
