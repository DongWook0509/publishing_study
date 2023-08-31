$(function(){
    //한번만 작동하게 하려면  
    /*false일때 한번 실행하고 다시는 바뀌게끔 안하게 하는 구조*/
    var executed = false; 

    //waypoint라이브러리를 활용해봅시다 
    /*
    <div class ="section2 section">
    </div> 가 화면에 나타날때 waypoint를 작동시켜 보겠습니다.
    */

    /*.section2가 화면에 나타나는것 보다 스크롤을 많이 하면 ...이라는 뜻까지 같이 있는 말입니다. */
   $('.section2').waypoint(function(){
    var targetNumber = $('.animate').attr('data-rate');
        if(!executed){ //false가 true일때 
             //숫자가 바뀌는건 animate 라이브러리 
             var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
             $('.animate').animateNumber(
                { number: targetNumber ,
                  numberStep : percent_number_step
                },
                4500);
             executed = true;
        }
   },
   {
    offset : '80%'
   }
   );
});