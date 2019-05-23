// JavaScript Document

(function($) {
    // This is the connector function.
    // It connects one item from the navigation carousel to one item from the
    // stage carousel.
    // The default behaviour is, to connect items with the same index from both
    // carousels. This might _not_ work with circular carousels!
    var connector = function(itemNavigation, carouselStage) {
        return carouselStage.jcarousel22('items').eq(itemNavigation.index());
    };

    $(function() {
        // Setup the carousels. Adjust the options for both carousels here.
        var carouselStage      = $('.carousel-stage').jcarousel22();
        var carouselNavigation = $('.carousel-navigation').jcarousel22();

        // We loop through the items of the navigation carousel and set it up
        // as a control for an item from the stage carousel.
        carouselNavigation.jcarousel22('items').each(function() {
            var item = $(this);

            // This is where we actually connect to items.
            var target = connector(item, carouselStage);

            item
                .on('jcarousel22control:active', function() {
                    carouselNavigation.jcarousel22('scrollIntoView', this);
                    item.addClass('active');
                })
                .on('jcarousel22control:inactive', function() {
                    item.removeClass('active');
                })
                .jcarousel22Control({
                    target: target,
                    carousel: carouselStage
                });
        });

        // Setup controls for the stage carousel
        $('.prev-stage')
            .on('jcarousel22control:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarousel22control:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarousel22Control({
                target: '-=1'
            });

        $('.next-stage')
            .on('jcarousel22control:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarousel22control:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarousel22Control({
                target: '+=1'
            });

        // Setup controls for the navigation carousel
        $('.prev-navigation')
            .on('jcarousel22control:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarousel22control:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarousel22Control({
                target: '-=1'
            });

        $('.next-navigation')
            .on('jcarousel22control:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarousel22control:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarousel22Control({
                target: '+=1'
            });
    });
})(jQuery);
