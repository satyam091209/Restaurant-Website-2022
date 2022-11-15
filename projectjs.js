let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};
var swiper = new Swiper(".home-slider", {
   loop:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});
const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');
readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-more'); 
    if(readMoreBtn.innerText === 'Read More'){
        readMoreBtn.innerText = 'Read Less';
    }else{
        readMoreBtn.innerText = 'Read More';
    }
});
var swiper = new Swiper(".food-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       1000: {
         slidesPerView: 3,
       },
    },
 });
var swiper = new Swiper(".menu-slider", {
   grabCursor:true,
   loop:true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});

let form = document.querySelector("form");
form.addEventListener("submit",function(e) {
   alert("Booked Successfully");
})