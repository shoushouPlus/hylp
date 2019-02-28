/**
 * Created by ASUS on 2018/12/5.
 */
var htCommentModel=require('./../model/htCommentModel.js');
var htCommentController={
//comment部分

    //获取某一页的数据
    htCommentGetData:function (req,res) {
        htCommentModel.htCommentGetData(req.query.page,function (err,data) {
            if(err){
                console.log(err)
            }else{
                var arr=data.slice((req.query.page-1)*9,9*req.query.page);
                res.send({error:0,data:arr});
            }
        })
    },
    //获取总数据数
    htCommentGetPage:function (req,res) {
        htCommentModel.htCommentGetPage(function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    //通过电话号码查询
    queryCommentByTel1:function (req,res) {
        htCommentModel.queryCommentByTel1(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    //通过套餐名查询
    queryCommentByMealName:function (req,res) {
        htCommentModel.queryCommentByMealName(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    //通过评论日期查询
    queryCommentByCommentDate:function (req,res) {
        htCommentModel.queryCommentByCommentDate(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    //通过拍摄地查询
    queryCommentByPlace1:function (req,res) {
        htCommentModel.queryCommentByPlace1(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    queryCommentByType:function (req,res) {
        htCommentModel.queryCommentByType(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },




//order部分
    getDataAll:function (req,res) {
        htCommentModel.getDataAll(req.query.page,function (err,data) {
            if(err){
                console.log(err);
            }else{
                var arr=data.slice((req.query.page-1)*9,req.query.page*9)
                res.send({error:0,data:arr})
            }
        })
    },
    getOrderPage:function (req,res) {
        htCommentModel.getOrderPage(function (err,data) {
            if(err){
                console.log(err);
            }else{
                res.send({error:0,data:data})
            }
        })
    },
    getOrderCommentedData:function (req,res) {
        htCommentModel.getOrderCommentedData(req.query.page,function (err,data) {
            if(err){
                console.log(err);
            }else{
                var arr=data.slice((req.query.page-1)*9,req.query.page*9);
                res.send({error:0,data:arr})
            }
        })
    },
    getCommentedPage:function (req,res) {
        htCommentModel.getCommentedPage(function (err,data) {
            if(err){
                console.log(err);
            }else{
                res.send({error:0,data:data})
            }
        })
    },
    getCommentData:function (req,res) {
        htCommentModel.getCommentData(req.query.page,function (err,data) {
            if(err){
                console.log(err);
            }else{
                var arr=data.slice((req.query.page-1)*9,req.query.page*9)
                res.send({error:0,data:arr})
            }
        })
    },
    getCommentPage:function (req,res) {
        htCommentModel.getCommentPage(function (err,data) {
            if(err){
                console.log(err);
            }else{
                res.send({error:0,data:data})
            }
        })
    },
    getOrderConsumeData:function (req,res) {
        htCommentModel.getOrderConsumeData(req.query.page,function (err,data) {
            if(err){
                console.log(err);
            }else{
                var arr=data.slice((req.query.page-1)*9,req.query.page*9)
                res.send({error:0,data:arr})
            }
        })
    },
    getConsumePage:function (req,res) {
        htCommentModel.getConsumePage(function (err,data) {
            if(err){
                console.log(err);
            }else{
                res.send({error:0,data:data})
            }
        })
    },
    deleteOrderConsume:function (req,res) {
        htCommentModel.deleteOrderConsume(req.query.oid,function (err,data) {
            if(err){
                console.log(err);
            }else{
                res.send({error:0,data:data})
            }
        })
    },

    queryOrderByTel:function (req,res) {
        htCommentModel.queryOrderByTel(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    queryOrderById:function (req,res) {
        htCommentModel.queryOrderById(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    queryOrderByOrderDate:function (req,res) {
        htCommentModel.queryOrderByOrderDate(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    queryOrderByPlace:function (req,res) {
        htCommentModel.queryOrderByPlace(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },


    queryCommentedByTel:function (req,res) {
        htCommentModel.queryCommentedByTel(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    queryCommentedById:function (req,res) {
        htCommentModel.queryCommentedById(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    queryCommentedByOrderDate:function (req,res) {
        htCommentModel.queryCommentedByOrderDate(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    queryCommentedByPlace:function (req,res) {
        htCommentModel.queryCommentedByPlace(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },



    queryCommentByTel:function (req,res) {
        htCommentModel.queryCommentByTel(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    queryCommentById:function (req,res) {
        htCommentModel.queryCommentById(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    queryCommentByOrderDate:function (req,res) {
        htCommentModel.queryCommentByOrderDate(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    queryCommentByPlace:function (req,res) {
        htCommentModel.queryCommentByPlace(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },


    queryConsumeByTel:function (req,res) {
        htCommentModel.queryConsumeByTel(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    queryConsumeById:function (req,res) {
        htCommentModel.queryConsumeById(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    queryConsumeByOrderDate:function (req,res) {
        htCommentModel.queryConsumeByOrderDate(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    queryConsumeByPlace:function (req,res) {
        htCommentModel.queryConsumeByPlace(req.query.msg,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },


}
module.exports=htCommentController;
