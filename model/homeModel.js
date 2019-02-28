var mysql=require('mysql');
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'hy'
});

var homeModel={
    newOrder:function (fn) {
        var sql='SELECT COUNT(*) AS num FROM order1';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    newComment:function (fn) {
        var sql='SELECT COUNT(*) AS num FROM comment';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    newUser:function (fn) {
        var sql='SELECT COUNT(*) AS num FROM user';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    local:function (fn) {
        var sql='SELECT m_place,COUNT(0) AS num FROM mealinformation GROUP BY m_place HAVING COUNT(m_place) > 1';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    getLi:function (fn) {
        var sql='SELECT l_Sentence,l_id FROM sentence';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    addLi:function (m,fn) {
        var sql='INSERT INTO sentence VALUES(NULL,"'+m+'");';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    removeLi:function (id,fn) {
        var sql='DELETE FROM sentence WHERE l_id = '+id+'';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    userName:function (user2,pass2,fn) {
        var sql='SELECT * FROM staff WHERE s_phone="'+user2+'" AND s_password="'+pass2+'";';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    }

};









module.exports=homeModel;