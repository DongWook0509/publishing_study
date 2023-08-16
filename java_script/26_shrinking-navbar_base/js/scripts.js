/*
* ---------------------------------------------------------------------------
* jQuery Version
* ---------------------------------------------------------------------------
*/

var $window = $(window),
    $mainHeader = $('#main-header'),
    $defaultLogo = 'images/logo.svg',
    $threshold = $mainHeader.outerHeight(), //border 까지의 높이
    $smallLogo = 'images/logo-shrink.svg';
    $Logo = $('#logo');    //<img src="images/logo.svg" alt="Logo" id="logo">  id=logo의 이미지의 속성을 바꿔야 합니다.

    /*
    (1) 윈도우 스크롤이 $threshold('#main-header')보다 많으면 $mainHeader에 shrink클래스 추가, 제거 
    */
    $window.scroll(function(){
        //메뉴의 높이보다 스크롤을 많이 하면 
        if($(this).scrollTop() > $threshold){
             //shirink가 없다는 조건이 참일때만 작동을 해야합니다.
             if(!$mainHeader.hasClass('shirink')){
                $mainHeader.addClass('shirink');
                switchImg($smallLogo);
             }
        }else{
             if($mainHeader.hasClass('shirink')){
                 $mainHeader.removeClass('shirink');
                 switchImg($defaultLogo);
             }
        }
    });

    /*
      (2) 
      제이쿼리 쓱 사라지고 , 쓱 나타나는 효과 
      $threshold('#main-header')의 높이이상으로 스크롤을 했을때 
      큰 이미지가 fadeOut해서 사라지고 
      작은 이미지가 fade-in해서 쓱 나타남
    */
   
    //(2)
   //작은이미지로 보여줘 큰 이미지로 보여줘 파라미터가 넘어오면 (보고자하는 이미지의 주소)
   function switchImg(newImgPath){
       //(1) 현재 이미지($logo)는 fadeOut 사라진다음, fadeOut, 0.3s
       $Logo.fadeOut(300, function(){
            //(2) 매개변수의 이미지주소 $logo의 src 속성을 변경
            $Logo.attr('src', newImgPath);
            //(3)$logo fadeIn 으로 그 이미지를 보이게 함, fadeIn 0.3s
            $Logo.fadeIn(300);
        });
    }

    //이슈 :  깜빡깜빡 로고가 스크롤될때마다  switchImg($smallLogo) 작동이 되어서 
    //          newImgPath 파라미터값이 들어와서 계속해서 작동합니다.
    //한번만 작동하고 , 다시 스크롤 하면 가만히 있게 해야합니다 .
    //스크롤이 하면 높이가 줄어들고 메뉴의 높이가 줄어드는 이유는 클래스명 shirnk를 헤더에 넣었기 때문입니다.
    //헤더에는 shirnk라는 클래스가 있는 상태임에 불구하고 스크롤을 내리면 아무일도 일어나지 않으면 되는것입니다.
    /*
     스크롤을 많이 한 상태에서 케이스가 2개있다. 
     - shirink가 있을때 
     - shirink가 없을때

     반대로 이야기하면 헤더의 shirnk가 없을때만 작동 
     $mainHeader.addClass('shirink');
     switchImg($smallLogo);
     */

     //없으면 넣어주고 있으면 빼주는건 toggleClass
     //있는지 없는지 검사하는건 hasClass

/*
* ---------------------------------------------------------------------------
* Vanilla JavaScript Version
* ---------------------------------------------------------------------------
*/

