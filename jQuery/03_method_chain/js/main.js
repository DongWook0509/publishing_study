$(function(){
   //실행시점 제어하기 - event종류 - mouseover 마우스가 올라왔을때 
   //on메서드, bind ('click' , ... --> - .on .off

   //$('선택자').on('이벤트 종류' , 할일);
   //할일 = 임의 함수 = function(){}
    
   //자바스크립트는 나갔을때 할일을 따로 만들어줘야 합니다. 
   //1단계 
   /*

    $('#typo').on('mouseover', function(){
      //아이디 type의 배경색을 green 
      $('#typo').css('background-color', 'green');
    }); //typo mouseover 

    $('#typo').on('mouseout', function(){
     //아이디 type의 배경색을 green 
     $('#typo').css('background-color', '#3498db');
    }); //typo mouseout 

   */

    //1단계 메소드 체이닝 
    //(1) 첫번째 mouseover 세미콜론삭제 , #('#typo')중복제거 
    /* 
    $('#typo').on('mouseover', function(){
        //아이디 type의 배경색을 green 
        $('#typo').css('background-color', 'green');
    })
    .on('mouseout', function(){
       //아이디 type의 배경색을 green 
       $('#typo').css('background-color', '#3498db');
    }); //typo mouseout 
    */

    //2단계 
    //(1) on( 하고 'mouseover'의 따옴표 삭제 , 콘마삭제,  function ( 삽입 

    $('h1').css('color' , 'red'); //CSS 속성 하나를 변경 
    
    //h1:hover , #typo:hover {background-color : green}

    $('#typo, h1').mouseover(function(){
        $(this).css('background-color', 'green');
    })
    .mouseout(function(){
        $(this).css('background-color', '#3498db');
    });

});