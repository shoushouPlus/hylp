/**
 * Created by ASUS on 2018/12/6.
 */

window.onload=function(){
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
};
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
    if(month<10){
        month='0'+month;
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
        url:'/upload',
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
        $('.mealInfo').html('');
        $('.mealInfo').css('display','none');
        $('.waitForComment').css('display','block');
        $('.waitForCommentBtn').css('color','red');
        $('.waitForConsumeBtn').css('color','#263a3a');
        var oId=parseInt($(this).attr('data-index'));
        $.ajax({
            url:'/refreshConsume',
            data:{oId:oId},
            success:function (res) {
                // waitForConsume();
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
waitForConsume(1);
//点击文件按钮，选择的图片出现在页面
$(".addImgBtn").change(function(){
    $(".commentImg1").attr("src",URL.createObjectURL($(this)[0].files[0]));
    $(".commentImg2").attr("src",URL.createObjectURL($(this)[0].files[1]));
    $(".commentImg3").attr("src",URL.createObjectURL($(this)[0].files[2]));
});
