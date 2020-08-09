window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var logoImage = document.getElementById("logo-image");

function myFunction() {
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
    logoImage.classList.add("logo-image-scroll");
  } else {
    header.classList.remove("sticky");
    logoImage.classList.remove("logo-image-scroll")
  }
}