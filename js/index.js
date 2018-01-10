$(function(){
//left_menu
    $(".sideleft ul").click(function () {
        var index=$(this).index(".sideleft ul");
        $(".sideleft ul").removeClass("active");
        $(".sideleft ul").eq(index).addClass("active");
        $("iframe").css("display","none").eq(index).css("display","block");
    });
// ========人员管理==========================
//number.html
    $(".header1 .xuanze").click(function(){
            $(".contain1 .conn .con .checkbox").css("display","block");
            $(".header1 .stop").css("background","#53a2e0");
            $(".header1 .delete").css("background","#53a2e0");
        }
    );
//默认日期：
    //当前日期：
    function currentTime(){
        var d=new Date(), str='';
        str+=d.getFullYear()+'-';
        str+=("0" + (d.getMonth() + 1)).slice(-2)+'-';
        str+=("0" + d.getDate()).slice(-2);
        return str;
    }
    //前一个月
    function getlastmonth() {
        var currentYear=new Date().getFullYear();
        var currentMonth=new Date().getMonth()+1;
        var lastMonth=new Date().getMonth();
        var currentDate=("0"+new Date().getDate()).slice(-2);
        var prevCurrentYear=0;
        var prevCurrentMonth=0;
        if(currentMonth==1){
            prevCurrentYear=currentYear-1;
            prevCurrentMonth=12;
        }else{
            prevCurrentYear=currentYear;
            prevCurrentMonth=("0" + (currentMonth-1)).slice(-2);
        }
        var lastmonth=prevCurrentYear+"-"+prevCurrentMonth+"-"+currentDate;
        return lastmonth;
    }

    var from=getlastmonth();
    var to=currentTime();
    $(".outer #from input").attr("value",from);
    $(".outer #to input").attr("value",to);
});