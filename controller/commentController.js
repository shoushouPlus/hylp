/**
 * Created by ASUS on 2018/12/5.
 */
var commentModel=require('./../model/commentModel.js');
var commentController={
    weddingGetData:function (req,res) {
        commentModel.weddingGetData(req.query.page,function (err,data) {
            if(err){
                console.log(err);
                res.send({error:1})
            }else{
                var arr=data.slice((req.query.page-1)*5,5*req.query.page);
                res.send({error:0,data:arr});
            }
        })
    },
    friendGetData:function (req,res) {
        commentModel.friendGetData(req.query.page,function (err,data) {
            if(err){
                console.log(err);
                res.send({error:1})
            }else{
                var arr=data.slice((req.query.page-1)*5,5*req.query.page);
                res.send({error:0,data:arr});
            }
        })
    },
    familyGetData:function (req,res) {
        commentModel.familyGetData(req.query.page,function (err,data) {
            if(err){
                console.log(err);
                res.send({error:1})
            }else{
                var arr=data.slice((req.query.page-1)*5,5*req.query.page);
                res.send({error:0,data:arr});
            }
        })
    },
    loverGetData:function (req,res) {
        commentModel.loverGetData(req.query.page,function (err,data) {
            if(err){
                console.log(err);
                res.send({error:1})
            }else{
                var arr=data.slice((req.query.page-1)*5,5*req.query.page);
                res.send({error:0,data:arr});
            }
        })
    },
    weddingGetPage:function (req,res) {
        commentModel.weddingGetPage(function (err,data) {
            if(err){
                console.log(err);
                res.send({error:1})
            }else{
                res.send({error:0,data:Math.ceil(data[0].num/5)});
            }
        })
    },
    friendGetPage:function (req,res) {
        commentModel.friendGetPage(function (err,data) {
            if(err){
                console.log(err);
                res.send({error:1})
            }else{
                console.log(data);
                console.log(Math.ceil(data[0].num/5))
                res.send({error:0,data:Math.ceil(data[0].num/5)});
            }
        })
    },
    familyGetPage:function (req,res) {
        commentModel.familyGetPage(function (err,data) {
            if(err){
                console.log(err);
                res.send({error:1})
            }else{
                console.log(data);
                console.log(Math.ceil(data[0].num/5))
                res.send({error:0,data:Math.ceil(data[0].num/5)});
            }
        })
    },
    loverGetPage:function (req,res) {
        commentModel.loverGetPage(function (err,data) {
            if(err){
                console.log(err);
                res.send({error:1})
            }else{
                console.log(data);
                console.log(Math.ceil(data[0].num/5))
                res.send({error:0,data:Math.ceil(data[0].num/5)});
            }
        })
    }
}
module.exports=commentController;
