const links = document.querySelectorAll(".navLinks a");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".mainMenu");

const navSlide = () => {

    burger.addEventListener("click",()=>{
        nav.classList.toggle("navActive");
        burger.classList.toggle("toggle");
        document.body.toggle("fixed-position");
    });
}
navSlide();

const linkSlide = () => {
    for (let link of links){
    link.addEventListener("click", ()=>{
    nav.classList.toggle("navActive");
    burger.classList.toggle("toggle");
    });
    }
    }
linkSlide();

// To top button

const toTopBtn = document.getElementById("toTopButton");

window.onscroll = function() { 
    scrollBtnShow()
};

function scrollBtnShow() {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        toTopBtn.style.opacity = "1";
        toTopBtn.style.display = "block";
    } else{
        toTopBtn.style.opacity = "0";
        toTopBtn.style.display = "none";
    }
}

function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
