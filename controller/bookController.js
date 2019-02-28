/**
 * Created by ASUS on 2018/12/7.
 */
/**
 * Created by ASUS on 2018/12/5.
 */
var bookModel=require('../model/bookModel.js');
var bookController={
    book:function (req,res) {
        bookModel.book(req.query.money,req.query.place,req.query.tel,req.query.date,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,id:data.insertId})

            }
        })
    },


}
module.exports=bookController;