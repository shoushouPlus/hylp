/**
 * Created by ASUS on 2018/12/5.
 */
var mysql=require('mysql');
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'hy'
});
var bookModel={
  book:function (money,place,tel,date,fn) {
        var sql='INSERT INTO book VALUES(null,1,"'+money+'","'+place+'","'+tel+'","'+date+'");';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

}
module.exports=bookModel;
