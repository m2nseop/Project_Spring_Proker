/* 갤러리 상태에서, 생성중 , 예약중 , 진행중, 종료 캠페인 전환 기능 */ 

/* div 클릭 요소 처리하기 in JQUERY  -> 다른 요소들과 모두 동일하다. */  

/* $('#target').click(function() {
  alert('Handler for .click() called.');
}); */


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



  $loading_button_box.click(function () {

    status_reserving=0;
    status_ing=0;
    status_end=0;



    // alert("클릭 확인 ");

    // 버튼 클릭시 연결된 갤러라 영역 색상 변경 (연결 확인 )


    // $gallery_loading_area.css("background-color", "#ff0");
    
    if (status_loading==0){
    
      if ($campaign_area.hasClass('gallery')) {

      // alert("if문 진입 ");

        $gallery_loading_area.css("display", "block");


        $gallery_ing_area.css("display", "none");

        $gallery_reserving_area.css("display", "none");

        $gallery_end_area.css("display", "none");

        status_loading=1;
  
    }
  }
  else if(status_loading==1){
    
    $gallery_loading_area.css("display", "block");


    $gallery_ing_area.css("display", "block");

    $gallery_reserving_area.css("display", "block");

    $gallery_end_area.css("display", "block");

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
    
      if ($campaign_area.hasClass('gallery')) {

      // alert("if문 진입 ");

        $gallery_loading_area.css("display", "none");


        $gallery_ing_area.css("display", "none");

        $gallery_reserving_area.css("display", "block");

        $gallery_end_area.css("display", "none");

        status_reserving=1;
  
    }
  }
  else if(status_reserving==1){
    
    $gallery_loading_area.css("display", "block");


    $gallery_ing_area.css("display", "block");

    $gallery_reserving_area.css("display", "block");

    $gallery_end_area.css("display", "block");

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
    
      if ($campaign_area.hasClass('gallery')) {

      // alert("if문 진입 ");

        $gallery_loading_area.css("display", "none");


        $gallery_ing_area.css("display", "block");

        $gallery_reserving_area.css("display", "none");

        $gallery_end_area.css("display", "none");

        status_ing=1;
  
    }
  }
  else if(status_ing==1){
    
    $gallery_loading_area.css("display", "block");


    $gallery_ing_area.css("display", "block");

    $gallery_reserving_area.css("display", "block");

    $gallery_end_area.css("display", "block");

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
    
      if ($campaign_area.hasClass('gallery')) {

      // alert("if문 진입 ");

        $gallery_loading_area.css("display", "none");


        $gallery_ing_area.css("display", "none");

        $gallery_reserving_area.css("display", "none");

        $gallery_end_area.css("display", "block");

        status_end=1;
  
    }
  }
  else if(status_end==1){
    
    $gallery_loading_area.css("display", "block");


    $gallery_ing_area.css("display", "block");

    $gallery_reserving_area.css("display", "block");

    $gallery_end_area.css("display", "block");

    status_end=0;
  }

  })



 
});


/* 갤러리 카드 슬라이드 다운 함수 */


$(function () {
  //----- OPEN

  var $n_button1 = $('#gallery_card_icon_button01');

  var $slidedown1 = $('#gallery_slidedown_01');


  $n_button1.click(function () {
    // alert("클릭 확인 ");

    // $slidedown.css("background-color", "#ff0");
    // 버튼 클릭시 sidebar 색 변경 (연결확인 )

    var duration = 300;

    $slidedown1.toggleClass('open');

    // open 클래스가 없으면 추가하고, 있으면 빼버립니다. ( 작동확인 완료 )

    if ($slidedown1.hasClass('open')) {
      $slidedown1.slideDown(duration);
      // bgLayerOpen();
    } else {
      $slidedown1.slideUp(duration);
      // bgLayerClear();
    };



  })




});


$(function () {
  //----- OPEN

  var $n_button1 = $('#gallery_card_icon_button02');

  var $slidedown1 = $('#gallery_slidedown_02');


  $n_button1.click(function () {
    // alert("클릭 확인 ");

    // $slidedown.css("background-color", "#ff0");
    // 버튼 클릭시 sidebar 색 변경 (연결확인 )

    var duration = 300;

    $slidedown1.toggleClass('open');

    // open 클래스가 없으면 추가하고, 있으면 빼버립니다. ( 작동확인 완료 )

    if ($slidedown1.hasClass('open')) {
      $slidedown1.slideDown(duration);
      // bgLayerOpen();
    } else {
      $slidedown1.slideUp(duration);
      // bgLayerClear();
    };



  })




});


$(function () {
  //----- OPEN

  var $n_button1 = $('#gallery_card_icon_button03');

  var $slidedown1 = $('#gallery_slidedown_03');


  $n_button1.click(function () {
    // alert("클릭 확인 ");

    // $slidedown.css("background-color", "#ff0");
    // 버튼 클릭시 sidebar 색 변경 (연결확인 )

    var duration = 300;

    $slidedown1.toggleClass('open');

    // open 클래스가 없으면 추가하고, 있으면 빼버립니다. ( 작동확인 완료 )

    if ($slidedown1.hasClass('open')) {
      $slidedown1.slideDown(duration);
      // bgLayerOpen();
    } else {
      $slidedown1.slideUp(duration);
      // bgLayerClear();
    };



  })




});



 