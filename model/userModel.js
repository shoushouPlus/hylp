var mysql=require('mysql');
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'hy'
});

let userModel = {
    show: function (data, fn) {
        let sql = 'SELECT * FROM user where u_id = ' + data.userId;
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    getUserCount: function (fn) {
        let sql = 'SELECT COUNT(*) AS num FROM USER';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    getUserData2: function (page,fn) {
        let sql = 'SELECT u_username,u_phone,u_province,u_sex,u_city,u_userSpeak FROM USER';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    bin:function (userid,fn) {
        let sql = 'SELECT * FROM USER WHERE u_id="'+userid+'"';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },



    changeUser:function (id,name,phone,sign,sex,province,city,fn) {
        let sql = ' UPDATE USER SET u_sex="'+sex+'" ,u_username="'+name+'" ,u_province="'+province+'" ,u_city="'+city+'",u_userSpeak="'+sign+'",u_phone="'+phone+'" WHERE u_id='+id+'';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },




    bin1:function (userid,fn) {

        let sql = 'UPDATE t_student SET student_age=21 WHERE u_id='+userid+';';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    queryCustomer:function (name,fn) {
        let sql='SELECT  u_username,u_phone,u_province,u_sex,u_city,u_userSpeak FROM USER WHERE u_username="'+name+'"';
        db.query(sql,function (err,data) {
            fn(err,data)
        })

    }
    ,
    queryCustomer1:function (Phone,fn) {
        let sql='SELECT  u_username,u_phone,u_province,u_sex,u_city,u_userSpeak FROM USER WHERE u_phone="'+Phone+'"';
        db.query(sql,function (err,data) {
            fn(err,data)
        })

    },
    upload1:function (userid,aaa,fn) {
        let sql='UPDATE USER SET u_headPhoto="'+aaa+'" WHERE u_id='+userid+';'
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
};
module.exports=userModel;