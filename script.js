let menu= document.querySelector('#menu-bars');
let navbar= document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
    const themeIcon = document.getElementById('theme-icon');
const body = document.body;


if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-theme");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
}

themeIcon.onclick = () => {
    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    } else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
    }
};
   var swiper = new Swiper(".home-slider", {  
     effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
       coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },  
    loop:true,
     autoplay:{
        delay:1500,
        disableOnInteraction:false,
     } 
    });

