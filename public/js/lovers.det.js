/**
 * Created by ASUS on 2018/12/6.
 */
window.onload=function () {
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

    var  url=location.search;
    var arr=url.split("=");
    $.ajax({
            url: '/showLoversDet',
            data:{data:arr[1]},
            success: function (res) {
                $('#box').append(`<div></div>
    <div id="box1">
        <div id="box4">
            <div id="box2"></div>
            <div id="box3">
                <p id="p1">热门推荐:</p>
                <p id="p2">${res[0].md_des1}</p>
                <p id="p3">${res[0].md_des2}</p>
                <p id="p4">${res[0].md_des3}</p>
            </div>
            <div id="box5">
            <div id="box6">
               </div>
            <div id="box7">
                <div id="box8">
                    <p id="p5">定金：<span id="span2">￥1000</span></p>
                    <span id="span1">建议提前15天预定</span>
                </div>
                <p id="p6">优惠信息:<span id="span3">现在购买还有价值300元精美小礼品赠送哦！手慢无</span></p>
                <div id="box9"><p class="p7">满意度:<span class="span4">96.8%</span></p><p class="p7">点评数:<span class="span4">65</span></p><p class="p8">关注度:<span class="span4">90</span></p></div>
                <div id="box10"><p >拍摄日期:</p><input type="text"></div>
                <div id="box11"><p >拍摄人数:</p>
                    <div class="div9">
                        <div class="div10">-</div><div id="box12">1</div><div class="div11">+</div><div id="box13"><span id="p7">成人</span></div></div>
                    <div id="box14"></div>
                </div>
            </div>
        </div>
 </div>
    </div>
    <div id="box15"></div>
    <div id="box16">
        <p id="p8">套餐详图</p>
        <p id="p9">套餐包含</p>
        <p id="p10">退款须知</p>
        <p id="p11">友情提示</p>
    </div>
   <div id="box18">
       <p id="p12"> &nbsp;  &nbsp; &nbsp; &nbsp;${res[0].md_description}</p>
   </div>
    <div>
        <div id="box19">
            <div id="box20"></div>
            <div id="box21"></div>
        </div>
        <div id="box22">
            <div id="box23"></div>
            <div id="box24"></div>
        </div>
    </div>
    <div class="box25"></div>
    <div>
 <div id="box27">
     <div class="box26">套餐包含</div>
    <div class="oP">
        <p>[交通]本套餐不包含出发地到拍摄地的交通费用，如需代订火车票，机票，高铁票，请联系客服</p>
        <p>[食宿]免费提供五星级酒店或高档酒店，旅拍期间免费提供所有用餐，如客人需要自行安排食宿，概不退费</p>
        <p>[赠送]赠送拍摄景点所有门票，底片全送，特别赠送旅拍意外险(最高保险额5万元)</p>
        <p>[服务]24小时接机服务。包含5套拍摄服装，以及精美化妆，服装师，摄影师随时为你服务</p>
    </div>
 </div>
        <div class="box25"></div>
        <div>
            <div class="box26">退款须知</div>
            <p class="oP1">1.所有的产品，在使用有效期内未与商家预约或预约产品出行日期双方未达成一致，且在拍摄日前在出发前十五天提出退款，退定金的百分之50；在使用有效期内未与商家预约或预约产品出行日期双方未达成一致，在出发前一周的提出退款，退定金的百分之10；在使用有效期内未与商家预约或预约产品出行日期双方未达成一致，且在拍摄日前一周月未消费的不能退款；如用户已经与商家预约产品，申请退款需要承担实际损失或按照双方签署协议承担损失。<br>
                2、退款金额将在15个工作日内返回您的原支付账户</p>
        </div>
        <div class="box25"></div>
        <div>
            <div class="box26">友情提示</div>
            <p class="oP2">1、在拍摄中注意证件、钱财的保管及自身的安全，并将重要证件分开存放。<br>
                2、在景区拍摄时请警惕闲散游荡人员，帮忙拍合照时要时刻注意物品安全。<br>
                3、最好根据个人情况带上所需药品，如伤风感冒药、解暑药、止痛片、消炎片、晕车药、创可贴等。</p>
        </div>
</div>`)
                $('#box2').css({
                    'background':'url('+res[0].md_img3+') ',
                    'background-repeat':'no-repeat',
                    'background-size':'contain',
                    'background-size':'580px,352px',
                    'height':'352px',
                    'width':'580px',


                });
                $('#box20').css({
                    'background':'url('+res[0].md_img1+') ',
                    'background-repeat':'no-repeat',
                    'background-size':'contain',
                    'background-size':'580px,352px',
                    'height':'352px',
                    'width':'580px',
                    'margin-right':'148px',

                });
                $('#box21').css({
                    'background':'url('+res[0].md_img2+') ',
                    'background-repeat':'no-repeat',
                    'background-size':'contain',
                    'background-size':'580px,352px',
                    'height':'352px',
                    'width':'580px',
                    'margin-top': '-352px',
                    'margin-right':'70px'



                });
                $('#box23').css({
                    'background':'url('+res[0].md_img3+' )',
                    'background-repeat':'no-repeat',
                    'background-size':'contain',
                    'background-size':'580px,352px',
                    'height':'352px',
                    'width':'580px',
                    'margin-right':'148px'
                });
                $('#box24').css({
                    'background':'url('+res[0].md_img4+') ',
                    'background-repeat':'no-repeat',
                    'background-size':'contain',
                    'background-size':'580px,352px',
                    'height':'352px',
                    'width':'580px',
                    'margin-top': '-352px',
                    'margin-right':'70px'
                });
                $('#box14').append(`<a data-index="${arr[1]}" class="bookOnce" href="javascript:;">立即预定</a>`)


            },
            error: function(error) {
                console.log(error);
            }
        });
}
$('#box').on('click','.div10',function () {
    var  str=$('#box12').html();
    if(str>0){
        str_1=str-1;
        $('#box12').html(str_1)
    }


})
$('#box').on('click','.div11',function () {
    var  str1=$('#box12').html();
    str_2 =parseInt(str1)+1;
    $('#box12').html(str_2)
})
$('#box').on('click','.bookOnce',function () {
    var sId = $(this).attr('data-index');
    //console.log(sId);
    window.location.href = "http://localhost:8084/pages/book1.html?id="+sId+"";
})


