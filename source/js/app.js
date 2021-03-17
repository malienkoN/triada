$(document).ready(function () {

    $('.header__catalog-btn').click(function (event) {
        event.preventDefault();

        $('.catalog-dropdown').fadeToggle();
    });


    // tel-dropdown
    $('#tel-dropdown').click(function (event) {
        event.preventDefault();

        $(this).next('.popup-fade').fadeToggle();
        $(this).find('.header__action-icon__dropdown').toggleClass('rotate');
        $('body').toggleClass('lock-mobile');
    });

    $('.popup-close').click(function (event) {
       event.preventDefault();

       $(this).parents('.popup-fade').fadeOut();
       $('body').toggleClass('lock-mobile');
    });

    // search-dropdown

    $('#search-dropdown').click(function (event) {
        event.preventDefault();

        $(this).next('.popup-fade').fadeToggle();
        $('body').toggleClass('lock-mobile');
    });


    const nav = $('#nav');
    const navToggle = $('#nav__toggle');

    navToggle.click(function (e) {

        $(this).toggleClass('active');
        nav.fadeToggle();
        $('body').toggleClass('lock');
    });

    $('.slide-one').owlCarousel({
        items: 1,
        loop: true,
        responsive:{
            0:{
                nav:false,
                dots:false
            },
            991:{
                nav:true,
                dots:true
            }
        }
    });

    let i = 1;
    $('.owl-dot').each(function () {
        $(this).find('span').html(i);
        i++;
    });

    // callback
    $('#callback-trigger').click(function (event) {
        event.preventDefault();

        $('#callback').fadeIn();
        $('body').addClass('lock');
    });

    $('.our-service__btn').click(function (event) {
       event.preventDefault();

       $('#callback').fadeIn();
       $('body').addClass('lock');
    });

    $('.product__btn-question').click(function (event) {
        event.preventDefault();

        $('#callback').fadeIn();
        $('body').addClass('lock');
    });

    // cart
    $('#cart-trigger').click(function (event) {
        event.preventDefault();

        $('#cart').fadeIn();
        $('body').addClass('lock');
    });

    // price
    $('#price-trigger').click(function (event) {
        event.preventDefault();

        $('#price').fadeIn();
        $('body').addClass('lock');
    });

    $('.modal-close').click(function (event) {
        event.preventDefault();

        $(this).parents('.modal-fade').fadeOut();
        $('body').removeClass('lock');
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal-fade').fadeOut();
            $('body').removeClass('lock');
        }
    });

    $('.modal-fade').click(function(e) {
        if ($(e.target).closest('.modal').length === 0) {
            $(this).fadeOut();
            $('body').removeClass('lock');
        }
    });

    //card-slider
    $('.slide-two').owlCarousel({
        loop: true,
        items: 3,
        responsive: {
            0: {
                items: 1,
                dots: false,
                margin: 15,
            },

            767: {
                items: 2,
                dots: false,
                margin: 15,
            },

            991: {
                dots: true,
                items: 2,
                margin: 30,
            },

            1199: {
                items: 3,
                margin: 30,
            }
        }
    });

    //photo-gallery
    $('.slide-three').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        navText: ["<img src='../img/prev-arrow.svg' alt=''>", "<img src='../img/next-arrow.svg' alt=''>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
            },

            469: {
                items: 2,
            },

            767: {
              items: 3,
            },

            991: {
                nav: true,
            },

            1199: {
                items: 4,
                nav: true,
            }
        }
    });

    /* tabs */
    $('.tabs__triggers-item').click(function (e) {
        e.preventDefault();

        $('.tabs__triggers-item').removeClass('tabs__triggers-item--active');
        $('.tabs__content-item').removeClass('tabs__content-item--active');

        $(this).addClass('tabs__triggers-item--active');
        $($(this).attr('href')).addClass('tabs__content-item--active');
    });

    $('.tabs__triggers-item:first').click();

    /* /tabs */
});

/* Smooth scroll to the anchors */
{
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', event => {
            event.preventDefault();

            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}