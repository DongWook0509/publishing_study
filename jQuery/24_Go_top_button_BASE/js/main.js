$(function () {

	$(window).scroll(function(){
        if($(this).scrollTop()>=300){
            $('.go_top').fadeIn();
        }else{
            $('.go_top').fadeOut();
        }
    });

    $('.go_top').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop:0}, 500);
    });
});
