var express = require('express');
let userController = require('../controller/userController');

let userRoute = express.Router();

// 用户首页信息
// userRoute.route('/user/index').get(userController.index);
userRoute.route('/getUserCount').get(userController.getUserCount);
userRoute.route('/getUserData2').get(userController.getUserData2);
userRoute.route('/bin').get(userController.bin);
userRoute.route('/bin1').get(userController.bin1);
userRoute.route('/queryCustomer').get(userController.queryCustomer);
userRoute.route('/queryCustomer1').get(userController.queryCustomer1);
userRoute.route('/upload1').post(userController.upload1);
userRoute.route('/changeUser').get(userController.changeUser);

module.exports = userRoute;