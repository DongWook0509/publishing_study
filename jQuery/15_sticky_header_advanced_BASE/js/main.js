$(function () {

    var $window = $(window),
        $header = $('.page-header'),
        //header안에 있는 '내용만' 복사해줘는 .contents()
        $headerClone =  $header.contents().clone(),
        //$(달러표시를 만들어 줌으로써) Object jQuery객체로 만들어줬습니다. 
        //CSS로는 html없이 미리 스타일속성 만들어줬습니다. 
        $headerCloneContainer = $('<div class="page-header-clone"></div>'),
        //threshold : 문지방 (어떤수치의 분기점) 
        $threshold = $header.offset().top + $header.outerHeight();


        //1. $headerCloneContainer 라는 빈 태그에다가 $headerClone 을 추가 
        //A.append(B) : A요소의 내용의 뒤에 B를 추가 
        $headerCloneContainer.append($headerClone);
        console.log($headerCloneContainer);

        //2 body에 넣으라고는 안했습니다. 이제 body안에다가 넣겠습니다.
        //A.appendTo(B)
        //B요소의 내용의 뒤에 A를 추가 (이동)

        //단점 : 스크롤 내리는 그 순간에 1초에 수백번씩 검사를 합니다. (안좋은 로직)
        //방안 : 브라우저가 스크롤을 검사하는양을 줄여줘야 합니다.  1초를 15번만 검사해줘
        //html 12번 라인 
        //<script src="./js/vendor/jquery.ba-throttle-debounce.min.js"></script>
        $headerCloneContainer.appendTo('body');

        $window.scroll($.throttle(1000/15, function(){
            if($(this).scrollTop() >= $threshold){
                $headerCloneContainer.addClass('visible');
            }else{
                $headerCloneContainer.removeClass('visible');
            }
        }));

});
