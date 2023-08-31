$(function(){

    var container = $('.full-bg');

    //윈도우에 사이즈가 바뀌면 할일 
    $(window).resize(function(){
        var currentWindow = $(this),
        //브라우저의 비율 구하기  : 브라우저 너비/ 브라우저 높이
            windowWidth  = currentWindow.width();
            windowheight = currentWindow.height(); 
            broswerRatio = windowWidth/windowheight;
            console.log(broswerRatio); //0.3657844990548204

            //이미지의 비율 
            imageRatio = 854/480;

            if(imageRatio > broswerRatio){
                container.css({
                    height : '100%',
                    width : windowheight * imageRatio, //현재윈도우 높이 x 원래 이미지 비율 
                    left : (windowWidth - windowheight * imageRatio) /  2, //(브라우저 너비 - 이미지 너비)/2
                    top: 0,
                });
            }else {
                container.css({
                    height:windowWidth/imageRatio, //이미지 너비 / 이미지 비율
                    width: '100%',
                    left : 0,
                    top: (windowheight - windowWidth/imageRatio) / 2, //(브라우저 높이 - 이미지 높이) / 2
                })
            }
    }); //Resize
    //강제로 Resize라는 총알을 넣어서 trigger를 해보자 
    //사이트가 열자마자 강제로 resize를 하게 합니다.
    $(window).trigger('resize');

}); //document ready