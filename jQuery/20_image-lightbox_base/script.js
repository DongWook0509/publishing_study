var $button = $('.gallery a'),
    $target = $('#lightbox-overlay'),
    $targetImg =  $target.find('img');

    /*
    (1) $button 클릭하면 
    클릭된 그 요소의 속성중에서 속성명 data-lightbox의 값을 변수명 newImg에 저장 

    (2) #lightbox-overlay에 클래스명 visible 추가

    (3) #lightbox-overlay img 요소의 src 속성의 값을 newImg 변경
    */

    $button.click(function(ev){
        ev.preventDefault();
        var newImg = $(this).find('img').attr('data-lightbox');
        console.log(newImg); //images/image-3.jpeg

        $target.addClass('visible');

        $targetImg.attr('src', newImg);
    });

    $target.click(function(){
        $(this).removeClass('visible');
    });