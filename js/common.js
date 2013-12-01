$(document).ready(function() {

    $(document).click(function() {
        $(".js-drop ul").hide();
    });

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
        // cycle_prev.click(function(){
        //     var index = slider_2.data('cycle.API').getSlideIndex(this);
        //     slideshows.cycle('goto', index);
        // });

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

                var slideshows = $(this).find('.js-slider-cycle').on('cycle-next cycle-prev', function(e, opts) {
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


    function tab() {
        var tab_link = $(".js-tab a");
        var tab_cont = $(".js-tab-cont");
        $(".js-tab1").show();
        tab_link.bind("click", function() {
            var index = $(this).attr("href");

            tab_link.removeClass("is-active");
            $(this).addClass("is-active");

            tab_cont.hide();
            $("."+index).slideDown("fast");
            return false;
        });
    }
    tab();

    function drop_list() {
       var drop = $(".js-drop");
        drop.bind("click", function(event) {
            $(this).find("ul").slideToggle("fast");
            event.stopPropagation();
        });
        drop.find("li").bind("click", function(){
            var id = $(this).attr("data-id");
            var text = $(this).text();
            $(this).parents(drop).find("button span").text(text);
            $(this).parents(drop).find("input").val(id);
        });
    }
    drop_list();


    function ui_slider() {
        $(".js-ui-slider").each(function(){
            var slider = $(this).find(".js-ui-slider-main");
            var input_from = $(this).find(".js-ui-slider-from");
            var input_to = $(this).find(".js-ui-slider-to");
            $(this).find(".ui-slider-handle").html("<span></span>");
            var handle_0 = $(this).find(".ui-slider-range").next().find("span");
            var handle_1 = $(this).find(".ui-slider-range").next().next().find("span");
            slider.slider({
                range: true,
                min: 0,
                max: 75000,
                step: 200,
                values: [ 7600, 50000 ],
                slide: function( event, ui ) {
                    input_from.val(ui.values[ 0 ]);
                    input_to.val(ui.values[ 1 ]);
                    handle_0.text(ui.values[ 0 ]);
                    handle_1.text(ui.values[ 1 ]);
                }
            });
            console.log(handle_0);
            console.log(handle_1);
            handle_0.text(slider.slider( "values", 0 ));
            handle_1.text(slider.slider( "values", 1 ));
            input_from.val(slider.slider( "values", 0 ));
            input_to.val(slider.slider( "values", 1 ));
        });
    }
    ui_slider();

     function select() {
        $(".js-select").each(function(){
            var select_list = $(this).parent().find(".js-select-list");
            var text = select_list.find("li").first().text();
            $(this).find(".js-select-text").text(text);
            $(this).click(function(){
                select_list.slideToggle("fast");
                $(this).toggleClass("is-active");
            });
            select_list.find("li").click(function() {
                var id = $(this).attr("data-id");
                var text = $(this).text();
                $(this).parent().parent().find(".js-select-text").text(text);
                $(this).parent().parent().find(".js-select-input").val(id);
                $(this).parent().slideUp("fast");
                $(this).parents(".js-select").removeClass("is-active");
            });
        });
    }
    select();
    $('.js-select-list').click(function(event){
        event.stopPropagation();
    }); 
    $('.js-select').click(function(event){
        event.stopPropagation();
    });

    function accordion() {
        $(".js-accordion-list").hide();
        $(".js-accordion-title").click(function(){
            $(this).toggleClass("is-active");
            $(this).parents(".js-accordion").find(".js-accordion-list").slideToggle("fast");
        });
    }
    accordion();


    $(".js-del-item-row").bind("click", function(){
        $(this).closest('.item-row').remove();
    });

    $(".js-del-busket-item").bind("click", function(){
        $(this).closest('.basket').remove();
    });

    $(".js-del-busket-item").bind("click", function(){
        $(this).closest('.basket').remove();
    });

    

    var overlay = $(".js-overlay");
    $(".js-close-popup").click(function (){
        $(this).parents(".js-popup").hide();
        overlay.hide();
    });
    overlay.click(function(){
        $(this).hide();
        $(".js-popup").hide();
    });

    $(".js-enter-link").click(function (){
        $(".js-popup-enter").show();
        overlay.show();
        return false;
    });
    $(".js-reg-link").click(function (){
        $(".js-popup-reg").show();
        overlay.show();
        return false;
    });

    function choose() {
        var number = $(".js-choose");
        number.each(function(){
            var max_number = +($(this).attr("data-max-number"));
            var input = $(this).find("input");
            var plus = $(this).find(".js-plus");
            var minus = $(this).find(".js-minus");
            plus.bind("click", function(){
                var val = +(input.val());
                if (val >= max_number) {
                    return false
                }
                else {
                    val += 1;
                    input.val(val);
                }
            });
            minus.bind("click", function(){
                var val = +(input.val());
                if (val > 1) {
                    val -= 1;
                    input.val(val);
                }
                else {
                    return false;
                }
            });
        });
    }
    choose();
    
    function compare() {
        $(".js-compare th").each(function(i){
            $(this).addClass("js-cell"+i);
        });
        $(".js-compare tr").each(function(){
            $(this).find("td").each(function(i){
                $(this).addClass("js-cell"+i);
            });
        });
        $(".js-del-compare").click(function(){
            var el = $(this).parent().parent().attr("class");
            $("."+el).remove();
        });
    }
    compare();

    $('.js-checkbox-group').on('change', 'input[type=checkbox]', function(){
        $(this).parents(".js-checkbox-group").find('.js-checkbox-extend').toggleClass('is-hidden');
    });

}); 