var indexModel=require('./../model/indexModel.js');


var indexController={
     img:function (res,req) {
         indexModel.img(function (err,data) {
             if(err){
                 console.log(err)
             }else {
                req.send(data)
             }
         })
     }

};

module.exports=indexController;


// if(err.a){
//     $('select').append('<option>${err.a}</option>')
// }else {
//     $('select').append('<option>--请输入地址--</option>')
// }