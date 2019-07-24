document.addEventListener("DOMContentLoaded", function(){
    let navList = document.querySelector(".nav__list");
    let header = document.querySelector(".index-page__header");
    let burgerMenu = document.querySelector(".burger");
    let navLink = document.querySelectorAll(".nav__link");
    
    let galleryContent = document.querySelector(".gallery__content");
    let galleryItem = document.querySelector(".gallery__item");
    let galleryImg = document.querySelectorAll(".gallery__img");
    let galleryList   = document.querySelector(".gallery__list");
    let galleryCaption = document.querySelectorAll(".gallery__caption");
    let sliderList = document.querySelector(".slider__list");
    let sliderControlPrev = document.querySelector(".arrow-prev");
    let sliderControlNext = document.querySelector(".arrow-next");
    let sliderSection = document.querySelector(".slider");
    let sliderItem = document.querySelectorAll(".slider__item");
    var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      
      function getCoords(el) {
        var box = el.getBoundingClientRect();
      
        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset
        };
      
      };
      
    burgerMenu.addEventListener("click", function(e){
        e.preventDefault();
        burgerMenu.classList.toggle("burger-close");
    })
    document.addEventListener("click", function(e) {
        if(burgerMenu.classList.contains("burger-close") && e.target.classList.contains("burger") != true){
            burgerMenu.classList.remove("burger-close");
        }
        
    })

    window.addEventListener("scroll", function(){
        let docWidth = document.documentElement.clientWidth;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop > header.offsetHeight && docWidth < 1024) {
            header.classList.add("sticky");
            if(docWidth <= 768){
                navList.style.position = "fixed";
            }else {
                navList.style.position = "";
            }
            
        }else{
            header.classList.remove("sticky");
            navList.style.position = "";
        }
       
    })


    galleryList.addEventListener("click", function(e){
        


        var target = e.target;
        while(target != galleryList) {
            if(target.className == "gallery__content") {
                 for(var i = 0; i < galleryImg.length; i++) {
                     if(galleryImg[i].classList.contains("galleryHover") && target.firstElementChild.getAttribute("src") != galleryImg[i].getAttribute("src")){
                         galleryImg[i].classList.remove("galleryHover");
                         galleryCaption[i].classList.remove("toFront");
                     }
                 }
 
                target.firstElementChild.classList.toggle("galleryHover");
                target.firstElementChild.nextElementSibling.classList.toggle("toFront");
                return;
            }
            target = target.parentNode;
        }
     });
 
     document.addEventListener("click", function(e) {
 
         if(e.target.className.slice(0,7) == "gallery" || e.target.parentElement.className.slice(0,7) == "gallery") {
             return;
         }else{
             for(i = 0; i < galleryImg.length; i++) {
                 if(galleryImg[i].classList.contains("galleryHover")) {
                     galleryCaption[i].classList.remove("toFront");
                     galleryImg[i].classList.remove("galleryHover");
                 }
             }
         }
 
 
        
             
     });



});
