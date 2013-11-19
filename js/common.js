$(document).ready(function() {

    $(document).click(function() {
        $(".js-datepicker").hide();
        $(".js-show-calendar").removeClass('is-active');
        $(".js-choose").parent().removeClass("is-active");
        $(".js-choose-list").hide();
        $('.js-select-list').hide();
        $(".js-select").parent().removeClass("is-active");
        $(".js-drop-key").parent().removeClass("is-active");
        $(".js-tab-key").removeClass("is-active");
        $(".js-sel-key").removeClass("is-active");
        $('.js-tab-cont').hide();
    });

// universal select list
    function select() {
        $(".js-select").each(function(){
            var select_list = $(this).parent().find(".js-select-list");
            $(this).click(function(){
                if ($(this).parent().hasClass("is-active")) {
                    $(this).parent().removeClass("is-active");
                    select_list.hide();
                }
                else {
                    //$(".js-select").parent().removeClass("is-active");
                    $(this).parent().addClass("is-active");
                    //$(".js-select-list").hide();
                    select_list.show();
                }
            });
            
            select_list.find("li").click(function() {
                var id = $(this).attr("data-id");
                var text = $(this).text();
                $(this).parent().parent().find(".js-select").text(text);
                $(this).parent().parent().find("input").val(id);
                $(this).parent().hide();
                $(this).parent().parent().removeClass("is-active");
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

    $(".js-sel-key").click(function(event){
        if ($(this).hasClass("is-active")) {
            $(this).removeClass("is-active");
        }
        else {
            $(".js-sel-key").removeClass("is-active");
            $(this).addClass("is-active");
        }
        $('.js-show-calendar').removeClass("is-active");
        $(".js-datepicker").hide();
        event.stopPropagation();
    });
    
    $(".js-sel-list li").click(function(event) {
        var id = $(this).attr("data-id");
        var text = $(this).text();
        $(this).parent().parent().find(".js-sel-text").val(text);
        $(this).parent().parent().find(".js-sel-input").val(id);
        //$(this).parent().hide();
        $(this).parent().parent().removeClass("is-active");
        event.stopPropagation();
    });
    // $('.js-sel-text').click(function(event){
    //     event.stopPropagation();
    // });

    $(".js-all-city").click(function(){
        $(".js-city-list").toggle();
        $('html, body').animate({
            scrollTop: $(".js-city-list").offset().top
        }, 500);
        return false;
    });
    $(".js-to-comments").click(function(){
        $('html, body').animate({
            scrollTop: $(".js-comment-target").offset().top
        }, 500);
        return false;
    });
    $(".js-to-top").click(function(){
        $('html, body').animate({
         scrollTop: 0
        }, 200);
    });

// ------ jquery datepicker ui
    if ($(".js-datepicker").length > 0) {
        $(".js-datepicker").each(function(){
            $(this).hide();
            $.datepicker.regional['ru'] = {
                closeText: 'Закрыть',
                prevText: '&#x3c;Пред',
                nextText: 'След&#x3e;',
                currentText: 'Сегодня',
                monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                'Июл','Авг','Сен','Окт','Ноя','Дек'],
                dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
                dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
                dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
                weekHeader: 'Не',
                dateFormat: 'dd MM',
                firstDay: 1,
                isRTL: false,
                minDate: '0',
                showMonthAfterYear: false,
                yearSuffix: ''};
            $.datepicker.setDefaults($.datepicker.regional['ru']);

            $(".js-datepicker-from").datepicker({
              showOtherMonths: true,
              onSelect: function( selectedDate ) {
                $(".js-from").val(selectedDate);
                $(".js-show-calendar").removeClass("is-active");
                $(".js-datepicker").hide();
                $(".js-datepicker-to").datepicker( "option", "minDate", selectedDate );
              }
            });
            $(".js-datepicker-to").datepicker({
              showOtherMonths: true,
              onSelect: function( selectedDate ) {
                $(".js-to").val(selectedDate);
                $(".js-show-calendar").removeClass("is-active");
                $(".js-datepicker").hide();
                $(".js-datepicker-from").datepicker( "option", "maxDate", selectedDate );
              }
            });
        });

        $(".js-show-calendar").click(function(){
            if ($(this).hasClass("is-active")) {
                $(this).removeClass("is-active");
                $(".js-datepicker").hide();
            }
            else {
                $(".js-show-calendar").removeClass("is-active");
                $(this).addClass("is-active");
                $(".js-datepicker").hide();
                $(this).find(".js-datepicker").show();
            }
        });
        $('.js-datepicker').click(function(event){
            event.stopPropagation();
        });
        $('.js-show-calendar').click(function(event){
            $(".js-sel-key").removeClass("is-active");
            event.stopPropagation();
        });                 
    }

// ------ location
    $('.js-top-popup').click(function() {
        $('.js-top-popup').removeClass('is-active');
        $(this).toggleClass('is-active');
    });

// ---- choose number
    function choose_number() {
            var number = $(".js-choose-number");
            number.each(function(){
                var max_number = +($(this).parent().parent().attr("data-max-number"));
                var plus = $(this).parent().parent().find(".js-plus");
                var minus = $(this).parent().parent().find(".js-minus");
                plus.bind("click", function(){
                    var val = +($(this).parent().find(number).text());
                    if (val >= max_number) {
                        return false
                    }
                    else {
                        val += 1;
                        $(this).parent().find(".choose__input").val(val);
                        $(this).parent().find(number).text(val);
                    }
                });
                minus.bind("click", function(){
                    var val = +($(this).parent().find(number).text());
                    if (val > 1) {
                        val -= 1;
                        $(this).parent().find(".choose__input").val(val);
                        $(this).parent().find(number).text(val);
                    }
                    else {
                        return false;
                    }
                });
            });
            

        $(".js-choose-key").bind("click", function(){
            $(this).parent().toggleClass("is-active");
            $(this).parent().find(".js-choose-list").toggle();
        });
        $('.js-choose-list').click(function(event){
            event.stopPropagation();
        });
        $('.js-choose').click(function(event){
            event.stopPropagation();
        });      
        $(".js-choose").each(function(){
            var choose_list = $(this).parent().find(".js-choose-list");
            $(this).click(function(){
                if ($(this).parent().hasClass("is-active")) {
                    $(this).parent().removeClass("is-active");
                    choose_list.hide();
                }
                else {
                    $(".js-choose").parent().removeClass("is-active");
                    $(this).parent().addClass("is-active");
                    $(".js-choose-list").hide();
                    choose_list.show();
                }
            });
            
            choose_list.find("li").click(function(){
                var id = $(this).attr("data-id");
                var text = $(this).text();
                $(this).parent().parent().find(".js-choose-number").text(text);
                $(this).parent().parent().find("input").val(id);
                $(this).parent().hide();
                $(this).parent().parent().removeClass("is-active");
            });
        });
    }
    choose_number();
 
    $(".js-extend-link").click(function(){
        $(this).parent().find(".js-extend").toggleClass("is-active");
    });


    function drop_list() {
        $(".js-drop-key").each(function(){
            var more = $(this).parent().find(".js-drop-more");
            var hide = $(this).parent().find(".js-drop-hide");
            var list = $(this).parent().find(".js-drop-list");
            $(this).bind("click",function(){
                $(this).parent().toggleClass("is-active");
            });
            more.bind("click",function() {
                $(this).parent().parent().addClass("is-extend");
            })
            hide.bind("click",function() {
                $(this).parent().parent().removeClass("is-extend");
            })
        });
        $('.js-drop-list').click(function(event){
            event.stopPropagation();
        });
        $('.js-drop-key').click(function(event){
            event.stopPropagation();
        });
    }
    drop_list();


    function init_cycle() {
        if ($(".js-slider").length > 0) {

            $(".js-slider").each(function(){
                var slider_1 = $(this).find('.js-cycle-1');
                var slider_2 = $(this).find('.js-cycle-2');
                var prev_nav = $(this).find('.js-cycle-prev');
                var next_nav = $(this).find('.js-cycle-next');
                slider_2.cycle({
                    prev: prev_nav,
                    next: next_nav
                });
                slider_1.cycle();

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

    $(".js-close").bind("click", function(){
        $(this).parent().hide();
        $(".js-overlay").hide();
    });
    $('.js-popup').click(function(event){
        event.stopPropagation();
    });
    $(".js-overlay").bind("click", function(){
        $(this).hide();
        $('.js-popup').hide();
    });


    function tab() {
        $(".js-tab-key").bind("click",function(event){
            if ($(this).hasClass("is-active")) {
                $(this).removeClass("is-active");
                $(".js-tab-cont").hide();
            }
            else {
                $(".js-tab-key").removeClass("is-active");
                $(".js-tab-cont").hide();
                $(this).addClass("is-active");
                var id = $(this).attr("data-tab");
                $("."+id).show();
            }
            event.stopPropagation();
            
        });
        $('.js-tab-cont').click(function(event){
            event.stopPropagation();
        });
    }
    tab();
    
    var tooltip = $(".js-tooltip");
    tooltip.hover(
        function(){
            $(this).show();
        },
        function() {
            $(this).hide()
        }
    );
    $(".js-with-tooltip").hover(
        function(){
            var left = $(this).offset().left;
            var top = $(this).offset().top + $(this).outerHeight();
            var html = $(this).attr("data-info");
            tooltip.children().html(html); 
            tooltip.css({
                left: left,
                top: top
            });
            //console.log(position);
            tooltip.fadeIn("fast");
        },
        function() {
            tooltip.hide()
        }
    );

    // $(".btn-del").click(function(){
    //     $(this).parent().remove();
    //     $(".js-masonry").masonry( 'reloadItems' );
    // }); 
}); 