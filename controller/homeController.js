var homeModel=require('./../model/homeModel.js');



var homeController={
    newOrder:function (req,res) {
        homeModel.newOrder(function (err,data) {
            if (err){
                console.log(err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    newComment:function (req,res) {
        homeModel.newComment(function (err,data) {
            if (err){
                console.log(err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    newUser:function (req,res) {
        homeModel.newUser(function (err,data) {
            if (err){
                console.log(err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },

    local:function (req,res) {
        homeModel.local(function (err,data) {
            if (err){
                console.log(err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    getLi:function (req,res) {
        homeModel.getLi(function (err,data) {
            if (err){
                console.log(err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    addLi:function (req,res) {
        homeModel.addLi(req.query.m,function (err,data) {
            console.log(req.query.m)
            if (err){
                console.log(err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    removeLi:function (req,res) {
        homeModel.removeLi(req.query.id,function (err,data) {
            if (err){
                console.log(err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
 userNamejoin:function (req,res) {
     homeModel.userName(req.query.user2,req.query.pass2,function (err,data) {
         if (err){
             console.log('账号密码错误')
         } else {
             res.send({error:0,data:data})
         }
     })
 }
   

};




module.exports=homeController;