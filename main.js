function popup(imgsrc){ // function to display popup image of clicked image
    // Get modal
    var modal = document.getElementById("myModal");

    // Get image and insert it inside modal
    var modalImg = document.getElementById("img");
    modal.style.display = "block";
    modalImg.src = imgsrc;

    // <span> element to close the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
}

//slideshow code
let slideIndex = [1,1,1,1,1];
let slideID = ["skSite-slides", "skHome-slides", "skAbout-slides", "skService-slides", "skGraphics-slides"]
showSlides(1, 0); //Success Koach general slideshow 
showSlides(1, 1); //Success Koach homepage slideshow 
showSlides(1, 2); //Success Koach about page slideshow 
showSlides(1, 3); //Success Koach service page slideshow 
showSlides(1, 4); //Success Koach graphics assets slideshow 

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideID[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "flex";
}