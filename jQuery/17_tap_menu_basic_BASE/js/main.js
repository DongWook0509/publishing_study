$(function () {

    var tabAnchor = $('.tabs-nav li a'), //외동딸 외동녀라서 형제 자매가 없습니다.
        tabPanel  = $('.tabs-panel');

    //링크를 클릭하면 할일 
    tabAnchor.click(function(e){
        e.preventDefault();


        tabAnchor.removeClass('active');
        $(this).addClass('active');

        //클릭한 그 요소에만 active를 추가하고, 나머지요소에서 뺀다.
        //선택한 요소에 형제가 없으면 slblings()를 사용할 수 없다.
        //$(this).addClass('active').siblings().removeClass('active');

        tabPanel.hide();

        //Work 01 클릭하면 $('#work01').show();
        //Work 02 클릭하면 $('#work02').show();
        //Work 03 클릭하면 $('#work03').show();
        //Work 04 클릭하면 $('#work04').show();

        var $target = $(this).attr('href');
        console.log($target); //#work01

        $($target).show();

    });

});

