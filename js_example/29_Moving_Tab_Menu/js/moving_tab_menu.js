$(function(){
  /*
    (1) 화면이 요소에서 떨어진 거리 jQuery 방식 -> offsetTop , offsetLeft (무조건 화면의 기준)
    그런데 offsetLeft를 사용해서는 안되는게, 사용자가 브라우저를 어느가로넓이에서 볼지 모르기때문입니다.
  */

 //브라우저에서의 부터 왼쪽에서 거리계산
 var test = $('.tab-menu li:nth-child(2)').offset().left;
 //console.log(test);
 
 //A.position().left : A요소의 부모중에 position 기본값이 아닌 요소로부터의 거리
 var test1 = $('.tab-menu li:nth-child(2)').position().left; 
 //console.log(test1);

 var tabLink = $('.tab-menu li');
 var highLight = $('.highlight');

 tabLink.click(function(e){
   e.preventDefault();
   var targetLeft= $(this).position().left;
   console.log(targetLeft);
   highLight.animate({left:targetLeft});
 });
});