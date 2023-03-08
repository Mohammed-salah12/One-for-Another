let nav = document.querySelector("nav");
let MAIN = document.querySelector("main");
let secmain = document.querySelector(".secmain");

// To add background for nav

onscroll = (_) => {
  if (scrollY < 20) {
    MAIN.style.display = "block";
    secmain.style.display = "none" ;
  } else {
    MAIN.style.display = "none";
    secmain.style.display = "block" ;
  }
};
// onscroll = (_) => {
//   if (scrollY < 70) {
//     nav.classList.remove("navBB");
//   } else {
//     nav.classList.add("navBB");
//   }
// };

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


// Drop Down
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Vertical Carsoul
$(document).ready(function () {
  var infoToast = document.getElementById('infoToast');
  infoToast.addEventListener('hidden.bs.toast', function () {
      //roll-in-blurred-right
      $("#gitBtn").addClass("jello-horizontal");
  });
  var toast = new bootstrap.Toast(infoToast);
  toast.show();
});

$('#vertical-carousel').bind('mousewheel DOMMouseScroll', function (e) {
  if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      $(this).carousel('prev');
  }
  else {
      $(this).carousel('next');
  }
  e.preventDefault();
});