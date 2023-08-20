$(function () {

    //변수명 만들기      
    var container  = $('.slideshow'),
        //slideGroup = $('slideshow .slideshow_slides'), (공백 O)
        slideGroup = container.find('.slideshow_slides'),
        //슬라이드 갯수에 따라 늘려줘야 하니까 slideshow_slides a태그를 변수로 지정 
        slides = slideGroup.find('a'),
        //.slideshow .slideshow_nav
        nav = container.find('.slideshow_nav');
        //.slideshow .indicator
        indicator = container.find('.indicator'),
        //slideGroup.find('a')의 갯수를 구해와서 fadein, fadeOut 해야 하기 때문에 
        slideCount = slides.length,
        //indicator (페이지네이션)은 슬라이더가 2개면 페이지네이션(a)은 2개, 
        //          슬라이더 3개면 (a) 3개 즉...슬라이더의 갯수에 따라 달라져야 합니다.
        //드디어 html에 태그자체를 넣어주는 방법을 사용합니다. 
        indicatorHtml = '', //갯수에 따라서 값이 바뀔 가능성이 있기때문에 빈값을 지정해줍니다. 
        currentIndex = 0, //현재 어디를 보고있는지 구분할지 알아야 합니다. 

        //좌우버튼을 클릭했을때 left값의 위치에 따라서 좌우버튼을 움직여야 합니다.
        duration = 500, //animate 되는 시간 500 == 0.5s 
        easing = 'easeInOutExpo', //이징함수 
        interval = 3500,//일정시간마다 슬라이더가 나타나고 사라지는 시간 3.5초
        timer = '';//마우스가 올라가면 멈춰! (값을 지정을 안함) 


    //(1) 슬라이드를 가로로 배열 
    //slides a 태그마다 해야 할일  : 0% , 100%, 200% 300% 
    console.log(slides);

    slides.each(function(i){
        var newLeft = i * 100 + '%';
        $(this).css({left : newLeft});

        // (2) indicatorHtml = ''; 변수사용 
        // (2-1) 슬라이더의 갯수 에따라서 indicator 안에 있는 a를 생성해야 하기 떄문에  현재는 주석처리를 하였습니다 .
        // 이동할때마다 너가 보고있는것은 ‘여기야’ 해서 active를 넣어줄꺼입니다. 
        // 만약 안에 작은따옴표가 있으면 큰 따옴표를 쓰고, 안에 큰따옴표가 있으면 작은따옴표를 씁니다. 

        /*
        <a href="">1</a>
        var i = 2; i = i+2;  i+=2;
        indicatorHtml = indicatorHtml + ??
        indicatorHtml += ??
        */

        indicatorHtml += '<a href="">' + (i+1) + '</a>';
        console.log(indicatorHtml);
    }) //slides.each

    //A.text(B); a요소의 b의 내용을 글씨 형태로 추가 
    //A.html(B); a요소의 b의 내용을 html 형태로 추가

    //indicator.text(indicatorHtml);
    indicator.html(indicatorHtml);

    // 클릭을  하면 ..  
    //(3) 슬라이더 이동 함수 
    function goToSlide(index){
        //i 0 left  : 0
        //i 1 left  : -100%
        //i 2 left  : -200% 
        //sliderGroup.animate({left:??}, duration, easing);
        slideGroup.animate({left:-100 * index + '%'}, duration, easing);
        //이 문구가 있어야 현재 보고있는 페이지는 1번이야, 2번이야, 3번이야... 를 알 수 있습니다.
        currentIndex = index;
        console.log(currentIndex);
        
    }

    function updateNav(){
        //처음 currentIndex 0 이전버튼이 안 보이도록 
        var navPrev = nav.find('.prev');
        var navNext = nav.find('.next');

        //마지막 currentIndex 3 다음버튼이 안 보이도록
        if(currentIndex == 0){
            navPrev.addClass('disabled');
        }else{
            navPrev.removeClass('disabled');
        }

        if(currentIndex == slideCount-1){
            navNext.addClass('disabled');
        }else{
            navNext.removeClass('disabled');
        }
    }
    
    // (4) 페이지네이션(인디케이터) 이동하기 
    // 좌우버튼을 클릭을 하면 or 페이지네이션을 클릭을 하면 
    // indicator = container.find('.indicator'),
    // indicator a  =>  indicator.find('a')
    // -(1) a 태그의 고유의 이벤트를 멈춰야합니다. 매개변수를 몰고들어오고 e.preventDefault();
    // -(2) 사용자가 몇번째를 클릭했는지 알아와야 합니다. $(this).index();
    
    indicator.find('a').click(function(e){
        e.preventDefault();
        var idx = $(this).index();
        console.log("idx" + idx); // 0 , 1, 2, 3, 순으로 찍힘 
        // goToSlide에 일을 시켜보자
        goToSlide(idx);
    });

    //(5)좌우버튼 이동하기 
    //다음버튼 클릭 currentIndex + 1 -> gotoslider(?)
    //이전버튼 클릭 currentIndex - 1 -> gotoslider(?)
    //nav = container.find('.slideshow_nav'); 
    
    nav.find('a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('prev')){
            goToSlide(currentIndex - 1);
        }else{
            goToSlide(currentIndex + 1);
        }
    });

    /*
    nav.find('.prev').click(function(e){
        e.preventDefault();
        //var i = currentIndex - 1;
        goToSlide(currentIndex - 1)
    });
    nav.find('.next').click(function(e){
        e.preventDefault();
        //var i = currentIndex - 1;
        goToSlide(currentIndex + 1)
    });
    */

     //(7)열자마자 실행되게 하던가, 이것만 단독으로 실행을 하던가 해야합니다.
     updateNav(); //처음인지 마지막인지 검사해주는 함수 

});
