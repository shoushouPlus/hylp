/**
 * Created by ASUS on 2018/12/7.
 */

var express=require('express');
var bookController=require('./../controller/bookController.js');
//定义的模块
var myRouter=express.Router();
//二级页面的渲染
myRouter.route('/book').get(bookController.book);
//导出模块
module.exports=myRouter;