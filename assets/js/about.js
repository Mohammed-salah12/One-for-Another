let nav = document.querySelector("nav");

onscroll = (_) => {
  if (scrollY < 70) {
    nav.classList.remove("navBB");
  } else {
    nav.classList.add("navBB");
  }
};