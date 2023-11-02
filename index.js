let nav = document.querySelector('nav');
let carouselWelcomePage = document.getElementById('carouselWelcomePage');
let scrolledPastCarousel = false;
let logo = document.querySelector(".logo-nav"); 


window.addEventListener('scroll', function() {
    if (window.pageYOffset > window.innerHeight && !scrolledPastCarousel) {
        nav.classList.add('bg-dark', 'shadow', 'navbar-light');
        nav.style.height='2.2cm';
        scrolledPastCarousel = true; // Para evitar que se agregue repetidamente
        logo.src="logo-invertido.png";
    } else if (window.pageYOffset <= window.innerHeight && scrolledPastCarousel) {
        nav.classList.remove('bg-dark', 'shadow','navbar-light');
        nav.classList.add('navbar-light');
        nav.style.height='4.2cm';
        scrolledPastCarousel = false; // Para evitar que se elimine repetidamente
        logo.src="logo.png";
    }
});