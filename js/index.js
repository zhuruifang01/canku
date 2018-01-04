$(function(){
//left_menu
    $(".sideleft ul").click(function () {
        var index=$(this).index(".sideleft ul");
        $(".sideleft ul").removeClass("active");
        $(".sideleft ul").eq(index).addClass("active");
        $("iframe").css("display","none").eq(index).css("display","block");
    });
//number.html
    $(".header1 .xuanze").click(function(){
            $(".contain1 .conn .con .checkbox").css("display","block");
            $(".header1 .stop").css("background","#53a2e0");
            $(".header1 .delete").css("background","#53a2e0");
        }
    );
    // page
    $.jqPaginator('#pagination1', {
        totalPages: 100,
        visiblePages: 10,
        currentPage: 1,
    });


});