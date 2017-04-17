$(document).ready(function() {
    $('.dropdown').on('show.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    $('.dropdown').on('hide.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

    /*
    $('.salud-area').on('click', function(e) {
        if ($(window).width() > 479) {
            if ($('.salud-area-extra').is(":hidden")) {
                $('.industrial-area-extra').stop(true, true).slideUp();
                $('.salud-area-extra').stop(true, true).slideDown();
            } else {
                $('.salud-area-extra').stop(true, true).slideUp();
            }
        } else if ($('.mobile').is(":hidden")) {
            $('.mobile').stop(true, true).slideDown();
            $('.industrial-area-extra').stop(true, true).slideUp();
        } else {
            $('.mobile').stop(true, true).slideUp();
        }
    });*/
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
})