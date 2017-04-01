$(document).ready(function() {
    $(window).scroll(function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 100;
        if (y_scroll_pos > scroll_pos_test) {
            $('#textLeft, #textRight, #iconsLeft a').css('color', '#52796F');
            $('nav').css('display', 'none');
            $('.wrapper .overlay').css('opacity', '.8');
        } else {
            $('#textLeft, #textRight, #iconsLeft a').css('color', 'white');
            $('nav').css('display', 'block');
            $('.wrapper .overlay').css('opacity', '.3');
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