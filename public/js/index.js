$(function () {
    //ajaxx





//大轮播
    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        loop: true, // 循环模式选项

        // 如果需要分页器
        // pagination: {
        //     el: '.swiper-pagination'
        // },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar'
        }
    });

//外景轮播
    var pSwiper = new Swiper('.swiper-photo', {
        // spaceBetween: 30,
        // centeredSlides: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false
        // },
        // loop: true, // 循环模式选项


    });


//视频轮播
    var vSwiper = new Swiper('.swiper-video', {

        // spaceBetween: 30,
        // centeredSlides: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false
        // },
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination'
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1'
        }
    });


//外景效果

    $(".s-box").hover(
        function () {

            $(this).find(".trans").stop().delay(50).animate({"top":-300,opacity:1},400)
        },
        function () {

            $(this).find(".trans").stop().animate({"top":0,opacity:1},300)
        }

    );

//获取外景图片
    $.ajax({
        url:'/getimg',
        success:function (err) {
            console.log(err);
            for(var i=0;i<err.length;i++){
              $('#photo-box').append(' <div class="div1"><img src="'+err[i].rp_img1+'" alt=""> <h3>'+err[i].rp_theme+'</h3> <p class="p2">GOLDE LIDIES PHOTO</p>')


            }
        }
    })
});
var countDown=60;
function setTime(val) {
    if (countDown == 0) {
        val.removeAttribute("disabled");
        val.value="获取验证码";
        countDown = 60;
        return;
    } else {
        val.setAttribute("disabled", true);
        val.value="重新发送(" + countDown + ")";
        countDown--;
    }
    setTimeout(function() {
        setTime(val)
    },1000)
} ;




