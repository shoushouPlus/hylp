/**
 * Created by ASUS on 2018/12/5.
 */
var express=require('express');
var loversController=require('./../controller/loversController.js');
//定义的模块
var myRouter=express.Router();
//二级页面的渲染
myRouter.route('/showfamilyPage').get(loversController.showfamilyPage);
myRouter.route('/showfriendPage').get(loversController.showfriendPage);
myRouter.route('/showLoversPage').get(loversController.showLoversPage);
myRouter.route('/showLoversDali').get(loversController.showLoversDali);
myRouter.route('/showLoversSH').get(loversController.showLoversSH);
myRouter.route('/showLoversLJ').get(loversController.showLoversLJ);
myRouter.route('/showLoversQD').get(loversController.showLoversQD);
myRouter.route('/showLoversBJ').get(loversController.showLoversBJ);
myRouter.route('/showLoversSY').get(loversController.showLoversSY);
myRouter.route('/showfriendDali').get(loversController.showfriendDali);
myRouter.route('/showfriendSH').get(loversController.showfriendSH);
myRouter.route('/showfriendLJ').get(loversController.showfriendLJ);
myRouter.route('/showfriendQD').get(loversController.showfriendQD);
myRouter.route('/showfriendBJ').get(loversController.showfriendBJ);
myRouter.route('/showfriendSY').get(loversController.showfriendSY);
myRouter.route('/showfamilyDali').get(loversController.showfamilyDali);
myRouter.route('/showfamilySH').get(loversController.showfamilySH);
myRouter.route('/showfamilyLJ').get(loversController.showfamilyLJ);
myRouter.route('/showfamilyQD').get(loversController.showfamilyQD);
myRouter.route('/showfamilyBJ').get(loversController.showfamilyBJ);
myRouter.route('/showfamilySY').get(loversController.showfamilySY);
//三级页面的渲染
myRouter.route('/showLoversDet').get(loversController.showLoversDet);
myRouter.route('/friendDetail').get(loversController.friendDetail);
myRouter.route('/submitloverOrder').get(loversController.submitloverOrder);
myRouter.route('/loadloverDetails').get(loversController.loadloverDetails);
//家庭照三级页面路由
myRouter.route('/showfamily_CD_Det').get(loversController.showfamily_CD_Det);
//导出模块
module.exports=myRouter;