$(function(){

    var $aside = $('aside'),
         /* 컴퓨터가 잘 찾을수 있도록
            $button = $('aside button'); */
        /*find : 공백 O*/
        $button = $aside.find('button'); 
        $duration = 300;

        //버튼을 클릭하면 aside 나오도록 해주세요. 
        //선택자.classList.add = 'open' (JavaScript) 
        //선택자.classList.remove = 'open' (JavaScript) 

        // A.addClass('b') 요소추가 
        // A.removeClass('b') 요소삭제
        // A.toggleClass()로 선택한 요소에 클래스(Class) 값을 넣었다 뺐다
        // A.hasClass('b') 조건문에서 사용 a요소에 b라는 클래스가 있으면 true, 없으면 false

        //속성 변경하기, 속성의 값을 반환하기
        //var c = A.attr('b') = a라는 요소의 b라는 속성의 값을 뭔지 알아내고 변수명 c에 저장
        //console.log($button.find('img').attr('src')); //img/btn_open.png

        //A.attr('b','c') a라는 요소의 b라는 속성의 값을 C로 변경

        $button.click(function(){
            // (1) 버튼을 2번클릭하는걸 구분해야 이 로직이 편합니다. -> toggleClass('open')
            //$aside.stop().animate({left:'0px'}, $duration);

            $aside.toggleClass('open');

            if($aside.hasClass('open')){
                $aside.stop().animate({right:'-70px'}, $duration, 'easeOutBack');
                $button.find('img').attr('src', 'img/btn_close.png');
            }else{
                $aside.stop().animate({right:'-350px'}, $duration, 'easeInBack');
                $button.find('img').attr('src', 'img/btn_open.png');
            }

            // (2) 덜컹 걸리는 느낌이 있죠, 이징함수를 left : 0 으로 하면 비어보임 -> -70px
            // (3) 자바스크립트랑 jQuery닌 html의 요소를 바꿀수 있습니다. CSS는 불가능한 이야기 입니다.
            // (4) jQuery에 이징 에니메이트는 
            // $aside.stop().animate({left:'0px'}, $duration); //cpu (두뇌)까지 가야 합니다. 
            // -> 저가의 핸드폰은 버벅 거립니다. 
            // transition GPU : 부품자체 (비디오카드에서) 해결이 가능 

        });


});