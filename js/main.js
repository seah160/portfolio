      // 페이지 스크롤 함수
      function goto_scroll(move_top) {
        $("html,body")
          .stop()
          .animate({ scrollTop: move_top + "px" }, 800);
      }
      
      $(function() {
        $('[data-youtube]').youtube_background();
        // gnb 이벤트
        var link = document.querySelectorAll("#gnb a");
        for (let i = 0; i < link.length; i++) {
          link[i].addEventListener("click", function() {
            var top = document.querySelector(link[i].hash).offsetTop;
            goto_scroll(top);
            // 인디케이터 업데이트
            update_pager(i);
          });
        }
        
        // 우측 인디케이터 이벤트
        $("#pager li a").click(function() {
          $("#pager li").removeClass("on");
          $(this).parent().addClass("on");
          var top = $(this.hash).offset().top;
          goto_scroll(top);
        });

        // 인디케이터 업데이트 함수
        function update_pager(page_num){
          console.log(page_num);
          $("#pager li").removeClass("on");
          $('#pager li')
            .eq(page_num)
            .addClass("on");
        }

        // scroll 이벤트
        var s = $('section').length;
        var sec_top_y = [];
        for(var i = 0; i < s; i++){
          sec_top_y[i] = $('section').eq(i).offset().top;
          console.log(sec_top_y)
        }

        $(window).scroll(function(){
          var top = $(this).scrollTop();
          if(top >= sec_top_y[0]){
            update_pager(0);
          }
          if(top >= sec_top_y[1]){
            update_pager(1);
          }
          if(top >= sec_top_y[2]){
            update_pager(2);
          }
          if(top >= sec_top_y[3]){
            update_pager(3);
          }
          if(top >= sec_top_y[4]){
            update_pager(4);
          }

        })

        // auto type
$(function () {
  var h2 = document.querySelector('.type');
  var text = h2.getAttribute('data-text');
  var text_array = text.split('.')
  var agent = navigator.userAgent.toLowerCase();

  if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
    h2.innerHTML = text_array[0] + '<br>' + text_array[1] + '<br>' + '<br>' + text_array[2] + '<br>' + text_array[3];
  } else {
    var el = '.type';
    typeIt = new TypeIt(el, {
      loop: true
    });
    typeIt
      .type(text_array[0])
      .pause(700)
      .break()
      .type(text_array[1])
      .pause(700)
      .break()
      .break()
      .type(text_array[2])
      .pause(700)
      .break()
      .type(text_array[3])
      .pause(8000)
      .go();
  }
});

// 앵커태그 선택시 부드러운 스크롤링(해쉬)
$('.depth1 li a, #contact .iconTop, .portA_btn').on('click', function () {
  var hash = this.hash;
  var top = $(hash).offset().top;
  $('html, body').animate({
    scrollTop: top
  }, 600)
  return false;
})

// fancybox
$('[data-fancybox]').fancybox({
  selector: '[data-fancybox="gallery"]',
  loop: true
});

// portfolio img 효과의 호버클래스 remove
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


      }); // end $