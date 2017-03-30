jQuery.noConflict();

(function($, window, document) {
    'use strict';

    window.wdstudio = {
        init: function() {
            this.preloader();
            this.socials();
            this.parallax();
            this.hero();
            this.navigation();
            this.fixHeader();
        },

        navigation: function() {
            var toggle = $('.navigation__toggle'),
                menu = $('.navigation__menu'),
                status = true;

            toggle.on('click', function() {
                if (status) {
                    status = false;
                    menu.toggle('slide', {
                        direction: 'left'
                    }, 500, function () {
                        status = true;
                    });
                    toggle.toggleClass('navigation__toggle--active')
                }
            });
        },

        fixHeader: function() {
            var logo = $('.header__logo'),
                header = $('.header');

            var setHeader = function() {
                if ($(window).scrollTop() <= 100) {
                    if (header.hasClass('header--fixed')) {
                        header.removeClass('header--fixed')
                    }
                    logo.css('top', (100 - $(window).scrollTop()));
                } else {
                    if (!header.hasClass('header--fixed')) {
                        logo.removeAttr('style');
                        header.addClass('header--fixed')
                    }
                }
            };

            setHeader();

            $(window).scroll(function() {
                setHeader();
            });
        },

        preloader: function() {
            $('.preloader').hide('fade', 1000);
        },

        parallax: function() {
            $('.section__hero').parallax({
                speed: 0.1,
                imageSrc: '../images/background/background-header.jpg'
            });
        },

        socials: function() {
            SocialShareKit.init({
                url: 'http://wdstudio.eu/',
                text: 'Web Development, tylko z WDStudio!'
            });
        }

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
