
// Side menu js

const sidebar = document.getElementById("sidebar");
const menubar = document.getElementById("menubar");
sidebar.style.width = "0px";
menubar.onclick = function(){
if(sidebar.style.width=="0px")
{
    sidebar.style.width="250px"
}
else{
    sidebar.style.width="0px"
}
}

// Slider Js

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 1000,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });