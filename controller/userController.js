let userModel = require('./../model/userModel.js');

let userController = {
    index : function (req, res) {
        userModel.show(req.param.userId,function (err,data) {
            if (err){
                console.log(err)
            } else {
                res.send({error:0,data:data})
            }

        })
    },
    getUserCount:function (req,res) {
        userModel.getUserCount(function (err,data) {
            if (err){
                console.log(err)
            } else {
                // console.log(data)
                res.send({error:0,data:data})
            }
        })
    },
    getUserData2:function (req,res) {
            userModel.getUserData2(req.query.page,function (err,data) {
                if (err){
                    console.log(err)
                } else {

                    let arr=data.slice((req.query.page-1)*8,req.query.page*8);
                    console.log(arr);
                    res.send({error:0,data:arr})
                }
            })
    },
    bin:function (req,res) {
        userModel.bin(req.session.user,function (err,data) {
            if (err){
                console.log(err)
            } else {
                
               res.send({error:0,msg:data})
            }
        })
    },
    bin1:function (req,res) {
        userModel.bin1(req.session.user,function (err,data) {
            if (err){
                console.log(err)
            } else {
                res.send({error:0,msg:data})
            }
        })


    },
    upload1:function(req,res){
        userModel.upload1(req.session.user,req.body.aaa,function (err,data) {
            if (err){
                console.log(err)
            } else {
                res.send({error:0,msg:data})
            }

        })

    },
    changeUser:function(req,res){
        userModel.changeUser(req.session.user,req.query.name,req.query.phone,req.query.sign,req.query.sex,req.query.province,req.query.city,function (err,data) {
            if (err){
                console.log(err)
            } else {
                console.log(req.session.user)
                res.send({error:0,msg:data})
            }

        })

    },

    queryCustomer:function (req,res) {
        userModel.queryCustomer(req.query.name,function (err,data) {
            if (err){
                console.log(err)
            } else {
                res.send({error:0,data:data})
            }

        })

    },
    queryCustomer1:function (req,res) {
        userModel.queryCustomer1(req.query.phone,function (err,data) {
            if (err){
                console.log(err)
            } else {
                res.send({error:0,data:data})
            }

        })

    },
};
module.exports=userController;