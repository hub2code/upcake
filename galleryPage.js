document.addEventListener("DOMContentLoaded", function(){
    let navList = document.querySelector(".nav__list");
    let header = document.querySelector(".index-page__header");
    let burgerMenu = document.querySelector(".burger");
    let navLink = document.querySelectorAll(".nav__link");
    // let section = document.querySelectorAll("section");
    // let slogan = document.querySelector(".slogan__title");
    // let title = document.querySelector(".sitename__title");
    // let heroParallax = document.querySelector(".hero__parallax");
    // let parallaxStyle = getComputedStyle(heroParallax);
    // let styleBg = parallaxStyle.backgroundPosition;
    
    let galleryContent = document.querySelector(".gallery__content");
    let galleryItem = document.querySelector(".gallery__item");
    let galleryImg = document.querySelectorAll(".gallery__img");
    let galleryList   = document.querySelector(".gallery__list");
    let galleryCaption = document.querySelectorAll(".gallery__caption");
    let sliderList = document.querySelector(".slider__list");
    // console.log(sliderList.getBoundingClientRect().width);
    let sliderControlPrev = document.querySelector(".arrow-prev");
    let sliderControlNext = document.querySelector(".arrow-next");
    let sliderSection = document.querySelector(".slider");
    let sliderItem = document.querySelectorAll(".slider__item");
    var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );

    //   for (let i = 0; i < navLink.length; i++) {
    //         navLink[i].setAttribute("href", navLink[i].getAttribute("href").slice(1));
    //   }
      
      function getCoords(el) {
        var box = el.getBoundingClientRect();
      
        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset
        };
      
      };

    //   function parallax(el) {
    //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     let arr = styleBg.split(" ");
    //     el.style.backgroundPosition = arr[0] + " " + (parseInt(arr[1]) + scrollTop/2) + "px";
    //   }

    //   setTimeout(function(){
    //     slogan.classList.add("animated");
    //     title.classList.toggle("bounceInDown");
    //   }, 1000);

    //   title.classList.add("animated");
      
    //     setInterval(function(){
    //         slogan.classList.toggle("swing");
    //     }, 2000);
      
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
        // checkSection();
        // highlight();
        // parallax(heroParallax);
       
    })
   

    // function highlight() {
    //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     for (let i = 0; i < navLink.length; i++) {
    //         if(navLink[i].parentElement.classList.contains("highlight")) {
    //             navLink[i].parentElement.classList.remove("highlight");
    //         }
    //         if(checkSection().getAttribute("id") != null && checkSection().getAttribute("id") == navLink[i].getAttribute("href")){
    //             navLink[i].parentElement.classList.add("highlight");
    //         }
    //         if(scrollTop == (scrollHeight - document.documentElement.clientHeight)){
    //             navLink[i].parentElement.classList.remove("highlight");
    //             navLink[navLink.length - 1].parentElement.classList.add("highlight");
    //         }else {
    //             navLink[navLink.length - 1].parentElement.classList.remove("highlight");
    //         }
            
    //     }
    //     }
    
    
    // function checkSection() {
    //     var centerX = document.documentElement.clientWidth / 2;
    //     var centerY = document.documentElement.clientHeight / 2;
    //     var elem = document.elementFromPoint(centerX, centerY);
    //     var el = elem;
    //     while(el.tagName != "SECTION") {
    //         el = el.parentElement;
    //     }
        
    //     return el;
    // }

    
    // navList.addEventListener("click", function(event) {
        
    //     if(event.target.nodeName != "A") return;
    //     event.preventDefault();
    //         for (let i = 0; i < section.length; i++) {
    //             if(section[i].getAttribute("id") == event.target.getAttribute("href")) {
    //                 if(document.documentElement.clientWidth < 1024){
    //                     window.scrollTo(0, getCoords(section[i]).top - header.offsetHeight);
    //                 }else{
    //                     window.scrollTo(0, getCoords(section[i]).top);
    //                 }
                    
                  
    //             }
                    
                    
    //         }       
    // });


    galleryList.addEventListener("click", function(e){
        


        var target = e.target;
     //    console.log(target.nodeName);
        while(target != galleryList) {
            if(target.className == "gallery__content") {
             //    console.log(target.className);
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
        //  console.log(e.target.className.slice(0,7));
 
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


    // sliderSection.addEventListener("click", function(e) {
        
    //     let target = e.target;
    //     let docWidth = document.documentElement.clientWidth;
    //     // console.log(target.className.indexOf("prev"));
    //     // console.log(target.className.indexOf("next"));
    //     if(target.className.indexOf("prev") != -1){
    //         for(var i = 0; i < sliderItem.length; i++) {
    //             console.log(sliderItem[i].getAttribute("class") + "::::" + sliderItem[i].getBoundingClientRect().left + "::::" + getComputedStyle(sliderItem[i]).left);
    //         }
    //     }else if(target.className.indexOf("next") != -1) {
    //         for(var i = 0; i < sliderItem.length; i++) {
    //             console.log(sliderItem[i].getAttribute("class") + "::::" + sliderItem[i].getBoundingClientRect().left + "::::" + getComputedStyle(sliderItem[i]).left);
    //         }
    //     }
        
    // });
    
    // sliderSection.addEventListener("click", function(e) {
    //     var target = e.target;
    //     for(var i = 0; i < sliderItem.length; i++){
    //         console.log(getComputedStyle(sliderItem[i]).opacity);
    //     }
    //     for(var i = 0; i < sliderItem.length; i++){
    //         sliderItem[i].style.animation = "none";
    //     }
    //     var sliderLength = sliderItem.length;
    //     var num = 0;
    //     sliderItem[0].style.opacity = "1";
    //     if(target.className.indexOf("prev") != -1 && num != 0){
    //         sliderItem[num-1].style.opacity = "1";
    //         sliderItem[num].style.opacity = "0";
    //         num = num-1;
    //     }else if(target.className.indexOf("prev") != -1 && num == 0){
    //         sliderItem[0].style.opacity = "0";
    //         num = 2;
    //         sliderItem[num].style.opacity = "1";

            
    //     }

    //     if(target.className.indexOf("next") != -1 && num != 2){
    //         sliderItem[num + 1].style.opacity = "1";
    //         sliderItem[num].style.opacity = "0";
    //         num = num + 1;
    //     }else if(target.className.indexOf("next") != -1 && num == 2){
    //         sliderItem[num].style.opacity = "0";
    //         num = 0;
    //         sliderItem[num].style.opacity = "1";
    //     }
    // });
});
