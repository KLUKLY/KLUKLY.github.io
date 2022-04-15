function callback(data){
    alert(data);
}
$(document).ready(()=>{

    var curWwwPath=window.document.location.href; 

    var pathName=window.document.location.pathname; 

    var pos=curWwwPath.indexOf(pathName); 

    var localhostPath=curWwwPath.substring(0,pos); 


    $.ajax({
        type: 'get',
        async: true,
        url: localhostPath+'/JS/colorTag',
        dataType: 'jsonp',
        error: ()=>{
            alert('fail');
        }
    })

    

    // if(colorTag=='light'){
    //     console.log('exist');
    // }else{
    //     colorTag='light';
    //     console.log(colorTag);
    // }
    // function callback(data){
    //     alert(data.colorTag)
    // }
    // function addScriptTag(src){
    //     var script = document.createElement('script');
    //     script.setAttribute("type","text/javascript");
    //     script.src = src;
    //     document.body.appendChild(script);
    // }
    // window.onload = ()=>{
    //     addScriptTag('JS/colorTag');
    // }
    
    // $.cookie('stylel','light', {expires:7, path:'/', raw:true});
    // $.cookie('styled','dark', {expires:7, path:'/', raw:true});

    // if(!$.cookie('style',{path:'/'})){
    //     $.cookie('style','light', {expires:7, path:'/', raw:true});
    // }

    // var styles = $.cookie('stylel', {path:'/'}).substr(6);
    // var style = $.cookie('style', {path:'/'}).substr(5);

    // console.log(style);
    // console.log(styles);


    // if(style==styles){
    //     document.getElementById('light').disabled=false;
    //     document.getElementById('dark').disabled=true;
    // }else{
    //     document.getElementById('dark').disabled=false;
    //     document.getElementById('light').disabled=true;
    // }

    $('.change_color').on('click',()=>{
        // var str = decodeURIComponent($.cookie('style',{path:'../'}));
        // console.log(str);
        
        if(style==styles){
            
            document.getElementById('light').disabled=true;
            document.getElementById('dark').disabled=false;
            $.cookie('style','dark',{path:'../'});
            style = $.cookie('styled', {path:'../'}).substr(5);
            console.log($.cookie('style',{path:'../'}));

        }else{
            document.getElementById('dark').disabled=true;
            document.getElementById('light').disabled=false;
            $.cookie('style','light',{path:'../'});
            style = $.cookie('stylel', {path:'../'}).substr(5);
            console.log($.cookie('style',{path:'../'}));

        }

        // var s = $.cookie('style',{path:'/'}).substr(5);
        // console.log(s);
        // console.log($.cookie('stylelight',{path:'/'}));
    })
})