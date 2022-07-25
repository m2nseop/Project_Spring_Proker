$(function(){

  var $s_button = $('.sidemenu_button');
  var $sidebar = $('#sidebar');

  $s_button.click(function(){
    //alert("클릭 확인 ");

    //$sidebar.css("background-color", "#ff0");
    // 버튼 클릭시 sidebar 색 변경 (연결확인 )

    var duration = 300;

    $sidebar.toggleClass('open');

    // open 클래스가 없으면 추가하고, 있으면 빼버립니다. ( 작동확인 완료 )

    if ($sidebar.hasClass('open')) {
      $sidebar.stop(true).animate({ left: '0px' }, duration);
    } else {
      $sidebar.stop(true).animate({ left: '-300px' }, duration);
    };


      /*


    $(function () {
      var duration = 300;

      var $side = $('#sidebar');
      var $s_button = $('#sidemenu_button');

      $s_button.click(function()){

      });


      var $sidebt = $side.find('#sidemenu_button').on('click', function () {
        $side.toggleClass('open');

        if ($side.hasClass('open')) {
          $side.stop(true).animate({ left: '0px' }, duration);
        } else {
          $side.stop(true).animate({ left: '-300px' }, duration);
          $sidebt.find('span').text('OPEN');
        };
      });
    });

    */


    


    
  })
});
