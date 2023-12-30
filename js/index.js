//meun
let navmeun = document.getElementById("nav-meun"),
  navbtn = document.getElementById("nav-btn"),
  navclose = document.getElementById("nav-close"),
  navlinks = document.querySelectorAll('.nav_link');

// meun show
if (navbtn) {
  navbtn.addEventListener("click", () => {
    navmeun.classList.add("show-meun");
  });
}
// meun hide
if (navclose) {
  navclose.addEventListener("click", () => {
    navmeun.classList.remove("show-meun");
  });
}
// Remove Meun
function removeMeun(){
  navmeun.classList.remove('show-meun');
}
navlinks.forEach(navlink => navlink.addEventListener('click',removeMeun));

// skill toggle
let skillContent = document.getElementsByClassName("skill_content"),
  skillHeader = document.querySelectorAll(".skill_header");

function skilltoggle() {
  let item = this.parentNode.className;
  for (i = 0; i < skillContent.length; i++) {
    skillContent[i].className = "skill_content skill_toggle";
  }
  if (item === "skill_content skill_toggle") {
    this.parentNode.className = "skill_content skill_open";
  }
}
skillHeader.forEach((a) => {
  a.addEventListener("click", skilltoggle);
});

// qualification
let tabs = document.querySelectorAll("[data-target]"),
  tabcontents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    let target = document.querySelector(tab.dataset.target);
    tabcontents.forEach((tabcontent) => {
      tabcontent.classList.remove("qualification_active");
    });
    target.classList.add("qualification_active");
  });
});

// service
let serviceViews = document.querySelectorAll(".service_data"),
  serviceBtns = document.querySelectorAll(".service_btn"),
  serviceCloses = document.querySelectorAll(".service_data_close");

serviceBtns.forEach((serviceBtn, i) => {
  serviceBtn.addEventListener("click", () => {
    serviceViews[i].classList.add("active-service");
  });
});

serviceCloses.forEach((serviceClose, i) => {
  serviceClose.addEventListener("click", () => {
    serviceViews[i].classList.remove("active-service");
  });
});

// Portfolio
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("portfolio_content");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "grid";
  dots[slideIndex - 1].className += " active";
}

// Change Background Header
function scrollHeader(){
  let nav = document.getElementById('header');
  if(this.scrollY >= 80){
    nav.classList.add('scroll-header')
  }else{
    nav.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll',scrollHeader);

// Show Scroll Up
function scrollUp(){
  let scrollUp = document.getElementById('scroll_up');
  if(this.scrollY >= 450){
    scrollUp.classList.add('show-scroll')
  }else{
    scrollUp.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll',scrollUp);

// Dark Mode
let dark_btn = document.getElementById('dark_toggle'),
    body = document.querySelector('body'),
    darkTheme = 'dark-theme';

dark_btn.addEventListener('click',function(){
  this.classList.toggle('fa-moon');
  if(this.classList.toggle('fa-sun')){
    body.classList.remove(darkTheme);
    body.style.transition = '0.5s';
  }else{
    body.classList.add(darkTheme);
    body.style.transition = '0.5s';
  }
})


