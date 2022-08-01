/*nav 바 기능 함수들 */

$(function () {

  var $cp_button = $('.campaign_plus_button');

  $cp_button.click(function () {
    //alert("클릭 확인 ");


  })
});


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
});

/* 알림 슬라이드 다운 함수 */


$(function () {
  //----- OPEN

  var $n_button = $('.notice_icon');
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

  var $footer = $('footer');



  $gallery_button.click(function () {
    // alert("클릭 확인 ");

    // $campaign_default.css("background-color", "#ff0");
    // 버튼 클릭시 sidebar 색 변경 (연결확인 )


    $footer.css("display", "none");






    
    // $slidedown.css("background-color", "#ff0");



    // open 클래스가 없으면 추가하고, 있으면 빼버립니다. ( 작동확인 완료 )

      if ($campaign_area.hasClass('list')) {

        $campaign_gallery.css("display", "block");

  
        $campaign_list.replaceWith($campaign_gallery);

        $campaign_area.addClass('gallery');

        $campaign_area.removeClass('list');
  
  
      } else if($campaign_area.hasClass('gallery')){

                /*         그대로 유지 */
      };



  })

  $list_button.click(function () {


    // alert("클릭 확인 ");

    // $campaign_list.css("background-color", "#ff0");
    // 버튼 클릭시 sidebar 색 변경 (연결확인 )


    // open 클래스가 없으면 추가하고, 있으면 빼버립니다. ( 작동확인 완료 )


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

/* 버튼 hover 효과 모음   */

$(function () {

  var $home_button = $('.home_button');
  var $sidemenu_button = $('.sidemenu_button');
  var $email_icon = $('.email_icon');
  var $notice_icon = $('.notice_icon');
  var $change_gallery = $('.change_gallery');
  var $change_list = $('.change_list');



  $home_button.hover(function(){

    // alert("오버 효과 입니다. ");


    $home_button.removeClass('icon_white');
    $home_button.addClass('icon_blue');


  }, function(){

    // alert("오버 효과에서 벗어납니다.");


    $home_button.removeClass('icon_blue');
    $home_button.addClass('icon_white');


  });

  $sidemenu_button.hover(function(){

    // alert("오버 효과 입니다. ");


    $sidemenu_button.removeClass('icon_white');
    $sidemenu_button.addClass('icon_blue');


  }, function(){

    // alert("오버 효과에서 벗어납니다.");


    $sidemenu_button.removeClass('icon_blue');
    $sidemenu_button.addClass('icon_white');


  });

  $email_icon.hover(function(){

    // alert("오버 효과 입니다. ");


    $email_icon.removeClass('icon_white');
    $email_icon.addClass('icon_blue');


  }, function(){

    // alert("오버 효과에서 벗어납니다.");


    $email_icon.removeClass('icon_blue');
    $email_icon.addClass('icon_white');


  });

  $notice_icon.hover(function(){

    // alert("오버 효과 입니다. ");


    $notice_icon.removeClass('icon_white');
    $notice_icon.addClass('icon_blue');


  }, function(){

    // alert("오버 효과에서 벗어납니다.");


    $notice_icon.removeClass('icon_blue');
    $notice_icon.addClass('icon_white');


  });

  $change_gallery.hover(function(){

    // alert("오버 효과 입니다. ");


    $change_gallery.removeClass('icon_black');
    $change_gallery.addClass('icon_blue');


  }, function(){

    // alert("오버 효과에서 벗어납니다.");


    $change_gallery.removeClass('icon_blue');
    $change_gallery.addClass('icon_black');


  });

  $change_list.hover(function(){

    // alert("오버 효과 입니다. ");


    $change_list.removeClass('icon_black');
    $change_list.addClass('icon_blue');


  }, function(){

    // alert("오버 효과에서 벗어납니다.");


    $change_list.removeClass('icon_blue');
    $change_list.addClass('icon_black');


  });













});