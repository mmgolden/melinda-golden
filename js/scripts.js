// Smooth scroll
var scroll = new SmoothScroll('a[href*="#"]');

// Current year
var currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

// Hide mobile menu on click
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

// Slick
$('.slick').slick({
    dots: true, 
    infinite: true
});