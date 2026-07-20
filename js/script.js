/*==================================================
MOBIS HAIR
SCRIPT.JS
==================================================*/



/*=========================================
PRELOADER
=========================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        preloader.style.visibility = "hidden";

    }, 1200);

});



/*=========================================
HEADER
=========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});



/*=========================================
BACK TO TOP
=========================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});



backToTop.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/*=========================================
SMOOTH LINKS
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



/*=========================================
INTERSECTION OBSERVER
=========================================*/

const revealElements=document.querySelectorAll(

`
section,
.collection-card,
.service-box,
.why-card,
.mini-card,
.contact-item,
.instagram-box,
.testimonial-wrapper,
.packaging-gallery img
`

);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);



revealElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});



/*=========================================
STAGGER EFFECT
=========================================*/

const cards=document.querySelectorAll(

".collection-card,.service-box,.why-card"

);

cards.forEach((card,index)=>{

card.style.transitionDelay=`${index*120}ms`;

});



/*=========================================
PARALLAX HERO
=========================================*/

const hero=document.querySelector(".hero-bg");

window.addEventListener("scroll",()=>{

const offset=window.pageYOffset;

hero.style.transform=`translateY(${offset*0.3}px) scale(1.05)`;

});



/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});



/*=========================================
MOBILE MENU
=========================================*/

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

const menuIcon=menuBtn.querySelector("i");

function closeMenu(){

nav.classList.remove("open");

document.body.classList.remove("menu-open");

menuIcon.classList.remove("fa-xmark");

menuIcon.classList.add("fa-bars");

}

function toggleMenu(){

nav.classList.toggle("open");

document.body.classList.toggle("menu-open");

menuIcon.classList.toggle("fa-bars");

menuIcon.classList.toggle("fa-xmark");

menuBtn.setAttribute("aria-expanded", nav.classList.contains("open"));

}

menuBtn.addEventListener("click", toggleMenu);

menuBtn.addEventListener("keydown", (e)=>{

if(e.key === "Enter" || e.key === " "){

e.preventDefault();

toggleMenu();

}

});

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

closeMenu();

});

});