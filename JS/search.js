function search(){
    $(".search_result").html("");
    let search = $(".search_bar").val();
    if(search=='') return;//如果搜索框没内容就不执行了
    let reg = new RegExp(search);//获得正则匹配
    
    let page = 0;
    while(list[page]){
        if(list[page].title.match(reg)){
            $(".search_result").append(
                $('<li></li>').append(
                    $('<a class="search_result_block" href="../articles/'+ list[page].href+'">' + '</a>').append(
                        $('<div>'+ list[page].title + '</div>')
                    ).append(
                        $('<span>'+ list[page].time+'</span>')
                    ).append(
                        $('<span>'+ list[page].tag+'</span>')
                    )
                ).append(
                    $('<hr>')
                )
            );
        }
        page++;
    }
}

$(document).ready(()=>{
    $(".search_a").on("click",()=>{
        $(".search_mask").css("display","block");
    });
    $(".search_close").on("click",()=>{
        $(".search_mask").css("display","none");
    });
    $(".search_bar").bind("input propertychange", ()=>{
        // console.log("start");
        // var xmlObj = false;
        // if(window.ActiveXObject){
        //     xmlObj = new ActiveXObject("Microsoft.XMLHTTP");
        // }else if(window.XMLHttpRequest){
        //     xmlObj = new XMLHttpRequest();
        // }
        // // $(".search_tag").load('../feed.xml');
        // // console.log($(".search_tag"));

        // xmlObj.open('GET','../feed.xml',true);
        // xmlObj.onreadystatechange = function(){
        //     console.log("2");
        //     if(xmlObj.readyState === 4){
        //         console.log("3");
        //         if(xmlObj.status >= 200 && xmlObj.status <300){
        //             console.log("4");
        //             searchArticles();
        //         }
        //     }
        // }

        // $.ajax({
        //     url: '../feed.xml',
        //     type: 'GET',
        //     dataType: 'xml',
        //     success:function(xml){
        //         var article = $(xml).find('article').text();
        //         console.log(article);
        //     }
        // })

        // var xmlDoc = getxmlDoc("feed.xml");
        // var list = xmlDoc.getElementsByTagName("article");
        // let num = 0;
        // while(list[num]){
        //     console.log(list[num].childNodes[0].nodeValue);
        // }
        search();
    });

})

var list = [{
    title: '关于我写博客这件事',
    tag: '随记',
    time: '2022-3-19',
    href: '1.html',
},{
    title: '陌生人的棺材',
    tag: '写作',
    time: '2022-4-6',
    href: '2.html',
}]