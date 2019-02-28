
window.onload = function () {

    //session部分
    $.ajax({
        url:'/ball',
        success:function (err) {
            if(err.error==0){
                $('#ball').show();
                $('#exit').show();
                $('#landing').hide();
                $('#registered').hide()
            }
        }
    });

    var url = location.search;    //?id=4
    var arr = url.split("=");      //?id , 4

    //console.log(arr[1]);

    $.ajax({
        url:'/loadWeddingDetails',
        data:{data:arr[1]},
        success:function (res) {
            if(!res.error){
                //console.log(res.data);
                //console.log(res.data[0].md_img1);
                var p1=res.data[0].md_des1;
                var p2=res.data[0].md_des2;
                var p3=res.data[0].md_des3;

                $('#box2').css({
                    'background':'url('+res.data[0].m_imageUrl+') no-repeat',
                    'background-size':'cover'
                });
                $('#box20').css({
                    'background':'url('+res.data[0].md_img1+') no-repeat',
                    'background-size':'cover'
                });
                $('#box21').css({
                    'background':'url('+res.data[0].md_img2+') no-repeat',
                    'background-size':'cover'
                });
                $('#box23').css({
                    'background':'url('+res.data[0].md_img3+') no-repeat',
                    'background-size':'cover'
                });
                $('#box24').css({
                    'background':'url('+res.data[0].md_img4+') no-repeat',
                    'background-size':'cover'
                });
                $('#p12').html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【婚纱照】&nbsp;&nbsp;' +res.data[0].m_mealNumber+'&nbsp;&nbsp;'+res.data[0].md_description);



                $('#p2').html(p1);
                $('#p3').html(p2);
                $('#p4').html(p3);


            }
        }
    })

    $('#box14').append(`<a data-index="${arr[1]}" class="bookOnce" href="javascript:;">立即预定</a>`)



//立即预定
$('#box14').on('click','.bookOnce',function () {
    var sId = $(this).attr('data-index');
    window.location.href = "http://localhost:8084/pages/book.html?id="+sId+"";

})

}


//出行人数加减
$('.div11').click(function () {
    var num = parseInt($('#box12').html());
    num++;
    $('#box12').html(num);
});
$('.div10').click(function () {
    var num = parseInt($('#box12').html());
    if(num>0){
        num--;
        $('#box12').html(num);
    }
});