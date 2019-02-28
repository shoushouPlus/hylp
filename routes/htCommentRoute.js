/**
 * Created by ASUS on 2019/1/2.
 */
var express=require('express');
var htCommentController=require('./../controller/htCommentController.js');
var htCommentRoute=express.Router();
//comment部分
    htCommentRoute.route('/htCommentGetData').get(htCommentController.htCommentGetData);//分页获取数据
    htCommentRoute.route('/htCommentGetPage').get(htCommentController.htCommentGetPage);//获取总数据数
    htCommentRoute.route('/queryCommentByTel1').get(htCommentController.queryCommentByTel1);//按电话号码查询
    htCommentRoute.route('/queryCommentByMealName').get(htCommentController.queryCommentByMealName);//按套餐名查询
    htCommentRoute.route('/queryCommentByCommentDate').get(htCommentController.queryCommentByCommentDate);//按评论日期查询
    htCommentRoute.route('/queryCommentByPlace1').get(htCommentController.queryCommentByPlace1);//按拍摄地查询
    htCommentRoute.route('/queryCommentByType').get(htCommentController.queryCommentByType);

//order部分
    htCommentRoute.route('/getDataAll').get(htCommentController.getDataAll);
    htCommentRoute.route('/getOrderPage').get(htCommentController.getOrderPage);
    htCommentRoute.route('/getOrderCommentedData').get(htCommentController.getOrderCommentedData);
    htCommentRoute.route('/getCommentedPage').get(htCommentController.getCommentedPage);
    htCommentRoute.route('/getCommentData').get(htCommentController.getCommentData);
    htCommentRoute.route('/getCommentPage').get(htCommentController.getCommentPage);
    htCommentRoute.route('/getOrderConsumeData').get(htCommentController.getOrderConsumeData);
    htCommentRoute.route('/getConsumePage').get(htCommentController.getConsumePage);
    htCommentRoute.route('/deleteOrderConsume').get(htCommentController.deleteOrderConsume);







    htCommentRoute.route('/queryOrderByTel').get(htCommentController.queryOrderByTel);
    htCommentRoute.route('/queryOrderById').get(htCommentController.queryOrderById);
    htCommentRoute.route('/queryOrderByOrderDate').get(htCommentController.queryOrderByOrderDate);
    htCommentRoute.route('/queryOrderByPlace').get(htCommentController.queryOrderByPlace);



    htCommentRoute.route('/queryCommentedByTel').get(htCommentController.queryCommentedByTel);
    htCommentRoute.route('/queryCommentedById').get(htCommentController.queryCommentedById);
    htCommentRoute.route('/queryCommentedByOrderDate').get(htCommentController.queryCommentedByOrderDate);
    htCommentRoute.route('/queryCommentedByPlace').get(htCommentController.queryCommentedByPlace);



    htCommentRoute.route('/queryCommentByTel').get(htCommentController.queryCommentByTel);
    htCommentRoute.route('/queryCommentById').get(htCommentController.queryCommentById);
    htCommentRoute.route('/queryCommentByOrderDate').get(htCommentController.queryCommentByOrderDate);
    htCommentRoute.route('/queryCommentByPlace').get(htCommentController.queryCommentByPlace);


    htCommentRoute.route('/queryConsumeByTel').get(htCommentController.queryConsumeByTel);
    htCommentRoute.route('/queryConsumeById').get(htCommentController.queryConsumeById);
    htCommentRoute.route('/queryConsumeByOrderDate').get(htCommentController.queryConsumeByOrderDate);
    htCommentRoute.route('/queryConsumeByPlace').get(htCommentController.queryConsumeByPlace);




module.exports=htCommentRoute;