  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 1, // Adjust this value based on the number of slides you have
      slidesPerGroup: 1, // Adjust this value based on the number of slides you have
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });