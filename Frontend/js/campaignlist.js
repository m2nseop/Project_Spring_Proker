/* 갤러리를 기본 디폴트로 호출 */



/* $().ready(function(){

  //alert("클릭 확인 ");

  var $gallery_button = $('.change_gallery');
  var $list_button = $('.change_list');

  var $campaign_area = $('.campaign_list');

  var $campaign_list = $('.campaign_list_bar');
  var $campaign_gallery = $('.campaign_list_gallery');

  var $footer = $('footer');



  $campaign_gallery.css("display", "block");

  
  $campaign_list.replaceWith($campaign_gallery);

  $footer.css("display", "none");

  $campaign_area.addClass('gallery');

  $campaign_area.removeClass('list');



}) */





/* 리스트 / 갤러리 형 변환 함수들  */


$(function () {
  //----- OPEN

  var $gallery_button = $('.change_gallery');
  var $list_button = $('.change_list');

  var $campaign_area = $('.campaign_list');

  var $campaign_list = $('.campaign_list_bar');
  var $campaign_gallery = $('.campaign_list_gallery');


  var $gallery_loading_area = $('#gallery_loading');
  var $gallery_reserving_area = $('#gallery_reserving');
  var $gallery_ing_area = $('#gallery_ing');
  var $gallery_end_area = $('#gallery_end');

  var $footer = $('footer');



  $gallery_button.click(function () {
    // alert("클릭 확인 ");

    // $campaign_default.css("background-color", "#ff0");
    // 버튼 클릭시 sidebar 색 변경 (연결확인 )


    $footer.css("display", "none");
    
    // $slidedown.css("background-color", "#ff0");



    // list 클래스가 있으면  빼버리고, 갤러리 클래스를 추가합니다. 있으면 빼버립니다. ( 작동확인 완료 ) // 반대로 갤러리 클래스는 그대로유지 

      if ($campaign_area.hasClass('list')) {

        

        $campaign_gallery.css("display", "block");

        $gallery_loading_area.css("display", "block");


        $gallery_ing_area.css("display", "block");
    
        $gallery_reserving_area.css("display", "block");
    
        $gallery_end_area.css("display", "block");

      
        $campaign_list.replaceWith($campaign_gallery);

        

        $campaign_area.addClass('gallery');

        $campaign_area.removeClass('list');
  
  
      } else if($campaign_area.hasClass('gallery')){

        $gallery_loading_area.css("display", "block");


        $gallery_ing_area.css("display", "block");
    
        $gallery_reserving_area.css("display", "block");
    
        $gallery_end_area.css("display", "block");

      };



  })

  $list_button.click(function () {


    // alert("클릭 확인 ");

    // $campaign_list.css("background-color", "#ff0");
    // 버튼 클릭시 sidebar 색 변경 (연결확인 )


    // 갤러리 클래스가 있다면 갤러리 클래스를 빼고 리스트 클래스를 추가합니다. // 반대로 리스트 클래스라면 그대로 유지 


    $footer.css("display", "block");


    if ($campaign_area.hasClass('gallery')) {
  
      $campaign_gallery.replaceWith($campaign_list);

      $campaign_area.addClass('list');

      $campaign_area.removeClass('gallery');


    } else if($campaign_area.hasClass('list')){

              /*         그대로 유지 */
    };

  })

});

/* --- 표 리스트 필터 함수들 ----------------------------------------------*/ 

  $(document).ready(function()
  {    $("#tblResult").tablesorter();  }
  );



  /* --- 캠페인 카드 필터링 함수들 ----------------------------------------------*/ 


  
$(function () {

  //---- 캠페인 카드 버튼 
  
  var $loading_button_box = $('#loading_button_box');
  var $reserving_button_box = $('#reserving_button_box');
  var $ing_button_box = $('#ing_button_box');
  var $end_button_box = $('#end_button_box');
  
  //----- 갤러리 영역 , 생성중 , 예약중, 진행중, 종료

  var $gallery_loading_area = $('#gallery_loading');
  var $gallery_reserving_area = $('#gallery_reserving');
  var $gallery_ing_area = $('#gallery_ing');
  var $gallery_end_area = $('#gallery_end');

  //----- 전체 영역 

  var $campaign_area = $('.campaign_list');

  var $campaign_list = $('.campaign_list_bar');
  var $campaign_gallery = $('.campaign_list_gallery');

  var $footer = $('footer');

  //-- 버튼 클릭횟수 status가 1이면 클릭영역, status가 0이면 다시 전체영역으로 복귀 

  var status_loading=0; // 0은 전체영역에 1은 특정영역 
  var status_reserving=0;
  var status_ing=0;
  var status_end=0;

  // 일치하는 글자만 필터링 

  var value1 = '생성중'
  var value2 = '예약중'
  var value3 = '진행중'
  var value4 =  '종료'
  var value5 = '1'

  // 테이블 영역 

  var $tablearea = $('#table_body');
  var $tableareatr = $('#table_body tr');




  $loading_button_box.click(function () {

    status_reserving=0;
    status_ing=0;
    status_end=0;



    // alert("클릭 확인 ");

    // 버튼 클릭시 연결된 갤러라 영역 색상 변경 (연결 확인 )


    // $gallery_loading_area.css("background-color", "#ff0");
    
    if (status_loading==0){
    
      if ($campaign_area.hasClass('list')) {

      // alert("if문 진입 ");

     


      $("#table_body tr").filter(function() { // 생성중인 테이블만 보여줘 

        $(this).toggle($(this).text().toLowerCase().indexOf(value1) > -1) // 일치하는 글자 있으면
  
      });





      
        status_loading=1;
  
    }
  }
  else if(status_loading==1){



    $("#table_body tr").filter(function() { // 생성중인 테이블만 보여줘 

      $(this).toggle($(this).text().toLowerCase().indexOf(value5) > -1) // 일치하는 글자 있으면



    });




    status_loading=0;
  }



  })

  $reserving_button_box.click(function () {

    status_loading=0;
    status_ing=0;
    status_end=0;

    // alert("클릭 확인 ");

    // 버튼 클릭시 연결된 갤러이 영역 색상 변경 (연결 확인 )


    // $gallery_loading_area.css("background-color", "#ff0");
    
    if (status_reserving==0){
    
      if ($campaign_area.hasClass('list')) {

        $("#table_body tr").filter(function() { // 생성중인 테이블만 보여줘 

          $(this).toggle($(this).text().toLowerCase().indexOf(value2) > -1) // 일치하는 글자 있으면
    
        });
  
  

      // alert("if문 진입 ");

       

        status_reserving=1;
  
    }
  }
  else if(status_reserving==1){

    $("#table_body tr").filter(function() { // 생성중인 테이블만 보여줘 

      $(this).toggle($(this).text().toLowerCase().indexOf(value5) > -1) // 일치하는 글자 있으면



    });
    
   
    status_reserving=0;
  }

  })

  $ing_button_box.click(function () {

    status_loading=0;
    status_reserving=0;
    status_end=0;

    // alert("클릭 확인 ");

    // 버튼 클릭시 연결된 갤러이 영역 색상 변경 (연결 확인 )


    // $gallery_loading_area.css("background-color", "#ff0");
    
    
    if (status_ing==0){
    
      if ($campaign_area.hasClass('list')) {

      // alert("if문 진입 ");

      $("#table_body tr").filter(function() { // 생성중인 테이블만 보여줘 

        $(this).toggle($(this).text().toLowerCase().indexOf(value3) > -1) // 일치하는 글자 있으면
  
      });

      

        status_ing=1;
  
    }
  }
  else if(status_ing==1){

    $("#table_body tr").filter(function() { // 생성중인 테이블만 보여줘 

      $(this).toggle($(this).text().toLowerCase().indexOf(value5) > -1) // 일치하는 글자 있으면



    });
    
    

    status_ing=0;
  }

  })

  $end_button_box.click(function () {

    status_loading=0;
    status_reserving=0;
    status_ing=0;
    
    // alert("클릭 확인 ");

    // 버튼 클릭시 연결된 갤러이 영역 색상 변경 (연결 확인 )


    // $gallery_loading_area.css("background-color", "#ff0");
    
    
    if (status_end==0){
    
      if ($campaign_area.hasClass('list')) {

      // alert("if문 진입 ");

      $("#table_body tr").filter(function() { // 생성중인 테이블만 보여줘 

        $(this).toggle($(this).text().toLowerCase().indexOf(value4) > -1) // 일치하는 글자 있으면
  
      });


        status_end=1;
  
    }
  }
  else if(status_end==1){

    $("#table_body tr").filter(function() { // 생성중인 테이블만 보여줘 

      $(this).toggle($(this).text().toLowerCase().indexOf(value5) > -1) // 일치하는 글자 있으면



    });

    

    
    
    

    status_end=0;
  }

  })



 
});

