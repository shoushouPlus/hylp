/**
 * Created by ASUS on 2018/12/5.
 */
var express=require('express');
var checkOrderController=require('./../controller/checkOrderController.js');
var checkOrderRoute=express.Router();
    checkOrderRoute.route('/waitForConsume').get(checkOrderController.waitForConsume);
    checkOrderRoute.route('/refreshConsume').get(checkOrderController.refreshConsume);
    checkOrderRoute.route('/refreshComment').get(checkOrderController.refreshComment);
    checkOrderRoute.route('/waitForComment').get(checkOrderController.waitForComment);
    checkOrderRoute.route('/addComment').get(checkOrderController.addComment);
module.exports=checkOrderRoute;