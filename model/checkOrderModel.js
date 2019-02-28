/**
 * Created by ASUS on 2018/12/5.
 */
var mysql=require('mysql');
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'hy'
})
var checkOrderModel={
    waitForConsume:function (uId, fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.m_id,mealinformation.m_imageUrl,order1.o_orderDate
FROM order1,mealinformation,orderstate,USER
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND order1.u_id=user.u_id AND order1.u_id=${uId} AND order1.os_id=1`;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    refreshConsume:function (oId, fn) {
        var sql=`UPDATE order1 SET os_id=2 WHERE o_id=${oId}`;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    refreshComment:function (oId, fn) {
        var sql=`UPDATE order1 SET os_id=3 WHERE o_id=${oId}`;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    waitForComment:function (uId,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.m_id,mealinformation.m_imageUrl,order1.o_orderDate
FROM order1,mealinformation,orderstate,USER
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND order1.u_id=user.u_id AND order1.u_id=${uId} AND order1.os_id=2`;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    addComment:function (word,img1,img2,img3,date,oId,uId,mId,fn) {
        var sql=`INSERT INTO COMMENT VALUES(null,${uId},${mId},${oId},'${word}','${img1}','${img2}','${img3}','${date}')`;
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    }
}
module.exports=checkOrderModel;
