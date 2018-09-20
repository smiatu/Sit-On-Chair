document.addEventListener("DOMContentLoaded", function(){
    console.log("załadowało");

    var dropLi = document.getElementById("dropLi");
    console.log(dropLi);
    dropLi.addEventListener("mouseover", function(){
        console.log(dropLi.nextElementSibling);
        dropLi.nextElementSibling.style.display = "inline-block";
    })
    dropLi.addEventListener("mouseout", function(){
        dropLi.nextElementSibling.style.display = "none";
    })

    var merchBox = document.querySelectorAll(".merchandise__box");
    console.log(merchBox);
    for(var i=0; i<merchBox.length; i++){
        merchBox[i].addEventListener("mouseover", function(){
            this.children[1].style.display = "none";
        })
        merchBox[i].addEventListener("mouseout", function(){
            this.children[1].style.display = "inline-block";
        })
    }
    var previous = document.querySelector(".previousButton");
    console.log(previous);
    var next = document.querySelector(".nextButton");
    var mainChairImage = document.querySelector(".slideshow .container img");
    console.log(mainChairImage);
    var imageList = document.querySelectorAll(".imageList img");
    console.log(imageList);
    var clickCounter = 0;
    imageList[0].classList.add("visible");

    previous.addEventListener("click", function() {
        imageList[clickCounter].classList.remove("visible");
        clickCounter--;
        if(clickCounter < 0) {
            clickCounter = (imageList.length - 1);
        }
        imageList[clickCounter].classList.add("visible");
    })

    next.addEventListener("click", function(){
        imageList[clickCounter].classList.remove("visible");
        clickCounter++;
        if(clickCounter > imageList.length - 1) {
            clickCounter = 0;
        }
        imageList[clickCounter].classList.add("visible");
    })
})