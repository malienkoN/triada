$(document).ready(function () {

    $('.header__catalog-btn').click(function (event) {
        event.preventDefault();

        $('.catalog-dropdown').fadeToggle();
    });


    $('#tel-dropdown').click(function (event) {
        event.preventDefault();

        $(this).next('.tel-dropdown').fadeToggle();
        $(this).find('.header__action-icon__dropdown').toggleClass('rotate');
    });

    $('#search-dropdown').click(function (event) {
        event.preventDefault();

        $(this).next('.search-dropdown').fadeToggle();
    });


    const nav = $('#nav');
    const navToggle = $('#nav__toggle');

    navToggle.click(function (e) {

        $(this).toggleClass('active');
        nav.fadeToggle();
    });

    $('.owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
    });
});