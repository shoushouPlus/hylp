var express=require('express');
var myRouter=express.Router();
var phoneCodeController=require('./../controller/phoneCodeController.js')
myRouter.route('/phone').get(phoneCodeController.code);
myRouter.route('/phonelogn').get(phoneCodeController.logncode);
myRouter.route('/addphone').get(phoneCodeController.add);
myRouter.route('/adduser').get(phoneCodeController.adduser);
myRouter.route('/userName').get(phoneCodeController.login);
myRouter.route('/ball').get(phoneCodeController.session);
myRouter.route('/exit').get(phoneCodeController.exit);
//导出模块
module.exports=myRouter;