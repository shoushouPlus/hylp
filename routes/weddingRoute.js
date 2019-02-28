//引入express
var express = require('express');

//引入msgController文件
var weddingController = require('./../controller/weddingController.js');



//创建router对象
var myRouter = express.Router();
/*控制路由*/

//二级页面请求
myRouter.route('/showWeddingPage').get(weddingController.showWeddingPage);
//获取相应套餐的三级页面
myRouter.route('/loadWeddingDetails').get(weddingController.loadWeddingDetails);

myRouter.route('/getData').get(weddingController.getData);
//提交订单
myRouter.route('/submitWeddingOrder').get(weddingController.submitWeddingOrder);

myRouter.route('/loadOrderMsg').get(weddingController.loadOrderMsg);


myRouter.route('/getWeddingData').get(weddingController.getWeddingData);
myRouter.route('/getStaffData').get(weddingController.getStaffData);

myRouter.route('/addWeddingMeal').get(weddingController.addWeddingMeal);
myRouter.route('/addStaff').get(weddingController.addStaff);
myRouter.route('/removeWeddingMeal').get(weddingController.removeWeddingMeal);
myRouter.route('/removeStaff').get(weddingController.removeStaff);
myRouter.route('/editWeddingMeal').get(weddingController.editWeddingMeal);
myRouter.route('/sureEditStaff').get(weddingController.sureEditStaff);


myRouter.route('/getPage').get(weddingController.getPage);
myRouter.route('/getStaffPage').get(weddingController.getStaffPage);
myRouter.route('/searchOrder').get(weddingController.searchOrder);
myRouter.route('/searchStaff').get(weddingController.searchStaff);
myRouter.route('/addWeddingDeatils').get(weddingController.addWeddingDeatils);


myRouter.route('/getSearchPage').get(weddingController.getSearchPage);

//导出模块
module.exports = myRouter;