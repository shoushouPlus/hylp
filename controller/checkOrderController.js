/**
 * Created by ASUS on 2018/12/5.
 */
var checkOrderModel=require('./../model/checkOrderModel.js');
var checkOrderController={
    waitForConsume:function (req,res) {
        checkOrderModel.waitForConsume(req.query.userId,function (err,data) {
            if(err){
                console.log(err);
            }
            else{
                res.send({error:0,data:data});
            }
        })
    },
    refreshConsume:function (req,res) {
        checkOrderModel.refreshConsume(req.query.oId,function (err,data) {
            if(err){
                console.log(err);
            }
            else{
                res.send({error:0,data:data});
            }
        })
    },
    refreshComment:function (req,res) {
        checkOrderModel.refreshComment(req.query.oId,function (err,data) {
            if(err){
                console.log(err);
            }
            else{
                res.send({error:0,data:data});
            }
        })
    },
    waitForComment:function (req,res) {
        checkOrderModel.waitForComment(req.query.uId,function (err,data) {
            if(err){
                console.log(err);
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    addComment:function (req,res) {
        checkOrderModel.addComment(req.query.word,req.query.img1,req.query.img2,req.query.img3,req.query.date,req.query.oId,req.query.uId,req.query.mId,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0})
            }
        })
    }
};
module.exports=checkOrderController;
