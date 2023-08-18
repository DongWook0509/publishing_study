$(function () {
    //변수지정
    var slides = $('.slideshow img'),
        slideCount = slides.length,
        currentIndex = 0;
    
    //해당시간이 지나면 한번만 할일 
    //var timer = setTimeout(할일, 1000);
    //clearTimeout(timer);

    //일정시간마다 할일 
    //var timer = setInterval(할일, 시간);
    //clearInterval(timer);

    //jquery 집합개체 (object)중 특정번째 요소를 선택 .eq(숫자)
    //eq = equivanlent (동등한)
    //허리춤에 부적의 뭉치 중 
    //요소를 서서히 나타나도록 하는 부적 .fadeIn()
    //요소가 서서히 사라지도록 하는 부적 .fadeOut()

    //매개변수 안에서 슬라이드를 할때는 가로열고 () 이거안해도 됩니다. setInterval(showNextSlide, 3500);
    //밖에서 단독으로 시작할떄는 showNextSlide() 이렇게 가능합니다. 

    //slides.eq(0).fadeIn();
    slides.eq(currentIndex).fadeIn();

    var timer = setInterval(showNextSlide, 3500);

    function showNextSlide(){
        // ci 0 ni 1, ci 1 ni 2 , ci 2 ni 3, ci 3, ni4 ni 0
        // slideCount 4
        // 7 % 2 = ?? 2로 나눈 나머지 

        var nextIndex = (currentIndex + 1) % slideCount;
        slides.eq(currentIndex).fadeOut();
        slides.eq(nextIndex).fadeIn();
        currentIndex = nextIndex;
        console.log(currentIndex);
    } //showNextSlide

    //링크랑 더보기가 있으면 클릭할 수 있게끔 시간을 멈추게끔 해야합니다. 

});
