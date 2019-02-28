/**
 * Created by ASUS on 2018/12/6.
 */
var oPlace = $('.place');
oPlace.mouseover(function () {
    $('.place').css({
        background:'#fff',
        color:'#000'
    });
    $(this).css({
        background:'#b8aa9d',
        color:'#fff'
    });
});
function show() {
    $('.box2').mouseenter(function () {
        var oBox=$('.box2');
        for(var  i=0 ;i<oBox.length;i++){
            $(this).css('border','1px  solid  #29c8c3')

        }
    });
    $('.box2').mouseenter(function () {
        var oBox3=$('.box3');
        for(var  i=0 ;i<oBox3.length;i++){
            $('.box3').css('border','1px  solid  #29c8c3')

        }

    });
    $('.box2').mouseenter(function () {
        var oa=$('.box2 a ');
        for(var  i=0 ;i<oa.length;i++){
            $('.box2 a').css('color','#29c8c3')
        }

    });
    $('.box2').mouseleave(function () {
        var oBox=$('.box2');
        var oBox3=$('.box3');
        for(var  i=0 ;i<oBox.length;i++){
            $(this).css('border','1px  solid  #5e5e5e')

        }
        for(var  j=0 ;j<oBox3.length;j++){
            $(this).css('border','1px  solid  #5e5e5e')
        }

    });
    $('.box2').mouseleave(function () {
        var oBox3=$('.box3');
        for(var  i=0 ;i<oBox3.length;i++){
            $('.box3').css('border','1px  solid  #5e5e5e')

        }

    });
    $('.box2').mouseleave(function () {
        var oa=$('.box2 a');
        for(var  i=0 ;i<oa.length;i++){
            $('.box2 a ').css('color','#3e3e3e')
        }
    });
}
$.ajax({
    url: '/showfriendPage',
    success: function (res) {
        for(var i=0;i<res.length;i++){
            $('#cre_friend').append(` <div  class="detailPhoto">
        <div class="det1">
        <div class="dp1"><img  src="${res[i].m_imageUrl}"></div>
        <section class="box">
        <span>￥${res[i].m_nowPrice}</span>
        <div>
        <p>${res[i].m_Title}<p></p>
        </div>
        <p>
        ${res[i].m_niceWords}
        </p>
        <section class="box2">
        <section id="seT">
        <a id="meal_page" href="javascript:;"data-index="${res[i].m_id}">查看详情</a></section>
        <section class="box3">>></section>
        </section>
        </section>
        <div></div>
        <div></div>
        </div>
        </div>`);}
        show();
    },
    error: function (error) {
        console.log(error);
    }
});
$('.place').eq(0).click(function () {
    console.log(1)
    $('#cre_friend').html('');
    $.ajax({
        url: '/showfriendPage',
        success: function (res) {
            for(var i=0;i<res.length;i++){
                $('#cre_friend').append(` <div  class="detailPhoto">
        <div class="det1">
        <div class="dp1"><img  src="${res[i].m_imageUrl}"></div>
        <section class="box">
        <span>￥${res[i].m_nowPrice}</span>
        <div>
        <p>${res[i].m_Title}<p></p>
        </div>
        <p>
        ${res[i].m_niceWords}
        </p>
        <section class="box2">
        <section id="seT">
        <a id="meal_page" href="javascript:;"data-index="${res[i].m_id}">查看详情</a></section>
        <section class="box3">>></section>
        </section>
        </section>
        <div></div>
        <div></div>
        </div>
        </div>`);}
            show();
        },
        error: function (error) {
            console.log(error);
        }
    });
});
$('.place').eq(1).click(function () {
    $('#cre_friend').html('');
    $.ajax({
        url: '/showfriendDali',
        success: function (res) {
            for(var i=0;i<res.length;i++){
                $('#cre_friend').append(` <div  class="detailPhoto">
        <div class="det1">
        <div class="dp1"><img  src="${res[i].m_imageUrl}"></div>
        <section class="box">
        <span>￥${res[i].m_nowPrice}</span>
        <div>
        <p>${res[i].m_Title}<p></p>
        </div>
        <p>
        ${res[i].m_niceWords}
        </p>
        <section class="box2">
        <section id="seT">
        <a id="meal_page" href="javascript:;"data-index="${res[i].m_id}">查看详情</a></section>
        <section class="box3">>></section>
        </section>
        </section>
        <div></div>
        <div></div>
        </div>
        </div>`);}
            show();
        },
        error: function (error) {
            console.log(error);
        }
    })
});
$('.place').eq(2).click(function () {
    $('#cre_friend').html('');
    $.ajax({
        url: '/showfriendSH',
        success: function (res) {
            for(var i=0;i<res.length;i++){
                $('#cre_friend').append(` <div  class="detailPhoto">
        <div class="det1">
        <div class="dp1"><img  src="${res[i].m_imageUrl}"></div>
        <section class="box">
        <span>￥${res[i].m_nowPrice}</span>
        <div>
        <p>${res[i].m_Title}<p></p>
        </div>
        <p>
        ${res[i].m_niceWords}
        </p>
        <section class="box2">
        <section id="seT">
        <a id="meal_page" href="javascript:;"data-index="${res[i].m_id}">查看详情</a></section>
        <section class="box3">>></section>
        </section>
        </section>
        <div></div>
        <div></div>
        </div>
        </div>`);}
            show();
        },
        error: function (error) {
            console.log(error);
        }
    })
});
$('.place').eq(3).click(function () {
    $('#cre_friend').html('');
    $.ajax({
        url: '/showfriendLJ',
        success: function (res) {
            for(var i=0;i<res.length;i++){
                $('#cre_friend').append(` <div  class="detailPhoto">
        <div class="det1">
        <div class="dp1"><img  src="${res[i].m_imageUrl}"></div>
        <section class="box">
        <span>￥${res[i].m_nowPrice}</span>
        <div>
        <p>${res[i].m_Title}<p></p>
        </div>
        <p>
        ${res[i].m_niceWords}
        </p>
        <section class="box2">
        <section id="seT">
        <a id="meal_page" href="javascript:;"data-index="${res[i].m_id}">查看详情</a></section>
        <section class="box3">>></section>
        </section>
        </section>
        <div></div>
        <div></div>
        </div>
        </div>`);}
            show();
        },
        error: function (error) {
            console.log(error);
        }
    })
});
$('.place').eq(4).click(function () {
    $('#cre_friend').html('');
    $.ajax({
        url: '/showfriendQD',
        success: function (res) {
            for(var i=0;i<res.length;i++){
                $('#cre_friend').append(` <div  class="detailPhoto">
        <div class="det1">
        <div class="dp1"><img  src="${res[i].m_imageUrl}"></div>
        <section class="box">
        <span>￥${res[i].m_nowPrice}</span>
        <div>
        <p>${res[i].m_Title}<p></p>
        </div>
        <p>
        ${res[i].m_niceWords}
        </p>
        <section class="box2">
        <section id="seT">
        <a id="meal_page" href="javascript:;"data-index="${res[i].m_id}">查看详情</a></section>
        <section class="box3">>></section>
        </section>
        </section>
        <div></div>
        <div></div>
        </div>
        </div>`);}
            show();
        },
        error: function (error) {
            console.log(error);
        }
    })
});
$('.place').eq(5).click(function () {
    $('#cre_friend').html('');
    $.ajax({
        url: '/showfriendBJ',
        success: function (res) {
            for(var i=0;i<res.length;i++){
                $('#cre_friend').append(` <div  class="detailPhoto">
        <div class="det1">
        <div class="dp1"><img  src="${res[i].m_imageUrl}"></div>
        <section class="box">
        <span>￥${res[i].m_nowPrice}</span>
        <div>
        <p>${res[i].m_Title}<p></p>
        </div>
        <p>
        ${res[i].m_niceWords}
        </p>
        <section class="box2">
        <section id="seT">
        <a id="meal_page" href="javascript:;"data-index="${res[i].m_id}">查看详情</a></section>
        <section class="box3">>></section>
        </section>
        </section>
        <div></div>
        <div></div>
        </div>
        </div>`);}
            show();
        },
        error: function (error) {
            console.log(error);
        }
    })
});
$('.place').eq(6).click(function () {
    $('#cre_friend').html('');
    $.ajax({
        url: '/showfriendSY',
        success: function (res) {
            for(var i=0;i<res.length;i++){
                $('#cre_friend').append(` <div  class="detailPhoto">
        <div class="det1">
        <div class="dp1"><img  src="${res[i].m_imageUrl}"></div>
        <section class="box">
        <span>￥${res[i].m_nowPrice}</span>
        <div>
        <p>${res[i].m_Title}<p></p>
        </div>
        <p>
        ${res[i].m_niceWords}
        </p>
        <section class="box2">
        <section id="seT">
        <a id="meal_page" href="javascript:;"data-index="${res[i].m_id}">查看详情</a></section>
        <section class="box3">>></section>
        </section>
        </section>
        <div></div>
        <div></div>
        </div>
        </div>`);}
            show();
        },
        error: function (error) {
            console.log(error);
        }
    })
});
$('.place').eq(7).click(function () {
    $('#cre_friend').html('');
    $('#cre_friend').append('<span id="other_add">其他站点正在开发中，请<a href="">联系客服</a></span>')
    $('#other_add').css({
        'color':'red',
        'font-size':'16px',
        'margin-left':'540px',
        'display':'block',
        'margin-top':'40px',
        'line-height':'40px'
    })
    $('#other_add a').css({
        'text-decoration':'none',
        'font-size':'16px',


    })
});
$('.box1').on('click','a',function () {
    var sId=$(this).attr('data-index');
    window.location.href="http://localhost:8084/pages/friend.det.html?id="+sId+""
});
$('#close').click(function () {
    $('#bookBox').hide();
});
$('#customBtn').click(function () {
    var  oDate=new  Date();
    var mytime=oDate.toLocaleDateString();
    var book_money=$("#preSum   option:selected").text();
    var book_place=$('#selPlace option:selected').text();
    var book_tel=$('.msgRow input').val();
    if(!book_tel.trim()){
        alert('输入不能为空！');
        return;
    }
    $.ajax({
        url: '/book',
        data:{
            money:book_money,
            place:book_place,
            tel:book_tel,
            date:mytime
        },
        success: function (res) {
            alert('你已经成功预约')
        },
        error: function (error) {
            console.log(error);
        }
    })
});
var reg={
    phone:/^1[3-9]\d{9}$/,
};
$('.msgRow input').blur(function () {
    var book_tel=$('.msgRow  input').val();
    var msgSpan=$('#msg_span');
    if(!reg.phone.test(book_tel)){
        msgSpan.html('×');
        msgSpan.css({
            'color':' red ',
            'line-height':'10px '
        })
        $('#customBtn').css({
            'pointer-events': 'none',
            'cursor': 'default',
            'opacity': '0.5'
        })
    }
    else{
        msgSpan.html('√')
        msgSpan.css({
            'color':'green',
            'line-height':'10px '
        })
        $('#customBtn').css({
            'cursor': 'pointer',
            'opacity': '1'
        })
    }
});
window.onload=function() {

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
