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
            speed: 600,
            fx: "carousel",
            timeout: 0,
            prev: cycle_prev,
            next: cycle_next,
            pager: pager,
        });

    });
    
}); 