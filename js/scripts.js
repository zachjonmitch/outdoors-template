$(document).ready(function() {
    $(window).scroll(function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 0;
        if (y_scroll_pos > scroll_pos_test) {
            $('#textRight').css({'background': '#52796F', 'margin': '0', 'bottom': '19%'});
            $('#textLeft').css('display', 'none');
            $('.brandLeft').css('display', 'block');
            $('#menuRight').css('display', 'block');

            $('#iconsLeft li').css('margin', '0 0 17px 0');
            $('#iconsLeft li:first-child').css({'background': 'hsl(221, 44%, 41%)'});
            $('#iconsLeft li:nth-child(2)').css({'background': 'hsl(195, 100%, 60%)'});
            $('#iconsLeft li:nth-child(3)').css({'background': 'hsl(7, 71%, 55%)'});
            $('#iconsLeft li:last-child').css({'background': 'hsl(199, 85%, 36%)'});

            $('nav ul, nav button').addClass('animated fadeOutUp');
            $('.wrapper .overlay').css('opacity', '.9');
        } else {
            $('#textRight').css({'background': 'none', 'margin': '0 20px 0 0', 'bottom': '23%'});
            $('#textLeft').css('display', 'block');
            $('.brandLeft').css('display', 'none');
            $('#menuRight').css('display', 'none');

            $('#iconsLeft li').css('margin', '0 0 30px 9px');
            $('#iconsLeft li:first-child').css({'background': 'none'});
            $('#iconsLeft li:nth-child(2)').css({'background': 'none'});
            $('#iconsLeft li:nth-child(3)').css({'background': 'none'});
            $('#iconsLeft li:last-child').css({'background': 'none'});

            $('nav ul, nav button').removeClass('animated fadeOutUp').addClass('animated fadeInDown');
            $('.wrapper .overlay').css('opacity', '.2');
        }
    });

    $('.articles').on('mouseenter', function() {
        $(this).find('h1, h2').css('display', 'block').addClass('animated flipInX');
        $(this).find('.overlay').css('opacity', '.8');

        $(this).find('h1, h2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated flipInX');
        });
    });

    $('.articles').on('mouseleave', function() {
        $(this).find('.overlay').css('opacity', '.2');
        $(this).find('h1, h2').css('display', 'none');
    })
});