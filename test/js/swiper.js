var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: false,
      centeredSlides: true,
      roundLengths: true,
      // mousewheel: true,
      slidesPerView: 1,
      simulateTouch: true,
      centerInsufficientSlides: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
      mousewheel: true,
    }
  },
});