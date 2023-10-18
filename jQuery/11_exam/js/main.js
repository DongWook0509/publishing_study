$(function () {

    var container  = $('.slideshow'),
        slideGroup = container.find('.slideshow_slides'),
        /*슬라이드 갯수에 따라서 a태그를 늘려줘야하니까  a태그도 변수로 잡아줘야합니다.*/
        slides = slideGroup.find('div'),
        nav = container.find('.slideshow_nav'),
        indicator  = container.find('.indicator'),

        /*slideGroup의 갯수만큼 나열하해야 하기때문에 slideCount라는 변수명을 만든다*/
        slideCount = slides.length,

        /*태그를 한꺼번에 넣을 수 있는 그릇을 만듬*/
        indicatorHtml = '',

        /*현재 어디를 보고있는지 알아야 합니다. */
        currentIndex = 0,

        /*시간*/
        duration = 500,
        easing = 'easeInOutExpo',
        interval = 3500, //3.5초
        timer = '';

        console.log('slideCount :' +  slideCount);
    //1. 슬라이드 가로로 배열
    //slides 마다 할일 , 0%, 100% , 200% , 300%
    console.log(slides);
    slides.each(function(i){
        var newLeft = i * 100 + '%';
        $(this).css({left: newLeft});
        //<a href="">1</a>
        //var i = 2; i = i+2; i+=2
        //indicatorHtml = indicatorHtml + ??
        //indicatorHtml += ??
        
    }); //slides.each
    //A.text(B); A요소의 B의 내용을 글씨 형태로 추가 
    //A.html(B); A요소의 B의 내용을 html
    indicator.html(indicatorHtml);

    //2. 슬라이드 이동함수 
    function goToSlide(index){
        //slideGroup.animate({left:??}, duration, easing);
        // i 0 left:0%, i 1 = left:-100%, i 2 = left: -200;
        slideGroup.animate({ left : -100 * index + '%'}, duration, 'swing');
        //currentIndex = index; 가 있어야 현재페이지가 어딘지 알고 left 값을 -100% 씩 줍니다.
        currentIndex = index;
        //슬라이드가 이동할때마다 변화하는지 보세요 
        console.log(currentIndex);

        //5.updateNav(); //처음인지 마지막인지 검사해주는 함수
        updateNav(); 
    }
    
    //5 updateNav //처음인지 마지막인지 검사해주는 함수
    function updateNav(){
        var navPrev = nav.find('.prev');
        var navNext = nav.find('.next');
        if(currentIndex == 0){
            navPrev.addClass('disabled');
        }else{
            navPrev.removeClass('disabled');
        }
        if(currentIndex == slideCount - 1){
            navNext.addClass('disabled');
        }else{
            navNext.removeClass('disabled');
        }
    }



    //3 인디케이터로 이동하기 
    indicator.find('a').click(function(e){
        e.preventDefault();
        var idx = $(this).index();
        //console.log(idx);
        goToSlide(idx);
    });

    //4. 좌우버튼을 클릭했을때 이동하기 
    //다음버튼 클릭 c+1  > goToSlide(?);
    //이전버튼 클릭 
    nav.find('a').click(function(e){
        e.preventDefault();
        //var i = currentIndex - 1;
        if($(this).hasClass('prev')){
          goToSlide(currentIndex - 1);
        }else{
          goToSlide(currentIndex + 1);
        }
    });

    updateNav();

    //아코디언 JS
    $('.menu-title').click(function(){
        //2번째 방법
        $(this).next().slideToggle().siblings('.menu-content').slideUp();
    }); 

    //tab JS
    $('.tab-button').click(function() {
        $('.tab-button').removeClass('active');
        $('.tab-content').removeClass('active');
        
        $(this).addClass('active');
        const tabContentId = $(this).index(); // Get the index of the clicked button
        $('.tab-content:eq(' + tabContentId + ')').addClass('active');
     });
        
    $('.tab-button:eq(0)').click();

    //오버레이
    let  $exit = $(".exit"),
        $overLay = $("#overlay"),
        $ovrButton = $(".ovr_button"),
        $modal = $(".modal");

    $ovrButton.click(function(){
        $overLay.css({display : "block"});
        $modal.css({display : "block"});
    })

    $exit.click(function(){
        $overLay.css({display : "none"});
        $modal.css({display : "none"});
    })

    $overLay.click(function(){
        $overLay.css({display : "block"});
        $modal.css({display : "block"});
    });


});
