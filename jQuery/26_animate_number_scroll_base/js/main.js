//$('.box).animate({속성:값, 속성:값},시간,이징,다른할일);
//$('.box).animate({width:100%, height:100%}, 1500,easeQutQuint,function(){...});
//$('.box).animate({width:100%, height:100%}, 
//     {
//      duraction : 1500,
//      easing : 'easeQutQuint',
//      complate :  function(){...끝나고 할일 }
//      progress : function(){... 진행중 할일}
//      }
//    });
 $(function(){
    
    var excuted = false; //거짓을 저장 (실행이 된적이 없다)

    $(window).scroll(function(){

        if(!excuted) {//if(executed  == false) //실행된적이 없다는게 참이면 
            var threshold = $('.section').offset().top - 300;
            if($(window).scrollTop() >= threshold){
                var progressRate = $('.animate').attr('data-rate');
                //animate progress 사용자속성 값 percent ->>> 60%
                //$({percent: 0 }).animate({percent:progressRate},{})
                //percent는 우리가 만든 값 : percent ->>> 60%
                $({percent: 0 }).animate({percent:progressRate},{
                    duration: 1500, //1.5초
                    progress : function(){
                        //animate 메서드 자체를 this로 받아옵니다.
                        var now = this.percent;
                        console.log(now); // 0~60으로 바뀌는 과정이 계속 찍히고 있습니다.
                        $('.animate').text(Math.ceil(now) + '%');
                        //한번 숫자를 한다음 멈춰야 합니다. (딱 한번만)
                        //사용자가 실행이 한번이라도 됬는지 구분을 할줄 알아야 합니다 .
                    }
                }); //progress
                excuted =true; //excuted가 true로 바뀌였기때문에 조건이 참이 아니기때문에 안바뀜 
            } // if 조건문 
         } //if(executed  == false)

    }); //$(window).scroll

    
 });
          