jQuery.noConflict();

(function($, window, document) {
    'use strict';

    window.wdstudio = {
        init: function() {
            this.pagePilling();
            this.clicks();
            this.socials();
        },

        pagePilling: function () {
            $('#page').pagepiling({
                anchors: ['1', '2'],
                navigation: {
                    'textColor': '#000',
                    'bulletsColor': '#fff',
                    'position': 'right',
                    'tooltips': ['Home', 'O nas', 'Portfolio', 'Kontakt']
                },
                menu: '#menu',
                afterLoad: function(anchorLink, index) {
                    if ($('#st-container').hasClass('st-menu-open')) {
                        $('#st-container').removeClass('st-menu-open');
                    }
                }
            });
        },

        socials: function () {
            SocialShareKit.init({
                url: 'http://wdstudio.eu/',
                text: 'Web Development, tylko z WDStudio!'
            });
        },

        clicks: function () {
            $('#go-to-home').on('click', function () {
                $('#page').pagepiling.moveTo(1);
            });

            if ($('#st-container').hasClass('st-menu-open')) {
                $('#st-container').removeClass('st-menu-open');
            }
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
