$(function () {
    var $container = $('.gallery'),
        $loadMoreBtn =$('.load-more'),
        /*몇개씩 불러서 counting을 할지*/
        $addItemCount = 8,
        /* 16 -> 32 -> 48 */
        /* list 항목을 모두 로드했을때 더보기버튼을 사라지게 하려면 
           몇개가 추가 되었는지 알아야 합니다. 
           배열의 갯수 == $added 과 일치하게 만들었다면
           -  더보기 버튼 사라지게 할 용도,
           -  더보기 버튼을 클릭해서 추가된 항목수 
        */
        $added = 0, 
        /* 빈 배열 하나 준비  */
        $allData = []

    $.getJSON('../49_gallery_load_more_base/data/content.json', initGallery);

   
    function initGallery(data){
        $allData = data;
        //console.log($allData); //Array(40)[{...}, {...}. {...}]

        //(1) 열자마자 item을 추가 
        addItem();

        //(2) 클릭했을때 item을 추가
        //클릭을 하면 8개씩 하겠습니다. 
        $loadMoreBtn.click(addItem);
    } /*initGallery*/

    function addItem(){
        var slicedData;
        // 열자마자 8개씩 추가 
        //  8개를 1묶음으로 배열을 먼저 만듭니다.
        var elements = [];
        // 이번에는 each 메서드를 사용하지 않습니다.
        // 왜냐하면 $allData 안에 이미 저장이 되어있습니다.
        // 40개의 배열 안에서 우리가 원하는 몇번째부터 몇번째까지의 배열을 가지고 와서 element의 넣어줘
        // A.slice(0,2) A 배열에서 0번째 2번째 전까지의 값을 가져온다.

        /*
        var $allData = [0,1,2,3,4]
        var slicedData = A.slice(0,$addItemCount) A배열에서 0번째 8번째 전까지의 값을 가져온다.          
        $allData배열에서 0번째 9번째 전까지의 값을 가져온다.
        */
        slicedData = $allData.slice($added , $added + $addItemCount);
        console.log(slicedData);

        /* 
            $('li').each(function(){}); jquery object
            
            //온전하게 제이쿼리 객체로 하려면
            $.each('배열', fucntion(idx, item)); json 배열의 값마다 할일
        */
        $.each(slicedData, function(idx, item){
            var itemHTML = 
                '<li class ="gallery-item"><a href ="#">'
                + item.title + 
                '</a></li>'
                console.log(itemHTML);
            elements.push($(itemHTML).get(0));
        });
        console.log(elements);
        $container.append(elements);

        //$added 값 업데이트 
        /*
        slice(0,8)= 8개의 항목 (0~7)
        slice(8,16)= 8개의 항목 (8~16)
        slice(16,24) = 8개의 항목
        */
        $added += slicedData.length;

        // 다 로드되면 삭제

        if($added < $allData.length){
            $loadMoreBtn.show();
        }else{
            $loadMoreBtn.hide();
        }

    } //addItem이 할일 
    

}); //ready function

    /*
        //하나하나 인덱스번호를 물고들어갈껀 없으니까 그냥 data
        $.getJSON('파일경로', function(data){
            initGallery(data){

            };
        });
    */

    /*
        $.getJSON('파일경로', function(){
            initGallery();
        });

        function initGallery(){};
    */


 /* 
        -- 줄여쓰는 방법 --
        (1) 
        $loadMoreBtn.on('click', function(){
            addItem();
        });

        (2)
        $loadMoreBtn.click(function(){
            addItem();
        });
    
        (3) 
        $loadMoreBtn.on('click',addItem);

        (4)
        $loadMoreBtn.click(addItem);
*/