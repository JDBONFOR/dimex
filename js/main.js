$(document).ready(function() {
    $('.dropdown').on('show.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    $('.dropdown').on('hide.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
    $('.salud-area').on('click', function(e) {
        if ($('.salud-area-extra').is(":hidden")) {
            $('.industrial-area-extra').stop(true, true).slideUp();
            $('.salud-area-extra').stop(true, true).slideDown();
            $(window).scrollTop(
                $(document).height() - $(window).height()
            );
        } else {
            $('.salud-area-extra').stop(true, true).slideUp();
        }
    });
    $('.industrial-area').on('click', function(e) {
        if ($('.industrial-area-extra').is(":hidden")) {
            $('.industrial-area-extra').stop(true, true).slideDown();
            $('.salud-area-extra').stop(true, true).slideUp();
        } else {
            $('.industrial-area-extra').stop(true, true).slideUp();
        }
    });

    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: false
        }
    });
})