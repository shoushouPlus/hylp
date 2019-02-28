/**
 * Created by ASUS on 2018/12/4.
 */
 // $('#table div').click(function () {
 //        $('#table div').removeClass('tabClass');
 //        $(this).addClass('tabClass');
 //    });
var page=1;
var type=1;
//点击调用评论数据函数
$('#wedding').click(function () {
    page=1;
    type=1;
    $('#comment').html('');
    $('#table div').removeClass('tabClass');
    $(this).addClass('tabClass');
    weddingGetData(page);
    // page++;

});
$('#friend').click(function () {
    page=1;
    type=2;
    $('#comment').html('');
    friendGetData(page);
    $('#table div').removeClass('tabClass');
    $(this).addClass('tabClass');
    // page++;
});
$('#family').click(function () {
    page=1;
    type=3;
    $('#comment').html('');
    familyCetData(page);
    $('#table div').removeClass('tabClass');
    $(this).addClass('tabClass');
    // page++;
});
$('#lover').click(function () {
    page=1;
    type=4;
    $('#comment').html('');
    loverGetData(page);
    $('#table div').removeClass('tabClass');
    $(this).addClass('tabClass');
    // page++
});
//上一页，下一页
$('#previous').click(function () {
        if(page<=1){
            page=1;
        }else{
            page--;
        };
        $('#comment').html('');
        switch (type){
            case 1:
                weddingGetData(page);
                break;
            case 2:
                friendGetData(page);
                break;
            case 3:
                familyCetData(page);
                break;
            case 4:
                loverGetData(page);
                break;
        }

    });
$('#next').click(function () {
        $('#comment').html('');
        page=2;
    switch (type){
        case 1:
            $.ajax({
                url:'/weddingGetPage',
                success:function (res) {
                    var weddingPage=res.data;
                    // console.log(weddingPage)
                    if(page>=weddingPage){
                        page=weddingPage;
                    }else{
                        page++;
                    }
                }
            })
            // console.log(page);
            weddingGetData(page);
            break;
        case 2:
            $.ajax({
                url:'/friendGetPage',
                success:function (res) {
                    var friendPage=res.data;
                    // console.log(weddingPage)
                    if(page>=friendPage){
                        page=friendPage;
                    }else{
                        page++;
                    }
                }
            })
            console.log(page);
            friendGetData(page);
            break;
        case 3:
            $.ajax({
                url:'/familyGetPage',
                success:function (res) {
                    var familyPage=res.data;
                    // console.log(weddingPage)
                    if(page>=familyPage){
                        page=familyPage;
                    }else{
                        page++;
                    }
                }
            })
            console.log(page);
            familyCetData(page);
            break;
        case 4:
            $.ajax({
                url:'/loverGetPage',
                success:function (res) {
                    var loverPage=res.data;
                    // console.log(weddingPage)
                    if(page>=loverPage){
                        page=loverPage;
                    }else{
                        page++;
                    }
                }
            })
            console.log(page);
            loverGetData(page);
            break;
    }
    });
//获取评论数据函数
function weddingGetData(page) {
    $.ajax({
        url:'/weddingGetData',
        data:{page:page},
        success:function (res) {
            for(var i=0;i<res.data.length;i++){
                // var date=res.data[i].cm_date.toString().slice(0,-14);
                $('#comment').append(`<div class="comment clearfix">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <img src="./../image/comment_img/${res.data[i].cm_img1}" alt=""class="swiper-slide">
                    <img src="./../image/comment_img/${res.data[i].cm_img2}"  alt="" class="swiper-slide">
                    <img src="./../image/comment_img/${res.data[i].cm_img3}"  alt=""class="swiper-slide">
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div class="comment_word">
                <p class="p1" id="mealName">${res.data[i].m_title}</p>
                <div class="comment_description">
                    <p class="p2" id="content">${res.data[i].cm_content}</p>
                </div>
                <div class="comment_from">
                    <p class="p3" id="place">地点 : ${res.data[i].m_place}</p>
                    <p class="p3" id="date">上传时间 : ${res.data[i].cm_date}</p>
                    <p class="p3" id="from">评论来自 : ${res.data[i].u_username}</p>
                </div>
            </div>
        </div>`)
                carousel();
            }
        }
    })
}
function friendGetData(page) {
    $.ajax({
        url:'/friendGetData',
        data:{page:page},
        success:function (res) {
            for(var i=0;i<res.data.length;i++){
                // var date=res.data[i].cm_date.toString().slice(0,-14);
                $('#comment').append(`<div class="comment clearfix">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <img src="./../image/comment_img/${res.data[i].cm_img1}" alt=""class="swiper-slide">
                    <img src="../image/comment_img/${res.data[i].cm_img2}"  alt="" class="swiper-slide">
                    <img src="../image/comment_img/${res.data[i].cm_img3}"  alt=""class="swiper-slide">
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div class="comment_word">
                <p class="p1" id="mealName">${res.data[i].m_title}</p>
                <div class="comment_description">
                    <p class="p2" id="content">${res.data[i].cm_content}</p>
                </div>
                <div class="comment_from">
                    <p class="p3" id="place">地点 : ${res.data[i].m_place}</p>
                    <p class="p3" id="date">上传时间 : ${res.data[i].cm_date}</p>
                    <p class="p3" id="from">评论来自 : ${res.data[i].u_username}</p>
                </div>
            </div>
        </div>`)
                carousel();
            }
        }
    })
}
function familyCetData(page) {
    $.ajax({
        url:'/familyGetData',
        data:{page:page},
        success:function (res) {
            for(var i=0;i<res.data.length;i++){
                // var date=res.data[i].cm_date.toString().slice(0,-14);
                $('#comment').append(`<div class="comment clearfix">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <img src="./../image/comment_img/${res.data[i].cm_img1}" alt=""class="swiper-slide">
                    <img src="../image/comment_img/${res.data[i].cm_img2}"  alt="" class="swiper-slide">
                    <img src="../image/comment_img/${res.data[i].cm_img3}"  alt=""class="swiper-slide">
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div class="comment_word">
                <p class="p1" id="mealName">${res.data[i].m_title}</p>
                <div class="comment_description">
                    <p class="p2" id="content">${res.data[i].cm_content}</p>
                </div>
                <div class="comment_from">
                    <p class="p3" id="place">地点 : ${res.data[i].m_place}</p>
                    <p class="p3" id="date">上传时间 : ${res.data[i].cm_date}</p>
                    <p class="p3" id="from">评论来自 : ${res.data[i].u_username}</p>
                </div>
            </div>
        </div>`)
                carousel();
            }
        }
    })
}
function loverGetData(page) {
    $.ajax({
        url:'/loverGetData',
        data:{page:page},
        success:function (res) {
            for(var i=0;i<res.data.length;i++){
                // var date=res.data[i].cm_date.toString().slice(0,-14);
                $('#comment').append(`<div class="comment clearfix">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <img src="./../image/comment_img/${res.data[i].cm_img1}" alt=""class="swiper-slide">
                    <img src="../image/comment_img/${res.data[i].cm_img2}"  alt="" class="swiper-slide">
                    <img src="../image/comment_img/${res.data[i].cm_img3}"  alt=""class="swiper-slide">
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div class="comment_word">
                <p class="p1" id="mealName">${res.data[i].m_title}</p>
                <div class="comment_description">
                    <p class="p2" id="content">${res.data[i].cm_content}</p>
                </div>
                <div class="comment_from">
                    <p class="p3" id="place">地点 : ${res.data[i].m_place}</p>
                    <p class="p3" id="date">上传时间 : ${res.data[i].cm_date}</p>
                    <p class="p3" id="from">评论来自 : ${res.data[i].u_username}</p>
                </div>
            </div>
        </div>`)
                carousel();
            }
        }
    })
}
//页面一加载就显示第一页的数据；
weddingGetData(1);
// -------------------------------------------------------
//创建一个评论的函数
function prepend() {
    $('#comment').prepend(`<div class="comment clearfix">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <img src="./../image/comment_img/2.jpg" alt=""class="swiper-slide">
                    <img src="./../image/comment_img/8.jpg" alt="" class="swiper-slide">
                    <img src="../image/comment_img/10.jpg" alt=""class="swiper-slide">
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div class="comment_word">
                <p class="p1" id="mealName">丽江旅拍婚纱照的快乐体验</p>
                <div class="comment_description">
                    <p class="p2" id="content">花漾，真的是一个非常不错的选择，拍出来的照片真的很有大片的感觉，摄影师和设计师都非常的专业和认真。客服也非常的温柔 </p>
                </div>
                <div class="comment_from">
                    <p class="p3" id="place">地点:丽江</p>
                    <p class="p3" id="date">上传时间:2018-1-12</p>
                    <p class="p3" id="from">评论来自:一对浪漫的小芒果</p>
                </div>
            </div>
        </div>`)
}
//实现轮播的函数
function carousel() {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        centeredSlides: true,
        // autoplay:{
        //     delay: 2000,
        //     disableOnInteraction: false
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        loop: true ,// 循环模式选项

    });
}



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

$('#l2').click(function () {
    $('#talk').show()
});
//点击登陆进入手机快捷登陆界面

$('#landing').click(function () {
    $('.ccc1').show()
});

$('#registered').click(function () {
    $('.ccc2').show()
});
$('.close1').click(function () {
    $('.ccc1').hide()
});
$('.close2').click(function () {
    $('.ccc2').hide()
});
$('.close3').click(function () {
    $('.ccc3').hide()
});
$('#goLogin').click(function () {
    $('.ccc2').hide();
    $('.ccc1').show();
});
$('#login-getuser').click(function () {
    $('.ccc1').hide();
    $('.ccc3').show()
});
$('#get-login').click(function () {
    $('.ccc3').hide();
    $('.ccc1').show();
});
$('#gojoin').click(function () {
    $('.ccc2').show();
    $('.ccc3').hide()

});

//手机快捷登陆正则验证
var reg={
    phone:/^1[3-9]\d{9}$/,
    password:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
};

$('#login-phone').blur(function () {
    var sPhone=$('#login-phone').val();
    if (!reg.phone.test(sPhone)){
        $('.tipx').html('手机号码错误');
        $('.tipx').addClass('red')
    }else {
        $('.tipx').html('');
    }
});
$('#name-user').blur(function () {
    var nPhone=$('#name-user').val();
    if (!reg.phone.test(nPhone)){
        $('.tipx2').html('账号格式错误');
        $('.tipx2').addClass('red')
    }else {
        $('.tipx2').html('');
    }
});
$('#join-phone').blur(function () {
    var jPhone=$('#join-phone').val();
    if (!reg.phone.test(jPhone)){
        $('.tipx3').html('账号格式错误');
        $('.tipx3').addClass('red')
    }else {
        $('.tipx3').html('');
    }
});
$('#join-password').blur(function () {
    var jPassword=$('#join-password').val();
    if (!reg.password.test(jPassword)){
        $('.tipx4').html('密码错误');
        $('.tipx4').addClass('red')
    }else {
        $('.tipx4').html('');
    }
});
//手机验证
$('#login-getCode').click(function () {

    $.ajax({
        url: '/phone',
        data: {
            phone: $('#login-phone').val()
        },
        success: function (err) {
            console.log(err)

        }
    })
});
$('#login-btn').click(function () {
    console.log($('#login-code').val());
    $.ajax({
        url: '/phonelogn',
        data: {
            phone: $('#login-phone').val(),
            code: $('#login-code').val()
        },
        success: function (err) {
            if (err.error == 0) {
                alert('验证成功');

                $('#landing').hide();
                $('#registered').hide();
                $('.ccc1').hide();
                $('#ball').show();
                $('#exit').show();
                $.ajax({
                    url: '/addphone',
                    data: {
                        phone: $('#login-phone').val()
                    },
                    success: function (err) {
                        console.log(err)
                    }
                })
            }
        }
    })
});

//账号验证

$('#join-getcode').click(function () {
    $.ajax({
        url: '/phone',
        data: {
            phone: $('#join-phone').val()
        },
        success: function (err) {
            console.log(err);

        }
    })
});
$('#join-btn').click(function () {   //账号的按钮

    $.ajax({
        url: '/phonelogn',
        data: {
            phone: $('#join-phone').val(),
            code: $('#join-code').val()
        },
        success: function (err) {

            if (err.error == 0) {
                alert('注册成功');

                $('.ccc2').hide();
                $('.ccc3').show();
                $.ajax({
                    url: '/adduser',
                    data: {
                        user:$('#join-phone').val(),
                        pass:$('#join-password').val()//输入密码的input val()
                    },
                    success: function (err) {
                        console.log(err);

                    }
                })
            }
        }
    })
});
$('.a').click(function () {
    $.ajax({
        url:'/qq',
        success:function (err) {
            console.log(err);
            if(err.error==1){
                alert('请登陆');
                $('.ccc3').show()
            }
        }
    })
});
$('#name-btn').click(function () {
    console.log(1);
    alert('密码错误');
    $.ajax({
        url: '/userName',
        data: {
            user: $('#name-user').val(),
            pass: $('#name-password').val()
        },

        success: function (err) {
            // alert(err.context)
            if(err.state==0){
                console.log(err.data);
                $('#landing').hide();
                $('#registered').hide();
                $('.ccc3').hide();
                $('#ball').show();
                $('#exit').show();
                $('.a').attr('href','pages/personal.html')
                $('#ball').attr('src',err.data[0].u_headPhoto)
               
            }

        }
    })
});
$('#login-btn').click(function () {
    if ($('#login-phone').val()==''&&$('#login-code').val()=='') {
        alert('请输入完整信息')
    }else {

    }
});
$('#name-btn').click(function () {
    if ($('#name-user').val()==''&&$('#name-password').val()=='') {
        alert('请输入完整信息')
    }else {

    }
});
$('#join-btn').click(function () {
    if ($('#join-phone').val()==''&&$('#join-password').val()==''&&$('#join-code').val()=='') {
        alert('请输入完整信息')
    }else {

    }
});
$('#exit').click(function () {
    $('.a').attr('href','javascript:;');
    $.ajax({
        url:'/exit',
        success:function (err) {
            console.log(err);
        }
    });
    $('#exit').hide();
    $('#ball').hide();
    $('#landing').show();
    $('#registered').show();
});


window.onload=function(){
    $.ajax({
        url:'/ball',
        success:function (err) {
            if(err.error==0){
                $('#ball').show();
                $('#exit').show();
                $('#landing').hide();
                $('#registered').hide()
                $('#ball').attr('src', err.data[0].u_headPhoto)
            }
        }
    });
};
//联系客服
$('#talk-close1').click(function () {
    $('#talk').hide();
    $('#smoll-talk').show();

});
$('#talk-close2').click(function () {
    $('#smoll-talk').hide();
    $('#talk').show();

});
