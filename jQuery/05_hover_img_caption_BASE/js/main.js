$(function(){
    var $duraction = 300; 
    var $image = $('#images p');

    //첫번째 캡션, span animate 메서드
    /*
        공백 o = find
        공백 x = filter
        #images p span   -> $image.find('span')
        #images p.strong -> $image.filter('strong')
    */

    //1
    $image.mouseover(function(){
        //CSS버전 : span,strong {opacity : 1;}
        //한줄처리 가능합니다.
        $(this).find('span, strong').stop(true).animate({opacity:1}, $duraction);
        //$(this).find('strong').animate({opacity:1},$duraction);
    })
    .mouseout(function(){
        $(this).find('span, strong').stop(true).animate({opacity:0}, $duraction);
    });

    //2
    $image.filter(':nth-child(2)').mouseover(function(){
        $(this).find('span').animate({opacity:1}, $duraction);
        $(this).find('strong').animate({opacity:1, left:'0%'}, $duraction);
    })
    .mouseout(function(){
        $(this).find('span').animate({opacity:0}, $duraction);
        $(this).find('strong').animate({opacity:0, left:'-200%'}, $duraction);
    });

    //3
    $image.filter(':nth-child(3)').mouseover(function(){
        $(this).find('span').stop().animate({opacity:1}, $duraction);
        $(this).find('strong').stop().animate({opacity:1, bottom:0}, $duraction);
        $(this).find('img').stop().animate({top:'-40px'}, $duraction);
    })
    .mouseout(function(){
        $(this).find('span').stop().animate({opacity:0}, $duraction);
        $(this).find('strong').stop().animate({opacity:1,  bottom:'-80px'}, $duraction);
        $(this).find('img').stop().animate({top:'0px'}, $duraction);
    });
});