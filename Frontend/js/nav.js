/*nav 바 기능 함수들 */

/* 홈 버튼 * /


/* 사이드바 기능 함수 */

$(function () {

  var $s_button = $('.sidemenu_button');
  var $sidebar = $('#sidebar');
  var $main = $('main');
  var $nav = $('.nav');


  var duration = 300;




  $s_button.click(function () {
    // alert("클릭 확인 ");

    //$sidebar.css("background-color", "#ff0");

    // $main.css("background-color", "#ff0");
    // 버튼 클릭시 sidebar 색 변경 (연결확인 )


    $sidebar.toggleClass('open');

    // open 클래스가 없으면 추가하고, 있으면 빼버립니다. ( 작동확인 완료 )

    if ($sidebar.hasClass('open')) {
      $sidebar.stop(true).animate({ left: '0%' }, duration);
    } else {
      $sidebar.stop(true).animate({ left: '-15%' }, duration);
    };



  })

  $main.on("click", function (e) {
    //alert("eeee");
    if ($sidebar.hasClass('open')) {

      // alert("if문 진입");

      // $sidebar.css("background-color", "#ff0");


      $sidebar.stop(true).animate({ left: '-15%' }, duration);

      $sidebar.toggleClass('open');

    }
  });

  

});


/* 사이드 바 메뉴 슬라이드 다운 */


$(function () {
  //----- OPEN

  var $s_button1 = $('#menu01_button');


  var $slidedown1 = $('#sidebar_slidedown_backend');


  var $icon1 = $('#menu01_icon');




  $s_button1.on('click', function (e) {
    // alert("클릭 확인 ");

    // $icon1.css("background-color", "#ff0");
    // 버튼 클릭시 sidebar 색 변경 (연결확인 )

    var duration = 300;

    $slidedown1.toggleClass('open');

    // open 클래스가 없으면 추가하고, 있으면 빼버립니다. ( 작동확인 완료 )

    /* 아이콘 변환 */


    if ($slidedown1.hasClass('open')) {
      $slidedown1.slideDown(duration);
      // bgLayerOpen();
    } else {
      $slidedown1.slideUp(duration);
      // bgLayerClear();
    };

    if ($icon1.hasClass('fa-chevron-down')) {
      $icon1.removeClass('fa-chevron-down');
      $icon1.addClass('fa-angle-up');

      // bgLayerOpen();
    } else if ($icon1.hasClass('fa-angle-up')) {
      $icon1.removeClass('fa-angle-up');
      $icon1.addClass('fa-chevron-down');
    };

    e.preventDefault();
    e.stopPropagation();


    $s_button1.stop(clearQueue);

    

    



  })





});



$(function () {
  //----- OPEN

  var $s_button2 = $('#menu02_button');


  var $slidedown2 = $('#sidebar_slidedown_Frontend');


  var $icon2 = $('#menu02_icon');






  $s_button2.on('click', function (e) {
    // alert("클릭 확인 ");

    // $icon1.css("background-color", "#ff0");
    // 버튼 클릭시 sidebar 색 변경 (연결확인 )

    var duration2 = 300;

    $slidedown2.toggleClass('open2');

    // open 클래스가 없으면 추가하고, 있으면 빼버립니다. ( 작동확인 완료 )

    /* 아이콘 변환 */




    if ($slidedown2.hasClass('open2')) {
      $slidedown2.slideDown(duration2);
      // bgLayerOpen();
    } else {
      $slidedown2.slideUp(duration2);
      // bgLayerClear();
    };

    if ($icon2.hasClass('fa-chevron-down')) {
      $icon2.removeClass('fa-chevron-down');
      $icon2.addClass('fa-angle-up');

      // bgLayerOpen();
    } else if ($icon2.hasClass('fa-angle-up')) {
      $icon2.removeClass('fa-angle-up');
      $icon2.addClass('fa-chevron-down');
    };


    e.preventDefault();
    e.stopPropagation();

    return false;






  })

  


});


/* 검색창 구현 */

$(function () {

  var $cp_searchbar = $('.campaign_searchbar');
  var $cp_slidebox = $('.campaign_searchbar_slidebox');

  var $main = $('main');





  $cp_searchbar.on("propertychange change paste input", function () {

    $cp_slidebox.slideDown(0);


    if (!$cp_searchbar.val()) {
      // alert('칸이 비어있습니다.');

      $cp_slidebox.css("display", "none");

    }

    // alert("감지 확인 ");



  });

  $main.on("click", function (e) {
    // alert("eeee");

    $cp_slidebox.css("display", "none");

    



    
  });


});

// 검색창 필터 


function filter() {

  var value, name, item, i;

  value = document.getElementById("value").value.toUpperCase();

  item = document.getElementsByClassName("item");

  for (i = 0; i < item.length; i++) {
    name = item[i].getElementsByClassName("name");
    if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
      item[i].style.display = "flex";
    } else {
      item[i].style.display = "none";
      // item[i].style.fontsize = 0;

    }
  }
}





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


/* 문의하기 모달 팝업 함수 */


/* $(function () {

  var $s_button = $('.popup_send');
  var $popup = $('#inquireModal');


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


}); */

/* 알림 슬라이드 다운 함수 */


$(function () {
  //----- OPEN

  var $n_button = $('.notice_icon');
  var $x_button = $('.slide_down_headbar_xbutton');

  var $slidedown = $('.slide_down');

  var $main = $('main');

  var duration = 300;




  $n_button.click(function () {
    // alert("클릭 확인 ");

    // $slidedown.css("background-color", "#ff0");
    // 버튼 클릭시 sidebar 색 변경 (연결확인 )


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

  $main.on("click", function (e) {
    //alert("eeee");
    if ($slidedown.hasClass('open')) {

      // alert("if문 진입");

      // $sidebar.css("background-color", "#ff0");


      $slidedown.slideUp(duration);

      $slidedown.toggleClass('open');

    }
  });

});

/* id 표시 관련 함수들 */

$(function () {

  var $id_main_button = $('.idstatus_button_main');
  var $id_detail_button = $('.idstatus_button_detail');
  var $return_main_button = $('.idstatus');
  var $main = $('main');




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

  $main.on("click", function (e) {
    //alert("eeee");
    if ($id_detail_button.hasClass('idstatus_button_open')) {

      

    }
    else{

      // alert("if문 진입");

      // $sidebar.css("background-color", "#ff0");


      $id_detail_button.replaceWith($id_main_button);

      $id_detail_button.toggleClass('idstatus_button_open');

    }
  });



});