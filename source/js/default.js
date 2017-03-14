jQuery.noConflict();

(function($, window, document) {
    'use strict';

    window.wdstudio = {
        init: function() {
            this.pagePilling();
        },

        pagePilling: function () {
            $('#page').pagepiling({
                anchors: ['firstPage', 'secondPage'],
                menu: '#menuenu'
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