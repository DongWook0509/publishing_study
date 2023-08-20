$(function () {
    var wind = $(window),
        header  = $('.page-header'),
        headerOffsetTop = header.offset().top;

        console.log(headerOffsetTop); //240

        wind.scroll(function(){
            if($(this).scrollTop() >= headerOffsetTop){
                header.addClass('sticky');
            }else{
                header.removeClass('sticky');
            }
        });

});
