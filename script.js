const userIcon = document.getElementById('user-icon');
const loginFormContainer = document.getElementById('login-form-container');

userIcon.addEventListener('click', () => {
  loginFormContainer.style.display = 'block';
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.closest('#user-icon') && !target.closest('#login-form-container')) {
    loginFormContainer.style.display = 'none';
  }
});

var images = document.querySelectorAll("#image-slider img");
  var currentImageIndex = 0;
  var interval = setInterval(nextImage, 5000);

  function nextImage() {
    images[currentImageIndex].classList.remove("active");
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    images[currentImageIndex].classList.add("active");
  }

  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByTagName("img");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].className = "";
    }
    slides[slideIndex-1].className = "active";
  }
  
// JavaScript para mostrar/ocultar el menú móvil
const mobileMenuButton = document.getElementById('mobile-menu-button');
const navContainer = document.querySelector('.nav-container');

mobileMenuButton.addEventListener('click', function() {
  navContainer.classList.toggle('show-menu');
});
