$(function () {
    //gallery 안에 list 형식으로 넣어줄겁니다.
    var $container = $('.gallery');
    
    $container.masonry({
        // options
        itemSelector: '.gallery-item',
        columnWidth: 230, /*너비*/
        gutter : 10, /*간격 10px*/
    });
    //content.json 파일을 불러와서 할일 
    /*  
    $.getJSON('파일의 경로', function(){
        
    });
    */

    $.getJSON('../49_gallery_load_more_base/data/content.json', function(data){
        //console.log('성공');
        //json 파일을 읽어와서 하나하나 할일 = i

        //빈 배열을 만듭니다.
        //li 형식으로 바뀐 차곡차곡 쌓아야 합니다.
        //(주의) 리스트가 전부 로드 되어버리전에 해버리면 안됩니다.
        //메이슨리 : 벽돌레이아웃을 만들어주려고 각각의 포지션을 억지로 해주는 일 

        ///*  이미지를 로딩하는 동안 보이지 않게 함*/
        //.gallery-item.is-loading { opacity: 0; }

        var elements = [];

        $.each(data, function(i, item){
          //console.log(item.title);
          var itemHTML=
          '<li class="gallery-item is-loading">' + 
            '<a href="' + item.images.large + '">' + 
                '<img src ="' + item.images.thumb + '"alt="' + item.title+ '"/>' +
            '</a>' + 
          '</li>';

            //밀어넣긴 밀어넣되, 
            //(1) text형식이 아닌 제이쿼리 객채로 만든다
            //(2) .get(0)을 붙입니다.
            elements.push($(itemHTML).get(0));
            console.log(elements);

       });//each

       $container.append(elements); 

       //이미지가 완전히 로드되면 할일 
       $container.imagesLoaded(function(){
            //$container.find('li').removeClass('is-loading');
            $(elements).removeClass('is-loading');
            $container.masonry( 'appended', elements );
            
       })

    }); //getJson()
   
});
