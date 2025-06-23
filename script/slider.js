const slider = new Swiper('.mySwiper', {
    loop: true,
    speed: 1500,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: false,
      clickable: true,
    },
  }
);