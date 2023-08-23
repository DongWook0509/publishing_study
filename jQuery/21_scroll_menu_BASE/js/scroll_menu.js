$(function(){
   
    var $menu = $('#top_menu ul li'),
        $contents = $('#contents > div');
        
        //console.log($menu); //객체 안에 배열로 들어옴 (순번을 뽑음)
    
    /*
    $menu를 클릭하면 해당 요소에만 클래스명 on 추가 되도록
    */

    $menu.click(function(ev){
        
        /*
          $menu.removeClass('on');
          $(this).addClass('on');
        */

       //siblings (발동조건 : 형제자매 )
       $(this).addClass('on').siblings().removeClass('on');

       //인덱스번호로 요소를 선택하기 위해서 
       var idx = $(this).index();

       //인덱스 번호와 동등한 요소를 찾겠습니다.
       //지금 상태에서 화면에서 얼만큼 떨어져 있는지 알수 있어야 합니다.
       //그리고 바로 선택자.offset().top

       var section = $contents.eq(idx)
       console.log("section : " + section);
       
       //선택자를 찾았으니 offset().top을 사용합니다.
       var sectionDistance = section.offset().top;
       console.log("sectionDistance : " + sectionDistance);

       //메뉴를 클릭을 하면 스크롤양이 만들어져서 이동을 하게끔 홥니다.
       //A.scrollTop() 스크롤양을 확인이 아니라 스크롤의 양을 줘야함
       //$('html').stop().animate({속성 : 값 });
       //스크롤의 양이란 속성이 있다.

       //주의점 : body라고 하면 안먹습니다. 
       $('html, body').stop().animate({scrollTop : sectionDistance});
    });

       //스크롤의 양의 거리와 유저가 최소한 이 스크롤 보다 많이 했던 양을 비교해서 (개검사)
       //넌 section2 의 스크롤보다 많이 했네? 그럼 active를 줘서 메뉴바를 bold로 처리
       //저를 볼 타이밍보다 사용자가 많이 스크롤 했어요! 손을 들어줘야함

       //파라미터값에 idx를 물고 들어올 수 있습니다.
       // 0, 1, 2, 순으로 idx 

       /*윈도우 스크롤이 생기면 
            $contents 마다 할일 
                각각의 화면상단에서의 거리 sectionDistance 보다 
                스크롤양이 많은지 적은지 
                많다는 조건이 참이면
                    각요소마다 순변 변수명을 idx에 저장
                    그 순번에 해당하는 메뉴에만 클래스명 on 추가 */
    $(window).scroll(function(){
        $contents.each(function(){
            if($(this).offset().top <= $(window).scrollTop()){ 
                var idx = $(this).index();
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }
        });
    });

});


