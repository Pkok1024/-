document.addEventListener("DOMContentLoaded",(()=>{"use strict";const preloader=document.querySelector("#preloader");preloader&&window.addEventListener("load",(()=>{preloader.remove()}));const mobileNavShow=document.querySelector(".mobile-nav-show"),mobileNavHide=document.querySelector(".mobile-nav-hide");function mobileNavToogle(){document.querySelector("body").classList.toggle("mobile-nav-active"),mobileNavShow.classList.toggle("d-none"),mobileNavHide.classList.toggle("d-none")}document.querySelectorAll(".mobile-nav-toggle").forEach((el=>{el.addEventListener("click",(function(event){event.preventDefault(),mobileNavToogle()}))})),document.querySelectorAll("#navbar a").forEach((navbarlink=>{if(!navbarlink.hash)return;document.querySelector(navbarlink.hash)&&navbarlink.addEventListener("click",(()=>{document.querySelector(".mobile-nav-active")&&mobileNavToogle()}))}));document.querySelectorAll(".navbar .dropdown > a").forEach((el=>{el.addEventListener("click",(function(event){if(document.querySelector(".mobile-nav-active")){event.preventDefault(),this.classList.toggle("active"),this.nextElementSibling.classList.toggle("dropdown-active");let dropDownIndicator=this.querySelector(".dropdown-indicator");dropDownIndicator.classList.toggle("bi-chevron-up"),dropDownIndicator.classList.toggle("bi-chevron-down")}}))}));const scrollTop=document.querySelector(".scroll-top");if(scrollTop){const togglescrollTop=function(){window.scrollY>100?scrollTop.classList.add("active"):scrollTop.classList.remove("active")};window.addEventListener("load",togglescrollTop),document.addEventListener("scroll",togglescrollTop),scrollTop.addEventListener("click",window.scrollTo({top:0,behavior:"smooth"}))}GLightbox({selector:".glightbox"});let portfolionIsotope=document.querySelector(".portfolio-isotope");if(portfolionIsotope){let portfolioFilter=portfolionIsotope.getAttribute("data-portfolio-filter")?portfolionIsotope.getAttribute("data-portfolio-filter"):"*",portfolioLayout=portfolionIsotope.getAttribute("data-portfolio-layout")?portfolionIsotope.getAttribute("data-portfolio-layout"):"masonry",portfolioSort=portfolionIsotope.getAttribute("data-portfolio-sort")?portfolionIsotope.getAttribute("data-portfolio-sort"):"original-order";window.addEventListener("load",(()=>{let portfolioIsotope=new Isotope(document.querySelector(".portfolio-container"),{itemSelector:".portfolio-item",layoutMode:portfolioLayout,filter:portfolioFilter,sortBy:portfolioSort});document.querySelectorAll(".portfolio-isotope .portfolio-flters li").forEach((function(el){el.addEventListener("click",(function(){document.querySelector(".portfolio-isotope .portfolio-flters .filter-active").classList.remove("filter-active"),this.classList.add("filter-active"),portfolioIsotope.arrange({filter:this.getAttribute("data-filter")}),aos_init()}),!1)}))}))}function aos_init(){AOS.init({duration:800,easing:"slide",once:!0,mirror:!1})}new Swiper(".slides-1",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".slides-2",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:20},1200:{slidesPerView:2,spaceBetween:20}}}),new PureCounter,window.addEventListener("load",(()=>{aos_init()}))}));