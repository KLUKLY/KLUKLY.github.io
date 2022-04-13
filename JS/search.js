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

        $.ajax({
            url: '../feed.xml',
            type: 'GET',
            dataType: 'xml',
            success:function(xml){
                var article = $(xml).find('article').text();
                console.log(article);
            }
        })

        // var xmlDoc = getxmlDoc("feed.xml");
        // var list = xmlDoc.getElementsByTagName("article");
        // let num = 0;
        // while(list[num]){
        //     console.log(list[num].childNodes[0].nodeValue);
        // }

    });

    // function getxmlDoc(xmlFile) {
    //     var xmlDoc;
    //     if (window.ActiveXObject) {
    //         xmlDoc = new ActiveXObject('Microsoft.XMLDOM');//IE
    //         xmlDoc.async = false;
    //         xmlDoc.load(xmlFile);
    //     }
    //     else if (isFirefox=navigator.userAgent.indexOf("Firefox")>0) { //火狐

    //         xmlDoc = document.implementation.createDocument('', '', null);
    //         xmlDoc.load(xmlFile);
    //     }
    //     else{ //谷歌
    //       var xmlhttp = new window.XMLHttpRequest();
    //         xmlhttp.open("GET",xmlFile,false);
    //         xmlhttp.send(null);
    //         if(xmlhttp.readyState == 4){
    //         xmlDoc = xmlhttp.responseXML.documentElement;
    //         } 
    //     }

    //     return xmlDoc;
    // }
})
/*
        $(".search_result").html("");
        let search = $(".search_bar").val();
        if(search=='') return;//如果搜索框没内容就不执行了
        let reg = new RegExp(search);//获得正则匹配
    
        let page = 1;
        let str = "#page" + page;  
        // $("#search_tag").load('index.html '+str);

        while($(str).length){        
            // console.log($("search_tag"));
            let e = $(str).children(".brief").children(".brief_title");//寻找文章链接
            let res = e.text();
            //正则匹配
            if(res.match(reg)){
                //嵌套添加
                $(".search_result").append(
                    $('<li></li>').append(e.clone())
                );
            }
            page++;
            str = "#page" + page;
            // $("#search_tag").load('index.html '+str);
        }
*/