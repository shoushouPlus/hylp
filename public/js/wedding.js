//页面请求




var placeArr = ['马尔代夫','巴厘岛','四川','云南','北京'];

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


    $.ajax({
        url: '/showWeddingPage',
        success: function (res) {
            //console.log(res.data);
            for (var i = 0; i <= placeArr.length - 1; i++) {
                $('#placesBox ul').append('<li class="hx">' + placeArr[i] + '</li>');
                $('#placesBox ul li').eq(0).addClass('active');
            }

            $('#placesBox ul').append('<li class="oth">其他站点</li>');

            if (!res.error) {

                $('#mealBox').append(`
                    <!--第1个套餐-->
                    <div class="mealTemplateLeft">
                            <div class="mealText">
                                <h3 class="bigTitle">${res.data[0].m_bigTitle}</h3>
                                <p class="title">${res.data[0].m_Title}</p>
                                <p class="niceWords">${res.data[0].m_niceWords}</p>
                                <p class="price"> <span class="newPrice">￥${res.data[0].m_nowPrice}</span>
                                    <del class="oldPrice">￥${res.data[0].m_oldPrice}</del> </p>
                                <p class="radioText">
                                    <input type="radio" checked><span>底片全送</span>
                                    <input type="radio" checked><span>赠送酒店及门票</span>
                                    <input type="radio" checked><span>24小时接机服务</span>
                                </p>
                                <a href="javascript:;"><div data-index="${res.data[0].m_id}" class="bookOnce">立即预定</div></a>
                                <a href="javascript:;"><div data-index="${res.data[0].m_id}" class="knowMore">了解更多</div></a>
                            </div>
                            <div class="mealImage">
                                <img src="${res.data[0].m_imageUrl}" alt="">
                            </div>
                        </div>
                   <!--第2个套餐-->
                   <div class="mealTemplateRight">
                            <div class="mealImage">
                                <img src="${res.data[1].m_imageUrl}" alt="">
                            </div>
                            <div class="mealText">
                                <h3 class="bigTitle">${res.data[1].m_bigTitle}</h3>
                                <p class="title">${res.data[1].m_Title}</p>
                                <p class="niceWords">${res.data[1].m_niceWords}</p>
                                <p class="price"> <span class="newPrice">￥${res.data[1].m_nowPrice}</span>
                                    <del class="oldPrice">￥${res.data[1].m_oldPrice}</del> </p>
                                <p class="radioText">
                                    <input type="radio" checked><span>底片全送</span>
                                    <input type="radio" checked><span>赠送酒店及门票</span>
                                    <input type="radio" checked><span>24小时接机服务</span>
                                </p>
                                <a href="javascript:;"><div data-index="${res.data[1].m_id}" class="bookOnce">立即预定</div></a>
                                <a href="javascript:;"><div data-index="${res.data[1].m_id}" class="knowMore">了解更多</div></a>
                            </div>
                        </div>
                    <!--第3个套餐-->
                    <div class="mealTemplateLeft">
                            <div class="mealText">
                                <h3 class="bigTitle">${res.data[2].m_bigTitle}</h3>
                                <p class="title">${res.data[2].m_Title}</p>
                                <p class="niceWords">${res.data[2].m_niceWords}</p>
                                <p class="price"> <span class="newPrice">￥${res.data[2].m_nowPrice}</span>
                                    <del class="oldPrice">￥${res.data[2].m_oldPrice}</del> </p>
                                <p class="radioText">
                                    <input type="radio" checked><span>底片全送</span>
                                    <input type="radio" checked><span>赠送酒店及门票</span>
                                    <input type="radio" checked><span>24小时接机服务</span>
                                </p>
                                <a href="javascript:;"><div data-index="${res.data[2].m_id}" class="bookOnce">立即预定</div></a>
                                <a href="javascript:;"><div  data-index="${res.data[2].m_id}" class="knowMore">了解更多</div></a>
                            </div>
                            <div class="mealImage">
                                <img src="${res.data[2].m_imageUrl}" alt="">
                            </div>
                        </div>
                `)

            }
        }

    });

}


//点击热门推荐按钮
$('#hot').click(function () {
    $('#placesBox ul li').removeClass('active');
    $(this).addClass('active');
    $.ajax({
        url:'/showWeddingPage',
        success:function (res) {
            if(!res.error){

                $('#mealBox').html('');
                $('#mealBox').append(`
                    <!--第1个套餐-->
                    <div class="mealTemplateLeft">
                            <div class="mealText">
                                <h3 class="bigTitle">${res.data[0].m_bigTitle}</h3>
                                <p class="title">${res.data[0].m_Title}</p>
                                <p class="niceWords">${res.data[0].m_niceWords}</p>
                                <p class="price"> <span class="newPrice">￥${res.data[0].m_nowPrice}</span>
                                    <del class="oldPrice">￥${res.data[0].m_oldPrice}</del> </p>
                                <p class="radioText">
                                    <input type="radio" checked><span>底片全送</span>
                                    <input type="radio" checked><span>赠送酒店及门票</span>
                                    <input type="radio" checked><span>24小时接机服务</span>
                                </p>
                                <a href="javascript:;"><div data-index="${res.data[0].m_id}" class="bookOnce">立即预定</div></a>
                                <a href="javascript:;"><div data-index="${res.data[0].m_id}" class="knowMore">了解更多</div></a>
                            </div>
                            <div class="mealImage">
                                <img src="${res.data[0].m_imageUrl}" alt="">
                            </div>
                        </div>
                   <!--第2个套餐-->
                   <div class="mealTemplateRight">
                            <div class="mealImage">
                                <img src="${res.data[1].m_imageUrl}" alt="">
                            </div>
                            <div class="mealText">
                                <h3 class="bigTitle">${res.data[1].m_bigTitle}</h3>
                                <p class="title">${res.data[1].m_Title}</p>
                                <p class="niceWords">${res.data[1].m_niceWords}</p>
                                <p class="price"> <span class="newPrice">￥${res.data[1].m_nowPrice}</span>
                                    <del class="oldPrice">￥${res.data[1].m_oldPrice}</del> </p>
                                <p class="radioText">
                                    <input type="radio" checked><span>底片全送</span>
                                    <input type="radio" checked><span>赠送酒店及门票</span>
                                    <input type="radio" checked><span>24小时接机服务</span>
                                </p>
                                <a href="javascript:;"><div data-index="${res.data[1].m_id}" class="bookOnce">立即预定</div></a>
                                <a href="javascript:;"><div  data-index="${res.data[1].m_id}" class="knowMore">了解更多</div></a>
                            </div>
                        </div>
                    <!--第3个套餐-->
                    <div class="mealTemplateLeft">
                            <div class="mealText">
                                <h3 class="bigTitle">${res.data[2].m_bigTitle}</h3>
                                <p class="title">${res.data[2].m_Title}</p>
                                <p class="niceWords">${res.data[2].m_niceWords}</p>
                                <p class="price"> <span class="newPrice">￥${res.data[2].m_nowPrice}</span>
                                    <del class="oldPrice">￥${res.data[2].m_oldPrice}</del> </p>
                                <p class="radioText">
                                    <input type="radio" checked><span>底片全送</span>
                                    <input type="radio" checked><span>赠送酒店及门票</span>
                                    <input type="radio" checked><span>24小时接机服务</span>
                                </p>
                                <a href="javascript:;"><div data-index="${res.data[2].m_id}" class="bookOnce">立即预定</div></a>
                                <a href="javascript:;"><div  data-index="${res.data[2].m_id}" class="knowMore">了解更多</div></a>
                            </div>
                            <div class="mealImage">
                                <img src="${res.data[2].m_imageUrl}" alt="">
                            </div>
                        </div>
                `)

            }
        }

    })
})

//点击其他站点按钮
$('#placesBox ul').on('click','.oth',function () {
    $('#placesBox ul li').removeClass('active');
    $(this).addClass('active');
    $('#mealBox').html('');
    $('#mealBox').append('<div id="otherMsg">其他站点正在极力开发中，尽情期待！</div>');
});


//点击地方按钮，获取相对应的数据
$('#placesBox ul').on('click','.hx',function () {

    $('#placesBox ul li').removeClass('active');
    $(this).addClass('active');

    //console.log($(this).text())
    $.ajax({
        url:'/getData',
        data:{
            data:$(this).text()
        },
        success:function (res) {
            //console.log(res);
            if(!res.error){
                $('#mealBox').html('');
                //console.log(res.data);
                if(res.data.length==3){
                    $('#mealBox').css("height","1920px");
                    $('#box7').css("margin-top","0px");
                    $('#mealBox').append(`
                       <!--第1个套餐-->
                       <div class="mealTemplateLeft">
                            <div class="mealText">
                                <h3 class="bigTitle">${res.data[0].m_bigTitle}</h3>
                                <p class="title">${res.data[0].m_Title}</p>
                                <p class="niceWords">${res.data[0].m_niceWords}</p>
                                <p class="price"> <span class="newPrice">￥${res.data[0].m_nowPrice}</span>
                                    <del class="oldPrice">￥${res.data[0].m_oldPrice}</del> </p>
                                <p class="radioText">
                                    <input type="radio" checked><span>底片全送</span>
                                    <input type="radio" checked><span>赠送酒店及门票</span>
                                    <input type="radio" checked><span>24小时接机服务</span>
                                </p>
                                <a href="javascript:;"><div data-index="${res.data[0].m_id}" class="bookOnce">立即预定</div></a>
                                <a href="javascript:;"><div data-index="${res.data[0].m_id}" class="knowMore">了解更多</div></a>
                            </div>
                            <div class="mealImage">
                                <img src="${res.data[0].m_imageUrl}" alt="">
                            </div>
                        </div>
                       <!--第2个套餐-->
                       <div class="mealTemplateRight">
                            <div class="mealImage">
                                <img src="${res.data[1].m_imageUrl}" alt="">
                            </div>
                            <div class="mealText">
                                <h3 class="bigTitle">${res.data[1].m_bigTitle}</h3>
                                <p class="title">${res.data[1].m_Title}</p>
                                <p class="niceWords">${res.data[1].m_niceWords}</p>
                                <p class="price"> <span class="newPrice">￥${res.data[1].m_nowPrice}</span>
                                    <del class="oldPrice">￥${res.data[1].m_oldPrice}</del> </p>
                                <p class="radioText">
                                    <input type="radio" checked><span>底片全送</span>
                                    <input type="radio" checked><span>赠送酒店及门票</span>
                                    <input type="radio" checked><span>24小时接机服务</span>
                                </p>
                                <a href="javascript:;"><div data-index="${res.data[1].m_id}" class="bookOnce">立即预定</div></a>
                                <a href="javascript:;"><div  data-index="${res.data[1].m_id}" class="knowMore">了解更多</div></a>
                            </div>
                        </div>
                       <!--第3个套餐-->
                       <div class="mealTemplateLeft">
                            <div class="mealText">
                                <h3 class="bigTitle">${res.data[2].m_bigTitle}</h3>
                                <p class="title">${res.data[2].m_Title}</p>
                                <p class="niceWords">${res.data[2].m_niceWords}</p>
                                <p class="price"> <span class="newPrice">￥${res.data[2].m_nowPrice}</span>
                                    <del class="oldPrice">￥${res.data[2].m_oldPrice}</del> </p>
                                <p class="radioText">
                                    <input type="radio" checked><span>底片全送</span>
                                    <input type="radio" checked><span>赠送酒店及门票</span>
                                    <input type="radio" checked><span>24小时接机服务</span>
                                </p>
                                <a href="javascript:;"><div data-index="${res.data[2].m_id}" class="bookOnce">立即预定</div></a>
                                <a href="javascript:;"><div  data-index="${res.data[2].m_id}" class="knowMore">了解更多</div></a>
                            </div>
                            <div class="mealImage">
                                <img src="${res.data[2].m_imageUrl}" alt="">
                            </div>
                        </div>
                    `)
                }
                if(res.data.length==4){
                    $('#mealBox').css("height","2520px");
                    $('#box7').css("margin-top","600px");
                    $('#mealBox').append(`
                       <!--第1个套餐-->
                       <div class="mealTemplateLeft">
                            <div class="mealText">
                                <h3 class="bigTitle">${res.data[0].m_bigTitle}</h3>
                                <p class="title">${res.data[0].m_Title}</p>
                                <p class="niceWords">${res.data[0].m_niceWords}</p>
                                <p class="price"> <span class="newPrice">￥${res.data[0].m_nowPrice}</span>
                                    <del class="oldPrice">￥${res.data[0].m_oldPrice}</del> </p>
                                <p class="radioText">
                                    <input type="radio" checked><span>底片全送</span>
                                    <input type="radio" checked><span>赠送酒店及门票</span>
                                    <input type="radio" checked><span>24小时接机服务</span>
                                </p>
                                <a href="javascript:;"><div data-index="${res.data[0].m_id}" class="bookOnce">立即预定</div></a>
                                <a href="javascript:;"><div data-index="${res.data[0].m_id}" class="knowMore">了解更多</div></a>
                            </div>
                            <div class="mealImage">
                                <img src="${res.data[0].m_imageUrl}" alt="">
                            </div>
                        </div>
                       <!--第2个套餐-->
                       <div class="mealTemplateRight">
                            <div class="mealImage">
                                <img src="${res.data[1].m_imageUrl}" alt="">
                            </div>
                            <div class="mealText">
                                <h3 class="bigTitle">${res.data[1].m_bigTitle}</h3>
                                <p class="title">${res.data[1].m_Title}</p>
                                <p class="niceWords">${res.data[1].m_niceWords}</p>
                                <p class="price"> <span class="newPrice">￥${res.data[1].m_nowPrice}</span>
                                    <del class="oldPrice">￥${res.data[1].m_oldPrice}</del> </p>
                                <p class="radioText">
                                    <input type="radio" checked><span>底片全送</span>
                                    <input type="radio" checked><span>赠送酒店及门票</span>
                                    <input type="radio" checked><span>24小时接机服务</span>
                                </p>
                                <a href="javascript:;"><div data-index="${res.data[1].m_id}" class="bookOnce">立即预定</div></a>
                                <a href="javascript:;"><div  data-index="${res.data[1].m_id}" class="knowMore">了解更多</div></a>
                            </div>
                        </div>
                       <!--第3个套餐-->
                       <div class="mealTemplateLeft">
                            <div class="mealText">
                                <h3 class="bigTitle">${res.data[2].m_bigTitle}</h3>
                                <p class="title">${res.data[2].m_Title}</p>
                                <p class="niceWords">${res.data[2].m_niceWords}</p>
                                <p class="price"> <span class="newPrice">￥${res.data[2].m_nowPrice}</span>
                                    <del class="oldPrice">￥${res.data[2].m_oldPrice}</del> </p>
                                <p class="radioText">
                                    <input type="radio" checked><span>底片全送</span>
                                    <input type="radio" checked><span>赠送酒店及门票</span>
                                    <input type="radio" checked><span>24小时接机服务</span>
                                </p>
                                <a href="javascript:;"><div data-index="${res.data[2].m_id}" class="bookOnce">立即预定</div></a>
                                <a href="javascript:;"><div  data-index="${res.data[2].m_id}" class="knowMore">了解更多</div></a>
                            </div>
                            <div class="mealImage">
                                <img src="${res.data[2].m_imageUrl}" alt="">
                            </div>
                        </div>
                        <!--第4个套餐-->
                       <div class="mealTemplateRight">
                            <div class="mealImage">
                                <img src="${res.data[3].m_imageUrl}" alt="">
                            </div>
                            <div class="mealText">
                                <h3 class="bigTitle">${res.data[3].m_bigTitle}</h3>
                                <p class="title">${res.data[3].m_Title}</p>
                                <p class="niceWords">${res.data[3].m_niceWords}</p>
                                <p class="price"> <span class="newPrice">￥${res.data[3].m_nowPrice}</span>
                                    <del class="oldPrice">￥${res.data[3].m_oldPrice}</del> </p>
                                <p class="radioText">
                                    <input type="radio" checked><span>底片全送</span>
                                    <input type="radio" checked><span>赠送酒店及门票</span>
                                    <input type="radio" checked><span>24小时接机服务</span>
                                </p>
                                <a href="javascript:;"><div data-index="${res.data[3].m_id}" class="bookOnce">立即预定</div></a>
                                <a href="javascript:;"><div  data-index="${res.data[3].m_id}" class="knowMore">了解更多</div></a>
                            </div>
                        </div>
                    `)
                }
            }
        }

    })

    //地方tab切换选项卡
    // $('#placesBox ul li').removeClass('active');
    // $('#tabBox>div').removeClass('active');
    //
    // $(this).addClass('active');
    // $('#tabBox>div').eq($(this).index()).addClass('active');
})



//了解更多
$('#mealBox').on('click','.knowMore',function () {
    //console.log($(this).attr('data-index'));
    var sId = $(this).attr('data-index');
    window.location.href = "http://localhost:8084/pages/wedding.det.html?id="+sId+"";

});


//立即预定
$('#mealBox').on('click','.bookOnce',function () {
    var sId = $(this).attr('data-index');
    window.location.href = "http://localhost:8084/pages/book.html?id="+sId+"";

})

//私人定制
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
            alert('你已经成功预约');
        },
        error: function (error) {
            console.log(error);
        }
    })
})

//正则
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

})

//关闭预定按钮
$('#close').click(function () {
    $('#bookBox').hide();
})


