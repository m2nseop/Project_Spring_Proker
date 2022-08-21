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



})
 */

/*nav 바 기능 함수들 */

/* 홈 버튼 * /





/* 사이드바 기능 함수 */

$(function () {

  var $s_button = $('.sidemenu_button');
  var $sidebar = $('#sidebar');

  $s_button.click(function () {
    //alert("클릭 확인 ");

    //$sidebar.css("background-color", "#ff0");
    // 버튼 클릭시 sidebar 색 변경 (연결확인 )

    var duration = 300;

    $sidebar.toggleClass('open');

    // open 클래스가 없으면 추가하고, 있으면 빼버립니다. ( 작동확인 완료 )

    if ($sidebar.hasClass('open')) {
      $sidebar.stop(true).animate({ left: '0%' }, duration);
    } else {
      $sidebar.stop(true).animate({ left: '-15%' }, duration);
    };



  })
});

/* 캠페인 추가 */ 

$(function () {

  var $cp_button = $('.campaign_plus_button');

  $cp_button.click(function () {
    //alert("클릭 확인 ");


  })
});

/* 캠페인 검색 */ 

$(function () {

  var $campaign_searchbar = $('.campaign_searchbar');
  var $campaign_searchbar_slidebox = $('.campaign_searchbar_slidebox');


  $campaign_searchbar.click(function () {
    // alert("클릭 확인 ");

    // $campaign_searchbar_slidebox.css("background-color", "#ff0");


  })
});


/* 캠페인 티켓 관련 함수들 */

/* function hello(){
  alert("안녕하세요");
} */


/* 배경화면 흐리게 처리 */
function bgLayerOpen() {
  if (!$('.bgLayer').length) {
    $('<div class="bgLayer"></div>').appendTo($('body'));
  }
  var object = $(".bgLayer");
  var w = $(document).width() + 12;
  var h = $(document).height();

  object.css({ 'width': w, 'height': h });
  object.fadeIn(500); //생성되는 시간 설정
  $('html').css("overflow", "hidden");
}

function bgLayerClear() {
  var object = $('.bgLayer');
  if (object.length) {
    object.fadeOut(500, function () {
      object.remove();
    });
  }
  $('html').css("overflow", "scroll");
}




$(function () {

  var $s_button = $('.popup_send');
  var $popup = $('.popup');


  //----- OPEN
  $('[data-popup-open]').on('click', function (e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-open');

    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);


    e.preventDefault();
  });

  //----- CLOSE
  $('[data-popup-close]').on('click', function (e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');

    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);


    e.preventDefault();
  });

  //------ 제출 

  $s_button.on('click', function (e) {

  //alert("클릭 확인 ");


  $popup.fadeOut(350);

  alert("문의사항이 제출되었습니다.");



    e.preventDefault();

  });

  
});

/* 알림 슬라이드 다운 함수 */


$(function () {
  //----- OPEN

  var $n_button = $('.notice_icon');
  var $x_button = $('.slide_down_headbar_xbutton');

  var $slidedown = $('.slide_down');


  $n_button.click(function () {
    // alert("클릭 확인 ");

    // $slidedown.css("background-color", "#ff0");
    // 버튼 클릭시 sidebar 색 변경 (연결확인 )

    var duration = 300;

    $slidedown.toggleClass('open');

    // open 클래스가 없으면 추가하고, 있으면 빼버립니다. ( 작동확인 완료 )

    if ($slidedown.hasClass('open')) {
      $slidedown.slideDown(duration);
      // bgLayerOpen();
    } else {
      $slidedown.slideUp(duration);
      // bgLayerClear();
    };



  })


  $x_button.click(function () {
    // alert("클릭 확인 ");

    var duration = 300;


    $slidedown.slideUp(duration);


  



  })

});

/* id 표시 관련 함수들 */

$(function () {

  var $id_main_button = $('.idstatus_button_main');
  var $id_detail_button = $('.idstatus_button_detail');
  var $return_main_button = $('.idstatus');

  $('body').on('click', '.idstatus_button_main', function () {
    //alert('버튼을 세부버튼으로 변경합니다.');

    $id_detail_button.toggleClass('idstatus_button_open');

    $id_main_button.replaceWith($id_detail_button);

  });


  $('body').on('click', '.idstatus', function () {
    //alert('버튼을 메인버튼으로 변경합니다.');

    $id_detail_button.replaceWith($id_main_button);

    $id_detail_button.toggleClass('idstatus_button_open');

  });



});

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

  var $n_button = $('.gallery_card_icon_button');

  var $slidedown = $('.gallery_card_slidedown');


  $n_button.click(function () {
    // alert("클릭 확인 ");

    // $slidedown.css("background-color", "#ff0");
    // 버튼 클릭시 sidebar 색 변경 (연결확인 )

    var duration = 300;

    $slidedown.toggleClass('open');

    // open 클래스가 없으면 추가하고, 있으면 빼버립니다. ( 작동확인 완료 )

    if ($slidedown.hasClass('open')) {
      $slidedown.slideDown(duration);
      // bgLayerOpen();
    } else {
      $slidedown.slideUp(duration);
      // bgLayerClear();
    };



  })




});

 


/* 버튼 hover 효과 모음   */

// $(function () {

//   var $home_button = $('.home_button');
//   var $sidemenu_button = $('.sidemenu_button');
//   var $email_icon = $('.email_icon');
//   var $notice_icon = $('.notice_icon');
//   var $change_gallery = $('.change_gallery');
//   var $change_list = $('.change_list');



//   $home_button.hover(function(){

//     // alert("오버 효과 입니다. ");


//     $home_button.removeClass('icon_white');
//     $home_button.addClass('icon_blue');


//   }, function(){

//     // alert("오버 효과에서 벗어납니다.");


//     $home_button.removeClass('icon_blue');
//     $home_button.addClass('icon_white');


//   });

//   $sidemenu_button.hover(function(){

//     // alert("오버 효과 입니다. ");


//     $sidemenu_button.removeClass('icon_white');
//     $sidemenu_button.addClass('icon_blue');


//   }, function(){

//     // alert("오버 효과에서 벗어납니다.");


//     $sidemenu_button.removeClass('icon_blue');
//     $sidemenu_button.addClass('icon_white');


//   });

//   $email_icon.hover(function(){

//     // alert("오버 효과 입니다. ");


//     $email_icon.removeClass('icon_white');
//     $email_icon.addClass('icon_blue');


//   }, function(){

//     // alert("오버 효과에서 벗어납니다.");


//     $email_icon.removeClass('icon_blue');
//     $email_icon.addClass('icon_white');


//   });

//   $notice_icon.hover(function(){

//     // alert("오버 효과 입니다. ");


//     $notice_icon.removeClass('icon_white');
//     $notice_icon.addClass('icon_blue');


//   }, function(){

//     // alert("오버 효과에서 벗어납니다.");


//     $notice_icon.removeClass('icon_blue');
//     $notice_icon.addClass('icon_white');


//   });

//   $change_gallery.hover(function(){

//     // alert("오버 효과 입니다. ");


//     $change_gallery.removeClass('icon_black');
//     $change_gallery.addClass('icon_blue');


//   }, function(){

//     // alert("오버 효과에서 벗어납니다.");


//     $change_gallery.removeClass('icon_blue');
//     $change_gallery.addClass('icon_black');


//   });

//   $change_list.hover(function(){

//     // alert("오버 효과 입니다. ");


//     $change_list.removeClass('icon_black');
//     $change_list.addClass('icon_blue');


//   }, function(){

//     // alert("오버 효과에서 벗어납니다.");


//     $change_list.removeClass('icon_blue');
//     $change_list.addClass('icon_black');


//   });





// });