$(function(){
    
    var $selectEmail = $('.select_domain'),
    $targetInput = $('.email_domain'),
    
    /*2번 문제*/
    $count = $('.count'),
    //$unitPrice = $('.unitprice').text(),
    //$unitPrice = parseInt($('.unitprice').attr('data-unitprice')),
    $unit = $('.unitprice').text();
    $unitPrice = parseInt($unit.replace(',',''));


    $currentNumber = parseInt($count.text()), //텍스트를 정수로 변환
    $total = $('.total');
    
    
    //값이 바뀌면 ... change
    $selectEmail.change(function(){
        //.val() value를 알 수 있습니다
        var domain = $(this).val();
        //.val(값) value의 값을 넣어줍니다.
        $targetInput.val(domain);
    });
    
    
    $('span a').click(function(e){
        e.preventDefault();  //plus에 따옴표 주의 
        if($(this).hasClass('plus')){
            //$currentNumber = $currentNumber + 1;
            $currentNumber += 1;
        }else{
            //$currentNumber = $currentNumber - 1;
            if($currentNumber > 0) {
                $currentNumber += -1;
            }
        }
        //console.log($currentNumber);
        //내용으로 넣어주기 
        $count.text($currentNumber);

        //합계 값 나오게 하기 (콘마로 구별하기)
        //- 자바스크립트 방법
        //- 라이브러리 방법
        var semiTotal = $unitPrice * $currentNumber;
        var total = Number(semiTotal).toLocaleString('en');
        $total.text(total);

        //라이브러리 방법
        //<span class="total number"></span> number라는 클래스가 있는 경우만
        $('.number').number(true);
        
    });// 버튼이 클릭해서 할일
    $('.number').number(true);
    

});