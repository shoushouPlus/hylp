var lpkpModel=require('../model/lpkpModel.js');
var lpkpController={
    show:function (req,res) {
        lpkpModel.show(req.query.tpye,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                 res.send({error:0,data:data})
            }
        })
    }
}
module.exports=lpkpController;