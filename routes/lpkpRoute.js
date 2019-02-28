var express=require('express');
var lpkpController=require('../controller/lpkpController.js');
//定义的模块
var myRouter=express.Router();
myRouter.route('/lpkp').get(lpkpController.show);
//导出模块
module.exports=myRouter;