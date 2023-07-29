// Home section
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links');
var menuLinks = document.querySelectorAll('.nav-links li a');

menuBtn.addEventListener('click', activeClass);

function activeClass(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
}

for(i = 0; i < menuLinks.length; i++){
    menuLinks[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', scrollFunction);

function scrollFunction(){
    if(window.scrollY > 30){
        homeSection.classList.add('active');
    }
    else{
        homeSection.classList.remove('active');
    }
}
// owl carousel
$('.award-container').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTime:6000,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3
        }
    }
})