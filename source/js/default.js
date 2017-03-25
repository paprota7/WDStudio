jQuery.noConflict();

(function($, window, document) {
    'use strict';

    window.wdstudio = {
        init: function() {
            this.pagePilling();
            this.clicks();
            this.socials();
            this.tabs();
            $('.preloader').hide('fade', 1000);
            $('#dg-container').gallery();
            $('.popup').popup();
        },

        pagePilling: function() {
            $('#page').pagepiling({
                anchors: ['home', 'ability', 'about', 'portfolio', 'contact'],
                navigation: {
                    'textColor': '#000',
                    'bulletsColor': '#000',
                    'position': 'right',
                    'tooltips': ['Strona Główna', 'Co robimy', 'O nas', 'Portfolio', 'Kontakt']
                },
                menu: '#menu',
                afterLoad: function(anchorLink, index) {
                    if ($('#st-container').hasClass('st-menu-open')) {
                        $('#st-container').removeClass('st-menu-open');
                    }
                }
            });
        },

        socials: function() {
            SocialShareKit.init({
                url: 'http://wdstudio.eu/',
                text: 'Web Development, tylko z WDStudio!'
            });
        },

        clicks: function() {
            $('.go-to-section').on('click', function() {
                $('#page').pagepiling.moveTo($(this).attr('href').replace('#', ''));
            });

            if ($('#st-container').hasClass('st-menu-open')) {
                $('#st-container').removeClass('st-menu-open');
            }
        },

        tabs: function() {
            var tabs = $('.tabs'),
                nav = tabs.find('.tabs__nav'),
                content = tabs.find('.tabs__content'),
                navMode = '',
                status = true;

            content.find('.tabs__content__item:first-child').addClass('active');
            nav.append('<span class="dot"></span>').find('.dot').css('top', nav.find('li:first-child a').position().top + (nav.find('li:first-child a').outerHeight() / 2));

            var navResize = function() {
                if ($(window).outerWidth(true) <= (nav.outerWidth() + 30)) {
                    if (navMode === 'desktop' || navMode === '') {
                        var items = nav.find('> ul > li'),
                            width = (100 / items.length) + '%';

                        navMode = 'mobile';

                        items.css('width', width);
                    }
                } else {
                    if (navMode === 'mobile' || navMode === '') {
                        var items = nav.find('> ul > li');

                        navMode = 'desktop';

                        items.removeAttr('style');
                    }
                }
            }

            nav.find('a').on('click', function(e) {
                e.preventDefault();
                var clicked = $(this),
                    dot = nav.find('.dot'),
                    next = content.find($(this).attr('href')),
                    previous = content.find('.tabs__content__item.active');

                if (!next.hasClass('active') && next.length > 0 && status) {
                    status = false;
                    dot.animate({
                        top: clicked.position().top + (clicked.outerHeight() / 2)
                    }, 1000);
                    previous.hide('slide', {
                        direction: 'right'
                    }, 500, function() {
                        previous.removeClass('active');
                        next.show('slide', {
                            direction: 'right'
                        }, 500, function() {
                            next.addClass('active');
                            status = true;
                        });
                    });
                }
            });

            navResize();

            $(window).on('resize', function() {
                navResize();
            });
        }

        // scrollEvent: function() {
        // }
        //
        // resizeEvent: function() {
        // }
        //
        // clicks: function () {
        // $('body').on('click', function () {
        //
        // });
        // }
    };


    $(document).ready(function() {
        wdstudio.init();
    });

    // $(document).on('scroll', function () {
    //     wdstudio.scrollEvent();
    // });
    //
    // $(window).on('resize', function () {
    //     wdstudio.resizeEvent();
    // });

})(jQuery, window, document);
