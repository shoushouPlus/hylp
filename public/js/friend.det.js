/**
 * Created by ASUS on 2018/12/10.
 */

// 导航栏移入移出
$('#l1').mouseenter(function () {
    $('#down').show();
});
$('#down').mouseenter(function () {
    $('#down').show();
});
$('#l1').mouseleave(function () {
    $('#down').hide();
});
$('#down').mouseleave(function () {
    $('#down').hide();
});
$('#down').click(function () {
    $('#down').hide();
});
//登陆
$('#landing').click(function () {
    $('#login').show()
});
$('.close1').click(function () {
    $('#login').hide()
});
$('#login-exit').click(function () {
    $('#login').hide()
});
//注册
$('#registered').click(function () {
    $('#join').show()
});
$('.close2').click(function () {
    $('#join').hide()
});
$('#join-exit').click(function () {
    $('#join').hide()
})
$('#f_box').on('click','.div10',function () {
        var  str=$('#box12').html();
        if(str>0){
            str_1=str-1;
            $('#box12').html(str_1)
        }


    })
$('#f_box').on('click','.div11',function () {
        var  str1=$('#box12').html();
        str_2 =parseInt(str1)+1;
        $('#box12').html(str_2)
    })
$('#f_box').on('click','.bookOnce',function () {
        var sId = $(this).attr('data-index');
        //console.log(sId);
        window.location.href = "http://localhost:8084/pages/book1.html?id="+sId+"";
    })






