$(function () {

    var tabAnchor = $('.tabs-nav li'), 
        tabPanel  = $('.tabs-panel');

    //링크를 클릭하면 할일 
    tabAnchor.click(function(e){
        e.preventDefault();

        //클릭한 그 요소에만 active를 추가하고, 나머지요소에서 뺀다.
        //선택한 요소에 형제가 없으면 slblings()를 사용할 수 없다.
        $(this).find('a').addClass('active');
        $(this).siblings().find('a').removeClass('active');        

        tabPanel.hide();

        //해당 li 인덱스 번호를 알아와서 
        //요소를 선택할때 순번을 이용해서 선택을 할 수 있습니다.

        var $targetIdx = $(this).index();
        console.log($targetIdx); // 0 , 1 , 2, 3, 

        //이 인덱스 번호의 상응하는 탭패널요소를 선택해서 보이게 해주세요 
        tabPanel.eq($targetIdx).show();
    });

    //.Trigger : 방아쇠를 당긴다
    // 방아쇠의 총알은 클릭
    tabAnchor.eq(0).trigger('click');
});

