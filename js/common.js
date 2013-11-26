$(document).ready(function() {

    // $(document).click(function() {
    //     $(".js-datepicker").hide();
    //     $(".js-show-calendar").removeClass('is-active');
    //     $(".js-choose").parent().removeClass("is-active");
    //     $(".js-choose-list").hide();
    //     $('.js-select-list').hide();
    //     $(".js-select").parent().removeClass("is-active");
    //     $(".js-drop-key").parent().removeClass("is-active");
    //     $(".js-tab-key").removeClass("is-active");
    //     $(".js-sel-key").removeClass("is-active");
    //     $('.js-tab-cont').hide();
    // });

    $('.js-cycle').each(function(){
        var cycle_prev = $(this).parent().find(".js-prev");
        var cycle_next = $(this).parent().find(".js-next");
        var pager = $(this).parent().parent().find(".js-pager");
        $(this).cycle({
            speed: 200,
            fx: "carousel",
            timeout: 0,
            prev: cycle_prev,
            next: cycle_next,
            pager: pager,
        });

    });

    $(".js-search-example").click(function (){
        var text = $(this).text();
        $(this).parents(".header__search").find(".input").val(text);
    })
    

    function init_cycle() {
        if ($(".js-slider").length > 0) {

            $(".js-slider").each(function(){
                var slider_1 = $(this).find('.js-cycle-1');
                var slider_2 = $(this).find('.js-cycle-2');
                var prev_nav = $(this).find('.js-cycle-prev');
                var next_nav = $(this).find('.js-cycle-next');
                slider_1.cycle({
                    prev: prev_nav,
                    next: next_nav
                });
                slider_2.cycle();

                var slideshows = $(this).find('.js-cycle').on('cycle-next cycle-prev', function(e, opts) {
                    // advance the other slideshow
                    slideshows.not(this).cycle('goto', opts.currSlide);
                });

                slider_2.find(".cycle-slide").click(function(){
                    var index = slider_2.data('cycle.API').getSlideIndex(this);
                    slideshows.cycle('goto', index);
                });
            });
        }
    }
    init_cycle();
    
}); 