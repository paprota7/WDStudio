(function($) {

    $.fn.popup = function( options ) {

        // Establish our default settings
        var settings = $.extend({
            text         : 'Hello, World!',
        }, options);

        return this.each( function() {
            var _this = $(this);
            _this.prepend('<div class="popup__close" data-popup-target="' + _this.attr('id') + '"><span class="bar"></span><span class="bar"></span></div>');

            $('[data-popup-target="' + _this.attr('id') + '"]').click(function () {
                if (_this.hasClass('active')) {
                    _this.removeClass('active').animate({
                        'height' : '0'
                    }, 500, function () {
                        _this.removeAttr('style');
                    });
                } else {
                    _this.addClass('active').css({
                        'height' : 0,
                        'display' : 'block',
                        'overflow' : 'hidden'
                    }).animate({
                        'height' : '100%'
                    }, 500);
                }
            });
        });

    }

}(jQuery));
