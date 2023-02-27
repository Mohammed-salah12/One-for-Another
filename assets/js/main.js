let nav = document.querySelector("nav");
let loading = document.querySelector(".ss");

// To add background for nav

onscroll = (_) => {
  if (scrollY < 70) {
    nav.classList.remove("navBB");
  } else {
    nav.classList.add("navBB");
  }
};

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: -10,
      stretch: 1,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    //  clickable: true,
    },
  });