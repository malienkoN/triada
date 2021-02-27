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

    // $(document).keydown(function(e) {
    //     if (e.keyCode === 27) {
    //         e.stopPropagation();
    //         $('.popup-fade').fadeOut();
    //     }
    // });
    //
    // $('.popup-fade').click(function(e) {
    //     if ($(e.target).closest('.popup').length === 0) {
    //         $(this).hide();
    //     }
    // });

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

    $('.owl-carousel').owlCarousel({
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
});