$(function () {
    // 对应省市
// $.ajax({
//     url: '/personal',
//     success: function (err) {
//         if (err) {
//             $('#province').append('<option></option>')
//         } else {
//             $('#province').append('<option></option>')
//         }
//
//     }
// });

    $('#save').click(function () {
        // console.log($('#name').val())
        // console.log($('#myPhone').val())
        // console.log($('#sl1').val())
        // console.log($('#province').val())
        // console.log($('#city').val())
        // console.log($('#t1').val())
        $.ajax({
            url:'/changeUser',
            data:{
                id:1,
                name:$('#name').val(),
                phone:$('#myPhone').val(),
                sex:$('#sl1').val(),
                province:$('#sl1').val(),
                city:$('#city').val(),
                sign:$('#t1').val()
            },
            success:function (res) {
                if (res){
                    alert('修改成功')
                }
                console.log(res)
            }
        })
    })
    //session部分

    $.ajax({
        url:'/ball',
        success:function (err) {
            if(err.error==0){
                $('#ball').show();
                $('#exit').show();
                $('#landing').hide();
                $('#registered').hide()
                $('#ball').attr('src',err.data[0].u_headPhoto)
            }
        }
    });


    //修改资料取所有的个人信息
    $.ajax({
        url:'/bin',

    })
        .then((res)=>{
        console.log(res);
    switch (res.msg[0].u_sex) {
        case '男':
            $('#sl1').val(1);
            break;
        case '女':
            $('#sl1').val(2);
            break;
    }
    $('#name').val(res.msg[0].u_username);
    $('.phone1').val(res.msg[0].u_phone);
    $('.speak').val(res.msg[0].u_userSpeak);
    $('.headimg img').attr('src',res.msg[0].u_headPhoto)

});

    $('#province').on('change',function () {
        var arr1=['成都','雅安','绵阳','乐山','内江'];
        var arr2=['昆明','丽江','大理','普洱','昭通','玉溪'];
        var arr3=['渝中','沙坪坝','万州','北碚区','江北区'];
        var arr4=['绍兴','温州','徐州','台州','金华'];
        var arr5=['海口','三亚'];

        var a=parseInt($(this).val());
        //console.log(typeof a);
        switch (a){
            case 1:
                $('#city').text('');
                for(var i=0;i<arr1.length;i++){
                    $('#city').append('<option value="'+arr1[i]+'">'+arr1[i]+'</option>')
                }
                break;
            case 2:
                $('#city').text('');
                for(var i=0;i<arr2.length;i++){
                    $('#city').append('<option value="'+arr2[i]+'">'+arr2[i]+'</option>')
                }
                break;
            case 3:
                $('#city').text('');
                for(var i=0;i<arr3.length;i++){
                    $('#city').append('<option value="'+arr3[i]+'">'+arr3[i]+'</option>')
                }
                break;
            case 4:
                $('#city').text('');
                for(var i=0;i<arr4.length;i++){
                    $('#city').append('<option value="'+arr4[i]+'">'+arr4[i]+'</option>')
                }
                break;
            case 5:
                $('#city').text('');
                for(var i=0;i<arr5.length;i++){
                    $('#city').append('<option value="'+arr5[i]+'">'+arr5[i]+'</option>')
                }
        }
    });
    var arry=['成都','雅安','绵阳','乐山','内江'];
    var a=parseInt($('#province').val());;
//console.log(typeof a);
    switch (a){
        case 1:
            for(var i=0;i<arry.length;i++){
                $('#city').append('<option value="">'+arry[i]+'</option>')
            }
    }

// 点击修改不同信息
    var oCmsg=document.getElementById('cmsg');
    var oCpass=document.getElementById('cpass');
    var oRdiv=document.getElementById('r-div-msg');
    var oDiv2=document.getElementById('r-div-pass');
    var oChead=document.getElementById('chead');
    var oCh=document.getElementById('ch');



    oCmsg.onclick=function () {
        oRdiv.style.display='block';
        oDiv2.style.display='none';
        oCh.style.display='none';
    };
    oCpass.onclick=function () {
        oRdiv.style.display='none';
        oDiv2.style.display='block';
        oCh.style.display='none'
    };
    oChead.onclick=function () {
        oRdiv.style.display='none';
        oDiv2.style.display='none';
        oCh.style.display='block'
    };
    // $.ajax(
    //     {
    //         url: '/user/index',
    //         success: function (data) {
    //             console.log(data)
    //         }
    //
    //     }
    // );
// 订单详情
    $('.Order .p2').click(function () {
        oRdiv.style.display='none';
        oDiv2.style.display='none';
        oCh.style.display='none';
        $('#M').css({display:'block'});
        waitForConsume(1);
    });

    //点击待消费按钮
    $('.waitForConsumeBtn').click(function () {
        $('.waitForConsumeBtn').css('color','red');//待消费按钮变红
        $('.waitForCommentBtn').css('color','#263a3a');//待评价按钮变黑
        $('.state').css('display','inner');//整个状态框显示
        $('.mealInfo').css('display','block');//待消费整个页面显示
        $('.waitForComment').css('display','none');//待评价整个页面隐藏
        $('.mealInfo').html('');//清空待消费整个页面
        waitForConsume(1);
    });
    //点击待评价按钮
    $('.waitForCommentBtn').click(function () {
        $('.waitForConsumeBtn').css('color','#263a3a');
        $('.waitForCommentBtn').css('color','red');
        $('.state').css('display','inner');
        $('.waitForComment').css('display','block');
        $('.mealInfo').css('display','none');
        waitForComment();
    });
    //点击评价
    $('.waitForComment').on('click','input',function () {
        $('.state').css('display','none');
        $('.waitForComment').css('display','none');
        $('.addComment ').css('display','block');
        //评价按钮的data-index
        var index=$(this).attr('data-index');//o_id
        var index2=$(this).attr('data-mId');
        //确定提交的data-index
        $('.submit').attr('data-index',index);
        $('.submit').attr('data-mId',index2);
    })
    //评价页面点击返回
    $('.return').click(function () {
        $('.addComment').css('display','none');
        $('.state').css('display','block');
        $('.waitForComment').css('display','block');
    });
    //评价页面点击提交
    $('.submit').click(function () {
        $(".commentImg1").attr("src",'');
        $(".commentImg2").attr("src",'');
        $(".commentImg3").attr("src",'');
        $('.addComment').css('display','none');
        $('.state').css('display','block');
        $('.waitForComment').css('display','block');
        var str=$('.wordDescription').val();
        $('.wordDescription').val('');
        var index=$('.submit').attr('data-index');//o_id
        var index2=$('.submit').attr('data-mId');//m_id
        var oDate=new Date();
        var year=oDate.getFullYear();
        var month=oDate.getMonth();
        var day=oDate.getDate();
        if(day<10){
            day='0'+day;
        };
        if(month+1<10){
            month='0'+(month+1);
        };
        var date=year+'-'+month+'-'+day;
        var formData=new FormData();
        var arr=$('.addImgBtn')[0].files;
        for(var i=0;i<arr.length;i++){
            formData.append('files',arr[i]);
        }
        var img1=$('.addImgBtn')[0].files[0].name;
        var img2=$('.addImgBtn')[0].files[1].name;
        var img3=$('.addImgBtn')[0].files[2].name;
        addComment(str,date,index,1,index2,img1,img2,img3);
        refreshComment(index);
        $.ajax({
            url:'/comupload',
            data:formData,
            type:'post',
            contentType:false,
            processData:false,
            success:function (res) {
            }
        });
    });
    //添加评论函数
    function addComment(str,date,index,uId,index2,img1,img2,img3) {
        $.ajax({
            url:'/addComment',
            data:{word:str,date:date,oId:index,uId:uId,mId:index2,img1:img1,img2:img2,img3:img3},
            success:function (res) {
            }
        });
    };
    //获取待消费数据函数
    function waitForConsume(userId) {
        $.ajax({
            url:'/waitForConsume',
            data:{userId:userId},
            success:function (res){
                for(var i=0 ; i<res.data.length;i++){
                    var date=res.data[i].o_orderDate.toString().slice(0,-14);
                    $('.mealInfo').prepend(`<div class="parent clearfix" data-index="${res.data[i].o_id}">
                <img src="${res.data[i].m_imageUrl}" alt="" ><!--class="mealInfoImg"-->
                        <div class="mealInfoWord">
                        <p class="mealName">套餐名 :${res.data[i].m_title}</p>
                        <p class="place">拍摄地 :${res.data[i].m_place}</p>
                        <p class="orderName">订单号 :${res.data[i].o_id}</p>
                        <p class="orderTime">下单时间 :${date}</p>
                        <input type="button" value="我已消费" class="mealUsed" data-index="${res.data[i].o_id}" data-mId="${res.data[i].m_id}">
                        </div>
                        </div>`)
                    refreshConsume();
                }
            }
        })
    };
//点击我已消费刷新待消费列表函数
    function refreshConsume() {
        $('.mealUsed').click(function () {
            $('.mealInfo').css('display','none');
            $('.waitForComment').css('display','block');
            $('.waitForCommentBtn').css('color','red');
            $('.waitForConsumeBtn').css('color','#263a3a');
            var oId=parseInt($(this).attr('data-index'));
            $.ajax({
                url:'/refreshConsume',
                data:{oId:oId},
                success:function (res) {
                    waitForConsume();
                    waitForComment();
                }
            })
        })
    };
//刷新待消费列表函数
    function refreshComment(oId) {
        $.ajax({
            url:'/refreshComment',
            data:{oId:oId},
            success:function (res) {
                waitForComment();
            }
        })
    };
//获取待消费数据函数
    function waitForComment() {
        $('.waitForComment').html('');
        $.ajax({
            url:'/waitForComment',
            data:{uId:1},
            success:function (res) {
                for(var i=0;i<res.data.length;i++){
                    var date=res.data[i].o_orderDate.toString().slice(0,-14);
                    $('.waitForComment').append(`<div class="parent clearfix">
                        <img src="${res.data[i].m_imageUrl}" alt="" ><!--${res.data[i].imageUrl}-->
                        <div class="waitForComment-mealInfoWord">
                        <p class="waitForComment-mealName">套餐名 :${res.data[i].m_title}</p>
                        <p class="waitForComment_mealPlace">拍摄地 :${res.data[i].m_place}</p>
                        <p class="waitForComment-orderName">订单号 :${res.data[i].o_id}</p>
                        <p class="waitForComment-orderTime">下单时间 :${date}</p>
                        <input type="button" value="评价" class="mealComment" data-index="${res.data[i].o_id}" data-mId="${res.data[i].m_id}">
                        </div>
                        </div>`)
                }
            }
        });
    };


//点击文件按钮，选择的图片出现在页面
    $(".addImgBtn").change(function(){
        $(".commentImg1").attr("src",URL.createObjectURL($(this)[0].files[0]));
        $(".commentImg2").attr("src",URL.createObjectURL($(this)[0].files[1]));
        $(".commentImg3").attr("src",URL.createObjectURL($(this)[0].files[2]));
    });

    $('#Sc').on('click',function () {
        var formData=new FormData();
        var file=$('.yc')[0].files[0];
        formData.append('files',file);
        //http://localhost:8084/image/upload/1.png
        var str='http://localhost:8084/image/Perupload/'+file.name;
        console.log(str);
        $.ajax({
            url:'/Perupload',
            data:formData,
            type:'post',
            contentType:false, //让他不用appliation/x-www-urlencoded
            processData:false,
            success:function (res) {
                $.ajax({
                    url:'/upload1',
                    data:{aaa:str},
                    type:'post',
                    success:function (res) {
                        console.log(res)
                        $('.headimg img').attr('src',str);
                        if (res){
                            alert('上传成功')
                        } else (
                            alert('请选择正确的图片格式')
                        )
                    }

                })
            }
        })
    })
})



