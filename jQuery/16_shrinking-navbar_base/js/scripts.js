/*
* ---------------------------------------------------------------------------
* jQuery Version
* ---------------------------------------------------------------------------
*/
var $window = $(window),
    $mainHeader = $('#main-header'),
    $defaultLogo = 'images/logo.svg',
    $smallLogo = 'images/logo-shrink.svg';


$window.scroll(function(){

    if($(this).scrollTop() > $mainHeader.outerHeight(true)){
        if(!$mainHeader.hasClass('shrink')){ //shirnk라는 클래스명이 없으면
            $mainHeader.addClass('shrink');
            switchImages($smallLogo);
        }
    }else{
        if($mainHeader.hasClass('shrink')){
            $mainHeader.removeClass('shrink');
            switchImages($defaultLogo);
        }
    }

});

//switchImages 함수
function switchImages(newPath){
    var $logo = $('#logo');
    $logo.fadeOut(300, function(){
        //var c= A.attr('src');
        //A라는 요소의 'src'값이 뭐가 되었든 c에 저장
        
        //A.attr('src', 'c);
        //'src'에 value를 c로 바꿈 
        $logo.attr('src', newPath);
        $logo.fadeIn(300);
    }); //jQuery fadaOut
}





