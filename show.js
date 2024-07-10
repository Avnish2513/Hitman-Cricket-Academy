// sign up form

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



let slideIndex1=1
show()

function show(){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none"
    }
    slideIndex1++
    if(slideIndex1 > slides.length){
        slideIndex1=1
    }
    slides[slideIndex1-1].style.display = "block"
    setTimeout(show,2000)
}

let slideIndex=1
slideshow(slideIndex);

//prev and next control
function plusSlides(n){
    slideshow(slideIndex+=n)
}
 function currentSlide(n) {
   slideshow(slideIndex = n);
}

//show the current slide
function slideshow(n){
    let i;
    let slides=document.getElementsByClassName("mySlides");
    if (n>slides.length){
        slideIndex=1
    }
    if (n<1){
        slideIndex=slides.length
    }
    for (i=0;i<slides.length;i++){
        slides[i].style.display = "none"
    }
    slides[slideIndex-1].style.display = "block"
}

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// GALLERY IMGAE-MODAL

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg-1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}



// Get the modal
var modal = document.getElementById("myModal-2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg-2");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the modal
var modal = document.getElementById("myModal-3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg-3");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the modal
var modal = document.getElementById("myModal-4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg-4");
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}