
$('.homepage-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    center: true,
})

$(window).on('scroll', function () {
    if (window.scrollY > 0) {
        $('.navigation').addClass('move')
    }
    else {
        $('.navigation').removeClass('move')
    }
})

$('.hamburger').on('click', function () {
    $('.hamburger').toggleClass('active');
    $('body').toggleClass('menu-open');
})

AOS.init();