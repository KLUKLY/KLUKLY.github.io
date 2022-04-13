var currentPage = 1;
function moreArticle(){
    let str = "";
    let cP = currentPage;
    for(let i=cP;i<cP+6;i++){
        str = "#page" + i;
        if($(str).length==0){//只能根据jQuery的length属性来判断，因为不管是否找到都会返回
            // $(".more").css("display","none");//attr改变的是属性，css改变的是样式
            $(".more").text("暂无更多");
            $(".more").attr("class","nomore");
            break;
        }
        $(str).css("display","block");
        currentPage++;
    }
}