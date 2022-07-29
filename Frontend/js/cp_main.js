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

function bgLayerClear(){
  var object = $('.bgLayer');
  if(object.length) {
    object.fadeOut(500, function() {
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