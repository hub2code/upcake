let lightboxSection = document.querySelector(".lightbox");
let lightboxContainer = document.querySelector(".lightbox__container");
let galleryList = document.querySelector(".gallery__list");
let link = document.querySelector(".lightbox-link");
let img = document.querySelectorAll("img");
let fullImg = document.querySelector(".lightbox__full-image");
let thumbnailList = document.querySelector(".thumbnail-box__list");
let galleryDescr = galleryList.querySelectorAll(".gallery__desc");
let lightboxDescription = document.querySelector(".lightbox__description");
let control = document.querySelector(".lightbox__controls");
let header = document.querySelector(".index-page__header");

document.addEventListener("click", function(e) {
    let docWidth = document.documentElement.clientWidth;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var target  = e.target;
    if(target.tagName == "IMG" && target.parentElement.className == "gallery__content" && docWidth > 1024) {
        lightboxSection.style.display = "block";
        lightboxSection.style.overflowY = "scroll";
        if(docWidth < 1024){
            lightboxContainer.style.maxWidth = "100vw";
            if(scrollTop >= 100){
                lightboxContainer.style.top = scrollTop - header.offsetHeight + "px";
            }else{
                lightboxContainer.style.top = scrollTop + "px";
            }
            
        }else{
            lightboxContainer.style.maxWidth = "86vw";
            lightboxContainer.style.top = scrollTop + "px";
        }
   
    
    var imgBox = document.createElement("img");
    imgBox.setAttribute("src", target.getAttribute('src'));
    imgBox.style.objectFit = "contain";
    imgBox.style.width = "50%";
    imgBox.style.height = "100%";
    fullImg.appendChild(imgBox);
    lightboxDescription.style.width = "50%";
    lightboxDescription.style.color = "#fff";
    lightboxDescription.style.alignSelf = "center";
    lightboxDescription.innerHTML = target.nextElementSibling.nextElementSibling.innerHTML;
       

    for(var i = 0; i < img.length; i++) {
        
        var li = document.createElement("li");
        var imgThumb = document.createElement("img");
        imgThumb.style.width = "15vw";
        imgThumb.style.height = "15vw";
        imgThumb.style.maxHeight = "110px";
        imgThumb.style.maxWidth = "110px";
        imgThumb.style.objectFit = "contain";
        imgThumb.style.margin = "10px";
        imgThumb.style.padding = "5px";
        imgThumb.style.borderRadius = "5px";
        imgThumb.style.border = "thin solid #fff";
        if(target.getAttribute("src") == img[i].getAttribute("src")){
            imgThumb.style.backgroundColor = "#fff";
        }
        imgThumb.setAttribute("src", img[i].getAttribute('src'));
        li.appendChild(imgThumb);
        thumbnailList.appendChild(li);
    }

    var thumbList; 
    
    lightboxSection.addEventListener("click", function(e) {
        var target = e.target;
        if(target.className == "lightbox__controls") {
            lightboxSection.style.display = "none";
            document.body.style.overflowY = "auto";
            thumbnailList.innerHTML = "";
            lightboxDescription.innerHTML = "";
            lightboxDescription.nextElementSibling.remove();
        }

        if(target.nodeName == "IMG"){
            
            thumbList = thumbnailList.querySelectorAll("img");
            for(var i = 0; i < thumbList.length; i++) {
                thumbList[i].style.backgroundColor = "";
                
                if(target.getAttribute("src") == thumbList[i].getAttribute("src") && target.parentElement.nodeName == "LI"){
                    target.style.backgroundColor = "#fff";
                }
            }
            imgBox.setAttribute("src",  target.getAttribute('src'));
            console.log(target.getAttribute('src'));
            for(var i = 0; i < img.length; i++) {
                if(img[i].getAttribute("src") == target.getAttribute('src'))
                    lightboxDescription.innerHTML = img[i].nextElementSibling.nextElementSibling.innerHTML;
            }
        }
    });
    }
    
});
