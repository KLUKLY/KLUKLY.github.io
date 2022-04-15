$(document).ready(function() {
    //首先将#btn隐藏
    $("#top").hide();
    // console.log("1");
    //当滚动条的位置处于距顶部50像素以下时，跳转链接出现，否则消失
    $(function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() >= 50) {
          $("#top").fadeIn(200);
        } else {
          $("#top").fadeOut(200);
        }
      });
      //当点击跳转链接后，回到页面顶部位置
      $("#top").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },
        500);
        // return false;
      });
    });
  });