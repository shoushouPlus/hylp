
window.onload=function(){
    $.ajax({
        url:'/ball',
        success:function (err) {
            console.log(err)
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
        $('.ccc3').show()
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
        url:'/ball',
        success:function (err) {
            console.log(err);
            if(err.error==1){
                alert('请登陆');
                $('.ccc3').show()
            }
            else if(err.error==0){
              $('.a').attr('href','http://localhost:8084/pages/personal.html')
            }
        }
    })
});

$('#name-btn').click(function () {
    console.log(1);

    $.ajax({
        url: '/userName',
        data: {
            user: $('#name-user').val(),
            pass: $('#name-password').val()
        },

        success: function (err) {
            console.log(111);

          if(err.state==0){
              console.log(err.data);
              $('#landing').hide();
              $('#registered').hide();
              $('.ccc3').hide();
              $('#ball').show();
              $('#exit').show();
              $('.a').attr('href','pages/personal.html')
              $('#ball').attr('src',err.data[0].u_headPhoto)
          }else {
              alert('密码错误');
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

//联系客服

    $('#talk-close1').click(function () {
        $('#talk').hide();
        $('#smoll-talk').show();

    });

    $('#talk-close2').click(function () {
        $('#smoll-talk').hide();
        $('#talk').show();



        var socket=new WebSocket('ws://192.168.1.103:5555');
        // 建立连接接收消息
        socket.onopen=function () {
            socket.onmessage=function (ev) {
                var json = JSON.parse(ev.data);
                $('#talk-div2').append('<p><i>' + json.name + '</i>:<b>' + json.msg + '</b></p>');
            }
        };

        $('#talk-btn').click(function () {
            //消息的格式偶是字符串
            var msg={"name":"游客","msg":$('#msg').val()};
            socket.send(JSON.stringify(msg))

        })

    });



