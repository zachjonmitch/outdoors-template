$(document).ready(function() {
    var $brandLeft = $('.brandLeft');
    var $textRight = $('#textRight');
    var $textLeft = $('#textLeft');
    var $menu = $('.menu');
    var $navAnimate = $('nav').find('ul, button');
    var $headOverlay = $('.wrapper').find('.overlay');
    var $about = $('#about');
    var $stories = $('#stories');
    var $volumes = $('#volumes');
    var $contribute = $('#contribute');
    var $articles = $('.articles');

    $(window).scroll(function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 0;
        if (y_scroll_pos > scroll_pos_test && window.matchMedia('(min-width: 1024px)').matches) {
            $textRight.css({'background': '#52796F', 'margin': '0', 'bottom': '19%'});
            $brandLeft.css('display', 'block');
            $textLeft.css('display', 'none');
            $menu.css('display', 'block');

            $('#iconsLeft li').css('margin', '0 0 17px 0');
            $('#iconsLeft li:first-child').css({'background': 'hsl(221, 44%, 41%)'});
            $('#iconsLeft li:nth-child(2)').css({'background': 'hsl(195, 100%, 60%)'});
            $('#iconsLeft li:nth-child(3)').css({'background': 'hsl(7, 71%, 55%)'});
            $('#iconsLeft li:last-child').css({'background': 'hsl(199, 85%, 36%)'});

            $navAnimate.addClass('animated fadeOutUp');
            $headOverlay.css('opacity', '.9');
        } else if (y_scroll_pos === scroll_pos_test && window.matchMedia('(min-width: 1024px)').matches) {
            $textRight.css({'background': 'none', 'margin': '0 20px 0 0', 'bottom': '23%'});
            $textLeft.css('display', 'block');
            $brandLeft.css('display', 'none');
            $menu.css('display', 'none');

            $('#iconsLeft li').css('margin', '0 0 30px 9px');
            $('#iconsLeft li:first-child').css({'background': 'none'});
            $('#iconsLeft li:nth-child(2)').css({'background': 'none'});
            $('#iconsLeft li:nth-child(3)').css({'background': 'none'});
            $('#iconsLeft li:last-child').css({'background': 'none'});

            $navAnimate.removeClass('animated fadeOutUp').addClass('animated fadeInDown');
            $headOverlay.css('opacity', '.2');
        } else if (y_scroll_pos > scroll_pos_test && window.matchMedia('(max-width: 1024px)').matches) {
            $brandLeft.css('display', 'block');
            $menu.css('display', 'none');
            $textLeft.css('display', 'none');
            $headOverlay.css('opacity', '.9');
        } else {
            $headOverlay.css('opacity', '.2');
            $menu.css('display', 'none');
        }
    });

    $about.hover(function() {
        $(this).text('ABOUT').css('width', '80px');
    }, function() {
        $(this).text('A').css('width', '41px');
    });

    $stories.hover(function() {
        $(this).text('STORIES').css('width', '90px');
    }, function() {
        $(this).text('S').css('width', '41px');
    });

    $volumes.hover(function() {
        $(this).text('VOLUMES').css('width', '100px');
    }, function() {
        $(this).text('V').css('width', '41px');
    });

    $contribute.hover(function() {
        $(this).text('CONTRIBUTE').css('width', '120px');
    }, function() {
        $(this).text('C').css('width', '41px');
    });


    $articles.hover(function() {
        $(this).find('h1, h2').css('display', 'block').addClass('animated flipInX');
        $(this).find('.overlay').css('opacity', '.8');

        $(this).find('h1, h2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated flipInX');
        });
    }, function() {
        $(this).find('.overlay').css('opacity', '.2');
        $(this).find('h1, h2').css('display', 'none');
    });
});