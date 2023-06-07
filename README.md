
헤더영역01
요약 
- box-sizing : border-box;
- padding: 0 20px를 주었으나 스크롤이 생기는 이유는 
           padding에 width값이 포함되어 있어서 양쪽에서 100%가 있으니까 100% + 40px이 되어 버립니다.
           그래서 padding이 width 값 안 에 포함되어 있어야 하기 때문입니다. 그래서 box-sizing을 사용합니다. 
- ul>li*5>a[href="#]

슬라이드영역02 

        .bliend {
            width: 0;
            height: 0;
            line-height: 0;
            overflow: hidden;
            position: absolute;
            text-indent: -9999px;
        }
        
        .ir {
            display: block;
            overflow: hidden;
            font-size: 0;
            line-height: 0;
            text-indent: -9999px;
        } 
     
         .slider__img {
            /* 
            background-size는 나중에 나온 것이기 때문에 /를 붙여야 한다. 
            background: url("img/slider_bg01.jpg") no-repeat center center / cover;
            */
            width: ;
            background: url("img/slider_bg01.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center ;
        } 
