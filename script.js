const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());


// Initialize Swiper

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // Responsive Breakpoint
    breakpoints:{
      0:{
        slidesPerView: 1
      },
      786:{
        slidesPerView: 2
      },
      1024:{
        slidesPerView: 3
      }
    }
  });