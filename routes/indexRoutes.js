//引入
var express=require('express');
var indexController=require('./../controller/indexController');


//定义模块
var myRouter=express.Router();


myRouter.route('/getimg').get(indexController.img);



//导出模块
module.exports=myRouter;
