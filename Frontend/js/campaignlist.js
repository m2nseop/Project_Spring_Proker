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