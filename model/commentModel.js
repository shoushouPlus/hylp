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
var commentModel={
    weddingGetData:function (page, fn) {
        var sql=`SELECT cm_id, m_title,cm_content,cm_img1, cm_img2, cm_img3, m_place ,u_username ,cm_date
FROM COMMENT,mealInformation,USER,order1,category
WHERE comment.o_id=order1.o_id AND order1.m_id=mealInformation.m_id AND mealInformation.c_id=category.c_id AND order1.u_id=user.u_id AND mealInformation.c_id=1
ORDER BY COMMENT.cm_id DESC`;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    friendGetData:function (page, fn) {
        var sql=`SELECT cm_id, m_title,cm_content,cm_img1, cm_img2, cm_img3, m_place ,u_username ,cm_date
FROM COMMENT,mealInformation,USER,order1,category
WHERE comment.o_id=order1.o_id AND order1.m_id=mealInformation.m_id AND mealInformation.c_id=category.c_id AND order1.u_id=user.u_id AND mealInformation.c_id=2
ORDER BY COMMENT.cm_id DESC`;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    familyGetData:function (page, fn) {
        var sql=`SELECT cm_id, m_title,cm_content,cm_img1, cm_img2, cm_img3, m_place ,u_username ,cm_date
FROM COMMENT,mealInformation,USER,order1,category
WHERE comment.o_id=order1.o_id AND order1.m_id=mealInformation.m_id AND mealInformation.c_id=category.c_id AND order1.u_id=user.u_id AND mealInformation.c_id=3
ORDER BY COMMENT.cm_id DESC`;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    loverGetData:function (page, fn) {
        var sql=`SELECT cm_id, m_title,cm_content,cm_img1, cm_img2, cm_img3, m_place ,u_username ,cm_date
FROM COMMENT,mealInformation,USER,order1,category
WHERE comment.o_id=order1.o_id AND order1.m_id=mealInformation.m_id AND mealInformation.c_id=category.c_id AND order1.u_id=user.u_id AND mealInformation.c_id=4
ORDER BY COMMENT.cm_id DESC`;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    weddingGetPage:function (fn) {
        var sql=`SELECT COUNT(*) num
        FROM COMMENT , order1,mealinformation,category
        WHERE comment.o_id=order1.o_id AND order1.m_id = mealinformation.m_id AND mealinformation.c_id=category.c_id AND mealinformation.c_id=1`;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    friendGetPage:function (fn) {
        var sql=`SELECT COUNT(*) num
        FROM COMMENT , order1,mealinformation,category
        WHERE comment.o_id=order1.o_id AND order1.m_id = mealinformation.m_id AND mealinformation.c_id=category.c_id AND mealinformation.c_id=2`;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    familyGetPage:function (fn) {
        var sql=`SELECT COUNT(*) num
        FROM COMMENT , order1,mealinformation,category
        WHERE comment.o_id=order1.o_id AND order1.m_id = mealinformation.m_id AND mealinformation.c_id=category.c_id AND mealinformation.c_id=3`;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    loverGetPage:function (fn) {
        var sql=`SELECT COUNT(*) num
        FROM COMMENT , order1,mealinformation,category
        WHERE comment.o_id=order1.o_id AND order1.m_id = mealinformation.m_id AND mealinformation.c_id=category.c_id AND mealinformation.c_id=4`;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    }
}
module.exports=commentModel;
