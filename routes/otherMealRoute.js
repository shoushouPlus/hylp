/**
 * Created by ASUS on 2019/1/2.
 */
/**
 * Created by ASUS on 2018/12/7.
 */

var express=require('express');
var otherMealController=require('./../controller/otherMealController.js');
//定义的模块
var myRouter=express.Router();
//二级页面的渲染
myRouter.route('/otherMeal').get(otherMealController.otherMeal);
myRouter.route('/getCount').get(otherMealController.getCount);
myRouter.route('/othSelect').get(otherMealController.othSelect);
//下架该套餐
myRouter.route('/othDelete').get(otherMealController.othDelete);
//修改套餐
myRouter.route('/showOthEdit').get(otherMealController.showOthEdit);
//保存修改
myRouter.route('/showOthSave').get(otherMealController.showOthSave);
//新增套餐
myRouter.route('/showOthAdd').get(otherMealController.showOthAdd);
myRouter.route('/othAddDetail').get(otherMealController.othAddDetail);


//导出模块
module.exports=myRouter;