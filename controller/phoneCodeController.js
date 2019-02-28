var AV = require('leanengine');

AV.init({
    appId: 'sNpmHmcjkShNXEKM5NI7dOfi-gzGzoHsz',
    appKey: 'BV9JURcKF8CH5UJVIaBLmltR',
    masterKey: '4wmYMTGE70rai4AaIYT71VtV'
});
var addmodel=require('./../model/indexModel.js')
var myController={

    code:function (req,res) {
        console.log(req.query.phone)
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber:req.query.phone,
            name: '[花漾旅拍网]',
            op: '登陆注册短信验证',
            ttl: 10                     // 验证码有效时间为 10 分钟
        }).then(function(res){
            //调用成功
            console.log(res);
            res.send({error:0})
        }, function(err){
            //调用失败
            console.log(err);
            res.send({error:1})
        });
    },
    logncode:function (req,res) {
        AV.Cloud.verifySmsCode(req.query.code,req.query.phone).then(function(){
            //验证成功
            res.send({error:0})

        }, function(err){
            //验证失败
            res.send({error:1})
        });
    },
    add:function (req,res) {
        addmodel.add(req.query.phone,function (err,data) {
            if(err){
                console.log(err)
            }else {
                console.log(data)
            }
        })
    },
   adduser:function (req,res) {
        addmodel.adduser(req.query.user,req.query.pass,function (err,data) {
            if(err){
                console.log(err)
            }else {
                console.log(data)
            }
        })
    },
    login:function (req,res) {

        addmodel.login(req.query.user,req.query.pass,function (err,data) {
            if(err){
                console.log(err)
            }else {
                if(data.length){
                    req.session.user=data[0].u_id;
                    console.log(req.session.user);
                    res.send({"state":0,"context":"成功",data:data});
                }else{
                    res.send({"state":1,"context":"账号名或密码错误"});
                }
            }
        })
    },
    //配置session
    session:function (req,res) {
        
        console.log(req.session)
        if(req.session.user){
            addmodel.session(req.session.user,function (err,data) {
                if(err){
                    console.log(err)
                }else {
                    console.log(data)
                    res.send({error:0,data:data})
                }
            })
           
        }else {
            res.send({error:1})
        }
    },
    //退出清除session
    exit:function (res,req) {
        res.session.destroy();
        console.log(res.session.user);
    }
};


module.exports=myController;