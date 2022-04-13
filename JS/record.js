$(document).ready(()=>{
    var date = new Date();
    var pastdate = new Date("2022/4/1");
    var nowdate = date.getTime() - pastdate.getTime();
    var diff = nowdate / (1000 * 3600 * 24);
    $('#date').text(Math.round(diff));
});