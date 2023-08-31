$(function() {

    $(document).ready(function(){
			
        $('.posts_list').bxSlider({
            minSlides: 1,
            maxSlides: 3,
            moveSlides: 1,
            slideWidth:370,
            slideMargin : 30,
            pager:false,
            nextSelector: '.recent_posts .controls .next',
            prevSelector :'.recent_posts .controls .prev' 
        });
        
        //Mobile 메뉴 드랍다운 
        $(".toggle").click(function(){
            $(".main-menu").slideToggle();
        }); 
        
        //사이즈 변경시 메뉴 
        $(window).resize(function(){
            if($(window).width() > 768){
                //참이면 할일
                $(".main-menu").show();
            } else{
                //거짓이면 할일
                $(".main-menu").hide();
            }
        });				

        //(1) 상단메뉴고정 
        //스크롤 양이 0보다 클때 (윈도우에 스크롤이 생기면 할일 )
        var $header = $('header');
        var $services = $('.services');
        var $counters = $('.counters');
        var $counterData = $counters.find('h3');
        
        var $serviceExecuted = false;
        var $counterExecuted = false;

        $(window).scroll(function(){

            var $currentSct = $(this).scrollTop();
            var $offset = 300;

            
            if($currentSct > 0){
                $header.addClass('sticky');
            }else{
                $header.removeClass('sticky');
            }
            //(2) service-item 나타나기
            
            var  $serviceThreshold = $services.offset().top - $offset;

            if(!$serviceExecuted){ //이 조건이 참이라서 한번 실행이 됬으면
                if($currentSct > $serviceThreshold){
                    $services.addClass('active');
                    $serviceExecuted = true; //다시금, 혹여나 할려고 해도 true로 바뀌기 때문에 이 조건이 참이 안되기 떄문에 못함
                }
            }

            //(3) 숫자 애니메이션 
            var $counterThreshold = $counters.offset().top  - $offset;;
            if($currentSct > $counterThreshold){
                if(!$counterExecuted){
                    
                    //각각의 text를 해줘야 하니까 
                    $counterData.each(function(){
                        var $current = $(this);   //$current는 각각의 h3를 의미를 합니다.
                        var $target = $current.attr('data-rate');
                        //animate , progress, rate
                        $({rate : 0}).animate({rate:  $target},{
                            duraction: 2500,
                            progress:function(){
                                var now = this.rate;
                                $current.text(Math.ceil(now));
                            }
                        }); 
                    }); //$counterData.each 
                    $counterExecuted = true;
                } //!$counterExecuted
            }
        }) //srcoll event 

        //overlay
        var currentUrl = $('iframe').attr('src'); // 이동한 부분입니다.

        $('.video .icon').click(function(e){
            e.preventDefault();
            $('#overlay').addClass('visible');
    
            var newStr = '?autoplay=1';
            var newUrl =currentUrl.concat(newStr);
    
            $('iframe').attr('src',newUrl);
    
        });
        $('.video .close').click(function(e){
            e.preventDefault();
            $('#overlay').removeClass('visible');
            $('iframe').attr('src',currentUrl);  //추가된 부분
        });

        
    });

});


