$(document).ready(()=>{
    $(document).scroll(()=>{
        var scrollTop;
        var scrollHeight;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
            scrollHeight = document.documentElement.scrollHeight;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
            scrollHeight = document.body.scrollHeight;
        }
        var percent = scrollTop / (scrollHeight-$(window).height());
        $(".scrollTop").css("width",percent*100+"%");
    });
});