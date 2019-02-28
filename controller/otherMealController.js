/**
 * Created by ASUS on 2019/1/2.
 */
var otherMealModel=require('../model/otherMealModel.js');
var otherMealController={
    otherMeal:function (req,res) {
        otherMealModel.otherMeal(req.query.page,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{

                var arr=data.slice((req.query.page-1)*7,7*req.query.page);
                res.send({error:0,data:arr})
            }
        })
    },
    getCount:function (req,res) {
        ///getCount?
        //返回 {error:0,count:页数}
        otherMealModel.getCount(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send({error:0,count:Math.ceil(data[0].num)})
                console.log(data[0].num+'啊');
                // console.log(count);
            }
        })
    },
    othSelect:function (req,res) {
        otherMealModel.othSelect(req.query.content,req.query.content1,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send({error:0,data:data})
            }
        })
    },
    //下架该套餐
    othDelete:function (req,res) {
        otherMealModel.othDelete(req.query.gid,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data})
            }
        })
    },
    //修改该套餐
    showOthEdit:function (req,res) {
        otherMealModel.showOthEdit(req.query.gid,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data})
            }
        })
    },
    //保存修改
    showOthSave:function (req,res) {
        otherMealModel.showOthSave(req.query.EditInputId,req.query.EditInputTitle,req.query.EditInputMealPrice,req.query.EditInputPrice,req.query.EditInputPhoto,req.query.EditInputPlace,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data})
            }
        })
    },
    //新增套餐
    showOthAdd:function (req,res) {
        otherMealModel.showOthAdd(req.query.AddInputId,req.query.AddInputWord,req.query.AddInputTitle,req.query.AddInputMealPrice,req.query.AddInputPrice,req.query.AddInputPhoto,req.query.AddInputPlace,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data})
            }
        })
    },
    //新增套餐详情
    othAddDetail:function (req,res) {
        otherMealModel.othAddDetail(req.query.intro1,req.query.intro2,req.query.intro3,req.query.Scenic,req.query.AddId,req.query.AddInputPhoto1,req.query.AddInputPhoto2,req.query.AddInputPhoto3,req.query.AddInputPhoto4,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data})
            }
        })
    },


}
module.exports=otherMealController;