var mysql=require('mysql');
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'hy'
});

var lpkpModel={
    show:function (tpye,fn) {
        var sql='SELECT * FROM realphoto WHERE rp_tpye="'+tpye+'";';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    }
};
module.exports=lpkpModel;