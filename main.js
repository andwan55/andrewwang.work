function popup(imgid){ // function to display popup image of clicked image
    // Get modal
    var modal = document.getElementById("myModal");

    // Get image and insert it inside modal
    var modalImg = document.getElementById("img");
    modal.style.display = "block";
    modalImg.src = document.getElementById(imgid).src;

    // <span> element to close the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
}
