var express=require('express');
var homeController=require('../controller/homeController.js');
//定义的模块
var myRouter=express.Router();


myRouter.route('/newOrder').get(homeController.newOrder);
myRouter.route('/newComment').get(homeController.newComment);
myRouter.route('/newUser').get(homeController.newUser);
myRouter.route('/local').get(homeController.local);
myRouter.route('/getLi').get(homeController.getLi);
myRouter.route('/addLi').get(homeController.addLi);
myRouter.route('/removeLi').get(homeController.removeLi);
myRouter.route('/Loginuser').get(homeController.userNamejoin);











module.exports=myRouter;