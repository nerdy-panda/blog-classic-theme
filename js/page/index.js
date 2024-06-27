import PhotoSwipeLightbox from '../photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  // may select multiple "galleries"
  gallery: '#instagram',

  // Elements within gallery (slides)
  children: 'a',

  // setup PhotoSwipe Core dynamic import
  pswpModule: () => import('../photoswipe.esm.js')
});
lightbox.init();

const swiper = new Swiper("#slider", {
  slidesPerView: 1,
  spaceBetween: 5,
  loop: true,
  autoplay: {
    delay: 5555,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});