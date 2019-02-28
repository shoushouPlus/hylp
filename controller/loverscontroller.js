/**
 * Created by ASUS on 2018/12/5.
 */
var loversModel=require('../model/loversModel.js');
var loversController={
    showLoversPage:function (req,res) {
        loversModel.showLoversPage(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
            }
        })
    },
    showLoversQD:function (req,res) {
        loversModel.showLoversQD(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showLoversBJ:function (req,res) {
        loversModel. showLoversBJ(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showLoversSY:function (req,res) {
        loversModel.showLoversSY(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showLoversSH:function (req,res) {
        loversModel.showLoversSH(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showLoversLJ:function (req,res) {
        loversModel.showLoversLJ(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showLoversDali:function (req,res) {
        loversModel.showLoversDali(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showLoversDet:function (req,res) {
        loversModel.showLoversDet(req.query.data,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
            }
        })
    },
    submitloverOrder:function (req,res) {
        loversModel.submitloverOrder(req.query.m_id,req.query.sName,req.query.sSex,req.query.sPhone,req.query.sIdCard,req.query.sTotal,req.query.sRoom,req.query.sPlace,req.query.sTakenDate,req.query.sOrderDate,function (err,data) {
            if(err){
                console.log(err);
            }else {
                res.send({error:0,data:data})
            }
        })
    },
    //好友二级页面的渲染
    showfriendPage:function (req,res) {
        loversModel.showfriendPage(function (err,data) {
            if(err){
                console.log(data)
            }else{
                res.send(data)
            }
        })
    },
    showfriendDali:function (req,res) {
        loversModel.showfriendDali(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showfriendQD:function (req,res) {
        loversModel.showfriendQD(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)

            }
        })
    },
    showfriendBJ:function (req,res) {
        loversModel.showfriendBJ(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)

            }
        })
    },
    showfriendSY:function (req,res) {
        loversModel.showfriendSY(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)

            }
        })
    },
    showfriendSH:function (req,res) {
        loversModel.showfriendSH(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)

            }
        })
    },
    showfriendLJ:function (req,res) {
        loversModel.showfriendLJ(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)

            }
        })
    },
    //家庭二级页面的渲染
    showfamilyPage:function (req,res) {
        loversModel.showfamilyPage(function (err,data) {
            if(err){
                console.log(data)
            }else{
                res.send(data)
            }
        })
    },
    showfamilyDali:function (req,res) {
        loversModel.showfamilyDali(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showfamilyQD:function (req,res) {
        loversModel.showfamilyQD(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showfamilyBJ:function (req,res) {
        loversModel.showfamilyBJ(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showfamilySY:function (req,res) {
        loversModel.showfamilySY(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showfamilySH:function (req,res) {
        loversModel.showfamilySH(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    showfamilyLJ:function (req,res) {
        loversModel.showfamilyLJ(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },
    //朋友三级页面的渲染
    friendDetail:function (req,res) {
        loversModel.friendDetail(req.query.data,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)


            }
        });

    },
    loadloverDetails:function (req,res) {
        loversModel.loadloverDetails(req.query.data,function (err,data) {
            if(err){
                console.log(err);
            }else{
                res.send({error:0,data:data});
                //console.log(data);     //在这里获取到了对应m_id的那一条数据
            }
        })
    },
    //家庭三级页面的渲染
    showfamily_CD_Det:function (req,res) {
        loversModel.showfamily_CD_Det(req.query.data,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data)
                console.log(data)

            }
        });

    },
   

}
module.exports=loversController;