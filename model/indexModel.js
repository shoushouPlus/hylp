var mysql=require('mysql');

var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'hy'
});


var indexModel={
    login:function (user,pass,fn) {

        var sql='SELECT * FROM t_user WHERE t_name="'+user+'" AND t_pass="'+pass+'";';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    register:function (user,fn) {
        var sql1='SELECT * FROM t_user WHERE t_name="'+user+'";';
        db.query(sql1,function (err,data) {
            fn(err,data)
        })
    },
    add:function (phone,fn) {
        var sql='INSERT INTO USER VALUES(NULL,NULL,NULL,NULL,"'+phone+'",NULL,NULL,NULL,NULL)'
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    adduser:function (user,pass,fn) {
        var sql='INSERT INTO USER VALUES(NULL,NULL,NULL,"'+pass+'","'+user+'",NULL,NULL,NULL,NULL)'
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    login:function (user,pass,fn) {

        var sql='SELECT * FROM user WHERE u_phone='+user+' AND u_password="'+pass+'";';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    img:function (fn) {
        var sql='SELECT * FROM realphoto where rp_id=9 or rp_id=10 or rp_id=11 or rp_id=12 or rp_id=13 or rp_id=14 or rp_id=15 or rp_id=58 ';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    session:function (user,fn) {
        var sql='SELECT * FROM user WHERE u_id="'+user+'"';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    }
}
;





module.exports=indexModel;