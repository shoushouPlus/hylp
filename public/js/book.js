window.onload = function () {

    //session部分
    $.ajax({
        url: '/ball',
        success: function (err) {
            if (err.error == 0) {
                $('#ball').show();
                $('#exit').show();
                $('#landing').hide();
                $('#registered').hide()
                $('#ball').attr('src', err.data[0].u_headPhoto)
            }
        }
    });
}
    var url = location.search;    //?id=4
    var arr = url.split("=");      //?id , 4


    $('#BtnBox').append(`<a href="javascript:;"  data-index="${arr[1]}" class="submitOrderBtn">提交订单</a>`);

    $.ajax({
        url:'/loadWeddingDetails',
        data:{data:arr[1]},
        success:function (res) {
            if(!res.error){

                var s1=res.data[0].m_mealNumber;
                var s2=res.data[0].m_bigTitle;
                var s3=res.data[0].m_Title;

                $('.mealNumber').html(s1);
                $('.bigTitle').html(s2);
                $('.title').html(s3);
            }
        }
    })

    var reg =  {
        name:/[\u4e00-\u9fa5]{2,6}/,
        phone:/^1[3-9]\d{9}$/,
        IdCard:/[1-68]\d{5}/
    };

    //姓名
    $("input[name='guestName']").blur(function () {
         var sName = $("input[name='guestName']").val();
        if (!reg.name.test(sName)) {
            $('.notice').eq(0).html('请输入正确的中文名');
            $('.notice').eq(0).removeClass('green');
            $('.notice').eq(0).addClass('red');
        } else {
            $('.notice').eq(0).html('✔');
            $('.notice').eq(0).removeClass('red');
            $('.notice').eq(0).addClass('green');
        }
    });
    //电话
    $("input[name='guestPhone']").blur(function () {
        var sPhone = $("input[name='guestPhone']").val();
        if (!reg.phone.test(sPhone)) {
            $('.notice').eq(1).html('请输入正确的联系方式');
            $('.notice').eq(1).removeClass('green');
            $('.notice').eq(1).addClass('red');
        } else {
            $('.notice').eq(1).html('✔');
            $('.notice').eq(1).removeClass('red');
            $('.notice').eq(1).addClass('green');
        }
    });
    //身份证号
    $("input[name='IDCard']").blur(function () {
        var sIdCard = $("input[name='IDCard']").val();
        if (!reg.IdCard.test(sIdCard)) {
            $('.notice').eq(2).html('请输入合法的身份证号');
            $('.notice').eq(2).removeClass('green');
            $('.notice').eq(2).addClass('red');
        } else {
            $('.notice').eq(2).html('✔');
            $('.notice').eq(2).removeClass('red');
            $('.notice').eq(2).addClass('green');
        }
    });


    //点击提交订单立即支付时
    $('#BtnBox').on('click','.submitOrderBtn',function () {

        var n = 0;
        $.each($('.notice'),function () {
            if($(this).html()=='✔'){
                n++;
            }
        })

        if(n==3 && $('.sure').attr('checked') ){

            var year = ($("#selectYear option:selected").html()).substr(0,4);
            var month = ($("#selectMonth option:selected").html()).split('月')[0];
            var day = ($("#selectDay option:selected").html()).split('号')[0];
            //console.log(year+'-'+month+'-'+day);

            var  oDate=new  Date();
            var nowDate=oDate.toLocaleDateString();
            //console.log(nowDate);
            //console.log($("#selectProvince option:selected").html()+$("#selectCity option:selected").html())

            $.ajax({
                url:'/submitWeddingOrder',
                data:{
                    m_id:arr[1],
                    sName:$("input[name='guestName']").val(),
                    sSex:$("input[name='sex']:checked").val(),
                    sPhone:$("input[name='guestPhone']").val(),
                    sIdCard:$("input[name='IDCard']").val(),
                    sTotal:$("#travelTotal").html(),
                    sRoom:$("#roomTotal").html(),
                    sPlace:$("#selectProvince option:selected").html()+$("#selectCity option:selected").html(),
                    sTakenDate:year+'-'+month+'-'+day,
                    sOrderDate:nowDate
                },
                success:function (res) {
                    if(!res.error){

                        window.location.href = "http://localhost:8084/pages/pay.html?number="+res.id+"";
                    }
                }
            })
        }

    })
    $('.sure').click(function () {
            $(this).attr('checked','checked')
    })

}







//拍摄日期
var data=new Date();
//console.log(data);
var year=data.getFullYear();
var month=data.getMonth()+1;
var day=data.getDate();
//console.log(day);
for(var i=year;i<year+2;i++){
    $('#selectYear').append('<option value="'+i+'" class="year">'+i+'年</option>')
}
for(var i=month;i<13;i++){
    $('#selectMonth').append('<option value="">'+i+'月</option>')
}
for(var i=day;i<31;i++){
    $('#selectDay').append('<option value="">'+i+'号</option>')
}
$('#selectYear').on('change',function () {
    if($(this).val()>year){
        $('#selectMonth').text('');
        $('#selectDay').text('');
        for(var i=1;i<13;i++){
            $('#selectMonth').append('<option value="">'+i+'月</option>')
        }
        for(var i=1;i<31;i++){
            $('#selectDay').append('<option value="">'+i+'号</option>')
        }
    }else {
        $('#selectMonth').text('');
        $('#selectDay').text('');
        for(var i=month;i<13;i++){
            $('#selectMonth').append('<option value="">'+i+'月</option>')
        }
        for(var i=day;i<31;i++){
            $('#selectDay').append('<option value="">'+i+'号</option>')
        }
    }
});

$('#selectMonth').on('change',function () {
    if($(this).val()!=month){
        for(var i=1;i<31;i++){
            $('#selectDay').append('<option value="">'+i+'号</option>')
        }
    }else {
        for(var i=day;i<31;i++){
            $('#selectDay').append('<option value="">'+i+'号</option>')
        }
    }
})

//出发地
$('#selectProvince').on('change',function () {
    var arr1=['成都','雅安','绵阳','乐山','内江'];
    var arr2=['昆明','丽江','大理','普洱','昭通','玉溪'];
    var arr3=['渝中','沙坪坝','万州','北碚区','江北区'];
    var arr4=['绍兴','温州','徐州','台州','金华'];
    var arr5=['海口','三亚'];

    var a=parseInt($(this).val());
    //console.log(typeof a);
    switch (a){
        case 1:
            $('#selectCity').text('');
            for(var i=0;i<arr1.length;i++){
                $('#selectCity').append('<option value="">'+arr1[i]+'</option>')
            }
            break;
        case 2:
            $('#selectCity').text('');
            for(var i=0;i<arr2.length;i++){
                $('#selectCity').append('<option value="">'+arr2[i]+'</option>')
            }
            break;
        case 3:
            $('#selectCity').text('');
            for(var i=0;i<arr3.length;i++){
                $('#selectCity').append('<option value="">'+arr3[i]+'</option>')
            }
            break;
        case 4:
            $('#selectCity').text('');
            for(var i=0;i<arr4.length;i++){
                $('#selectCity').append('<option value="">'+arr4[i]+'</option>')
            }
            break;
        case 5:
            $('#selectCity').text('');
            for(var i=0;i<arr5.length;i++){
                $('#selectCity').append('<option value="">'+arr5[i]+'</option>')
            }
    }
});

var arry=['成都','雅安','绵阳','乐山','内江'];
var a=parseInt($('#selectProvince').val());;
//console.log(typeof a);
switch (a){
    case 1:
        for(var i=0;i<arry.length;i++){
            $('#selectCity').append('<option value="">'+arry[i]+'</option>')
        }
}



//房间数加减
$('.div13').click(function () {
    var num = parseInt($('#roomTotal').html());
    num++;
    $('#roomTotal').html(num);
});
$('.div12').click(function () {
    var num = parseInt($('#roomTotal').html());
    if(num>0){
        num--;
        $('#roomTotal').html(num);
    }
});

//出行人数加减
$('.div11').click(function () {
    var num = parseInt($('#travelTotal').html());
    num++;
    $('#travelTotal').html(num);
});
$('.div10').click(function () {
    var num = parseInt($('#travelTotal').html());
    if(num>0){
        num--;
        $('#travelTotal').html(num);
    }
});
