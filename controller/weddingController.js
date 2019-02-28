/**
 * Created by asus on 2018/12/5.
 *///引入loginModel
var weddingModel = require('./../model/weddingModel.js');

var weddingController ={

    //对二级页面进行数据渲染
    showWeddingPage:function(req,res) {
        ///add?content=xxxx
        //返回:{error:0,data:data}     //0 成功   1失败
        weddingModel.showWeddingPage(function (err,data) {
            if(err){
                console.log('数据库错误');
            }else{
                res.send({error:0,data:data});
                //console.log(data);
            }
        })
    },


    getData:function (req,res) {
        //返回:{error:0,data:data}
        weddingModel.getData(req.query.data,function (err,data) {
            if(err){
                console.log(err)
            }else {
                res.send({error:0,data:data});
            }
        })
    },


    loadWeddingDetails:function (req,res) {
        weddingModel.loadWeddingDetails(req.query.data,function (err,data) {
            if(err){
                console.log(err);
            }else{
                res.send({error:0,data:data});
                //console.log(data);     //在这里获取到了对应m_id的那一条数据
            }
        })
    },


    submitWeddingOrder:function (req,res) {
         weddingModel.submitWeddingOrder(req.query.m_id,req.query.sName,req.query.sSex,req.query.sPhone,req.query.sIdCard,req.query.sTotal,req.query.sRoom,req.query.sPlace,req.query.sTakenDate,req.query.sOrderDate,function (err,data) {
             if(err){
                 console.log('数据库错误');
             }else {
                 res.send({error:0,id:data.insertId});
             }
         })
    },

    loadOrderMsg:function (req,res) {
        weddingModel.loadOrderMsg(req.query.data,function (err,data) {
            if(err){
                console.log(err);
            }else{
                res.send({error:0,data:data});
            }
        })
    },


    getWeddingData:function (req,res) {
        weddingModel.getWeddingData(req.query.page,function (err,data){
            if(err){
                console.log(err);
            }else{
                res.send({error:0,data:data});
            }
        })
    },

    getStaffData:function (req,res) {
        weddingModel.getStaffData(req.query.page,function (err,data) {
            if(err){
                console.log(err);
            }else{
                res.send({error:0,data:data});
            }
        })
    },

    //新增套系
    addWeddingMeal:function (req,res) {
        var data=JSON.parse(req.query.data)
        //console.log(data);
        weddingModel.addWeddingMeal(data.m_mealNumber,data.m_bigTitle,data.m_Title,data.m_niceWords,data.m_nowPrice,data.m_oldPrice,data.m_subscription,data.m_imageUrl,data.m_place,function (err,data){
            if(err){
                console.log(err);
            }else {
                //console.log(data.insertId)
                res.send({error:0,id:data.insertId});
            }
        })
    },
    //添加婚纱套系详细信息
    addWeddingDeatils:function (req,res) {
        var data=JSON.parse(req.query.data);
        //console.log(req.query.id);
        weddingModel.addWeddingDeatils(req.query.id,data.md_des1,data.md_des2,data.md_des3,data.md_img1,data.md_img2,data.md_img3,data.md_img4,data.md_description,function (err,data){
            if(err){
                console.log(err);
            }else {
                //console.log(data.insertId)
                res.send({error:0});
            }
        })
    },
    //新增员工
    addStaff:function (req,res) {
        var data=JSON.parse(req.query.data)
        console.log(data)
        weddingModel.addStaff(data.s_name,data.s_phone,data.s_password,data.s_age,data.s_birthday,data.s_idCard,data.s_urgencyPhone,data.s_address,function (err,data){
            if(err){
                console.log(err);
            }else {
                //console.log(data.insertId)
                res.send({s_id:data.insertId});
            }
        })
    },

    //删除员工
    removeStaff:function (req,res) {
        //console.log(req.query.id);
        weddingModel.removeStaff(req.query.id,function (err,data){
            if(err){
                console.log(err);
            }else {
                res.send({error:0});
            }
        })
    },

    //删除婚纱套系
    removeWeddingMeal:function (req,res) {
        //console.log(req.query.id);
        weddingModel.removeWeddingMeal(req.query.id,function (err,data){
            if(err){
                console.log(err);
            }else {
                res.send({error:0});
            }
        })
    },

    //编辑员工信息
    sureEditStaff:function (req,res) {
        //console.log(req.query.s_password,req.query.s_urgencyPhone,req.query.s_address,req.query.s_id);
        weddingModel.sureEditStaff(req.query.s_phone,req.query.s_password,req.query.s_urgencyPhone,req.query.s_address,req.query.s_id,function (err,data){
            if(err){
                console.log(err);
            }else {
                res.send({error:0});
            }
        })
    },

    //编辑婚纱套餐信息
    editWeddingMeal:function (req,res) {
        weddingModel.editWeddingMeal(req.query.m_bigTitle,req.query.m_Title,req.query.m_niceWords,req.query.m_oldPrice,req.query.m_nowPrice,req.query.m_subscription,req.query.m_id,function (err,data){
            if(err){
                console.log(err);
            }else {
                res.send({error:0});
            }
        })
    },

    getPage:function (req,res) {
        weddingModel.getPage(function (err,data){
            if(err){
                console.log(err);
            }else {
                res.send({error:0,content:data});
            }
        })
    },

    getStaffPage:function (req,res) {
        weddingModel.getStaffPage(function (err,data){
            if(err){
                console.log(err);
            }else {
                res.send({error:0,content:data});
            }
        })
    },

    searchOrder:function (req,res) {
        weddingModel.searchOrder(req.query.data,req.query.way,req.query.page,function (err,data){
            if(err){
                console.log(err);
            }else {
                res.send({error:0,content:data});
            }
        })
    },

    searchStaff:function (req,res) {
        weddingModel.searchStaff(req.query.data,req.query.way,req.query.page,function (err,data){
            if(err){
                console.log(err);
            }else {
                res.send({error:0,content:data});
            }
        })
    },

    getSearchPage:function (req,res) {
        weddingModel.getSearchPage(req.query.data,req.query.txt,function (err,data){
            if(err){
                console.log(err);
            }else {
                res.send({error:0,content:data});
            }
        })
    },
};

//导出
module.exports = weddingController;
