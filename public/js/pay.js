window.onload = function () {
    var url = location.search;    //?number=23698546
    var arr = url.split("=");      //?number, 23698546
    //console.log(arr[1]);
    var number = arr[1];

    $('#p2').html('支付订单号：acd'+number+'fer');

}




//tab切换选项卡
$('#bottom ul li').click(function () {
    $('#bottom ul li').removeClass('active');
    $('#bottom div').removeClass('active');

    $(this).addClass('active');
    $('#bottom div').eq($(this).index()).addClass('active');
});