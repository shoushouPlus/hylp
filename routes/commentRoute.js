/**
 * Created by ASUS on 2018/12/5.
 */
var express=require('express');
var commentController=require('./../controller/commentController.js');
//获取第？页的数据
var commentRoute=express.Router();
commentRoute.route('/weddingGetData').get(commentController.weddingGetData);
commentRoute.route('/friendGetData').get(commentController.friendGetData);
commentRoute.route('/familyGetData').get(commentController.familyGetData);
commentRoute.route('/loverGetData').get(commentController.loverGetData);
//获取各个类别的页数
commentRoute.route('/weddingGetPage').get(commentController.weddingGetPage);
commentRoute.route('/friendGetPage').get(commentController.friendGetPage);
commentRoute.route('/familyGetPage').get(commentController.familyGetPage);
commentRoute.route('/loverGetPage').get(commentController.loverGetPage);


module.exports=commentRoute;