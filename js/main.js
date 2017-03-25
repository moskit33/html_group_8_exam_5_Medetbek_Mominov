$(".slider").slick({

});

$(document).ready(function(){
    $(".navigation_header_menu a").on("click", function(event) {
        event.preventDefault();
        var id  = $(this).attr('href');

        var top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1000);
    });
});