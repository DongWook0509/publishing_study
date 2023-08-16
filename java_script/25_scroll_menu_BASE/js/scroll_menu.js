$(function(){
  
  /*
  (1) 메뉴를 클릭하면, 
  (2) 몇번째 메뉴를 클릭했는지 순번확인, 
  (3) 그  순번에 해당하는 내용이 화면상단에서 얼마나 떨어져 있는지 거리를 확인 (1100) 
  (4) 거리를 확인 (1100), html, body에 스크롤양을 확인한 수치만큼 준다.  - animate 메서드를 이용해서 수치만큼의 과정이 보여야 한다. 
  
  */
 
  //변수지정
  /*
  메뉴(li)를 변수명 $menu에 지정
  각 내용들은 변수명 $contents에 지정
  */

  var $menu = $('#top_menu ul li');
  var $contents = $('#contents > section');
  console.log($contents);

  //메뉴 클릭 이동
  /*
   몇번째 메뉴를 클릭했는지 순번확인해서 변수명 idx 저장합니다.
  */
  $menu.click(function(event){
    //(1) 링크가 먹어버리면 안됩니다. 링크가 이미 먹어버렸기때문에, animation을 줄 수가 없습니다.  즉 에이테그 속성을 없애야 합니다. 
    event.preventDefault();
    
    //(2) 몇번째 메뉴를 클릭을 했는지 
    var idx = $(this).index();
    console.log(idx);

    //(3) eq안에 숫자가 들어오면 선택!하고 화면상단에서 떨어진 거리를 구한다. 
    var tt = $contents.eq(idx).offset().top;
    console.log(tt);

    //(4) 이 스크롤의 양을 html과 body의 스크롤의 양으로 주면 됩니다. 
    $('html, body').animate({scrollTop:tt});

    /*(5)-1 모든 메뉴에서 클래스명 on 제거하고 , 클릭한 그 요소에만 on 추가한다. 
      $menu.removeClass('on');
      $(this).addClass('on');
    */

    //(5)-2 클릭한 그 요소에만 on 추가하고 나머지 형제들은 제거한다.  
    /* 
       $(this).acdClass('on');
       $(this).siblings().removeClass('on');

       //.siblings('.strong) 형제자매요소들 중에서 클래스명 strong이 있는 것들만.
    */
    
    //.. .. ..    $(this).acdClass('on').siblings().removeClass('on');

    //자바스크립트 방식 $contents[idx]
  });


  //스크롤 이동 반영하기  
  /*

    윈도우에 스크롤이 생기면 할일 
    너가 가지고 있는 높이보다 많이 했니 ? -> 아니오
    너가 가지고 있는 높이보다 많이 했니 ? -> 아니오
    너가 가지고 있는 높이보다 많이 했니 ? -> 예
    그럼 너는 몇번째 인데? 


    (1) 각각의 섹션의 가지고 있던 상단의 거리 = offset().top 
    (2) 현재 스크롤의 양 = scrollTop()
    (3) i 각각의 섹션의 인덱스 번호를 알수있다. 

  */
   $(window).scroll(function(){
     //현재 스크롤양을 변수명 $sct 저장한다.
     var $sct = $(this).scrollTop();

     $contents.each(function(i){
         var tg = $(this);
         if (tg.offset().top < $sct){ //현재 스크롤을 해당컨텐츠가 화면상단에서 거리보다 많이 했다면 
            $menu.removeClass('on');
            $menu.eq(i).addClass('on');
         }
     });
   });

});