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
var htCommentModel={
//comment部分

    //获取某页的数据
    htCommentGetData:function (page,fn) {
        var sql=`SELECT comment.cm_id,order1.o_phone,comment.cm_content,category.c_name,mealinformation.m_title,mealinformation.m_place,comment.cm_date,comment.cm_img1,comment.cm_img2,comment.cm_img3
FROM COMMENT,order1,mealinformation,category
WHERE comment.o_id=order1.o_id AND order1.m_id=mealinformation.m_id AND mealinformation.c_id=category.c_id
ORDER BY COMMENT.cm_id DESC`;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    //获取数据总条数
    htCommentGetPage:function (fn) {
        var sql=`SELECT COUNT(*) AS num
FROM COMMENT`;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    //通过电话号码查询
    queryCommentByTel1:function (msg,fn) {
        var sql=`SELECT comment.cm_id,order1.o_phone,comment.cm_content,category.c_name,mealinformation.m_title,mealinformation.m_place,comment.cm_date,comment.cm_img1,comment.cm_img2,comment.cm_img3
FROM COMMENT,order1,mealinformation,category
WHERE comment.o_id=order1.o_id AND order1.m_id=mealinformation.m_id AND mealinformation.c_id=category.c_id AND order1.o_phone LIKE '%${msg}%'
ORDER BY COMMENT.cm_id DESC `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    //通过套餐名查询
    queryCommentByMealName:function (msg,fn) {
        var sql=`SELECT comment.cm_id,order1.o_phone,comment.cm_content,category.c_name,mealinformation.m_title,mealinformation.m_place,comment.cm_date,comment.cm_img1,comment.cm_img2,comment.cm_img3
FROM COMMENT,order1,mealinformation,category
WHERE comment.o_id=order1.o_id AND order1.m_id=mealinformation.m_id AND mealinformation.c_id=category.c_id AND mealinformation.m_title LIKE '%${msg}%'
ORDER BY COMMENT.cm_id DESC  `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    //通过评论日期查询
    queryCommentByCommentDate:function (msg,fn) {
        var sql=`SELECT comment.cm_id,order1.o_phone,comment.cm_content,category.c_name,mealinformation.m_title,mealinformation.m_place,comment.cm_date,comment.cm_img1,comment.cm_img2,comment.cm_img3
FROM COMMENT,order1,mealinformation,category
WHERE comment.o_id=order1.o_id AND order1.m_id=mealinformation.m_id AND mealinformation.c_id=category.c_id AND comment.cm_date LIKE '%${msg}%'
ORDER BY COMMENT.cm_id DESC  `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    //通过拍摄地查询
    queryCommentByPlace1:function (msg,fn) {
        var sql=`SELECT comment.cm_id,order1.o_phone,comment.cm_content,category.c_name,mealinformation.m_title,mealinformation.m_place,comment.cm_date,comment.cm_img1,comment.cm_img2,comment.cm_img3
FROM COMMENT,order1,mealinformation,category
WHERE comment.o_id=order1.o_id AND order1.m_id=mealinformation.m_id AND mealinformation.c_id=category.c_id AND mealinformation.m_place LIKE '%${msg}%'
ORDER BY COMMENT.cm_id DESC  `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    queryCommentByType:function (msg,fn) {
        var sql=`SELECT comment.cm_id,order1.o_phone,comment.cm_content,category.c_name,mealinformation.m_title,mealinformation.m_place,comment.cm_date,comment.cm_img1,comment.cm_img2,comment.cm_img3
FROM COMMENT,order1,mealinformation,category
WHERE comment.o_id=order1.o_id AND order1.m_id=mealinformation.m_id AND mealinformation.c_id=category.c_id AND category.c_name LIKE '%${msg}%'
ORDER BY COMMENT.cm_id DESC  `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },


//order部分
    getDataAll:function (page,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id`;
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    getOrderPage:function (fn) {
        var sql=`SELECT COUNT(*) AS num
FROM order1`;
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    getOrderCommentedData:function (page,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND orderstate.os_id=3`;
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    getCommentedPage:function (fn) {
        var sql=`SELECT COUNT(*) AS num
FROM order1
WHERE order1.os_id=3`;
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    getCommentData:function (page,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND orderstate.os_id=2`;
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    getCommentPage:function (fn) {
        var sql=`SELECT COUNT(*) AS num
FROM order1
WHERE order1.os_id=2`;
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    getOrderConsumeData:function (page,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND orderstate.os_id=1`;
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    getConsumePage:function (fn) {
        var sql=`SELECT COUNT(*) AS num
FROM order1
WHERE order1.os_id=1`;
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    deleteOrderConsume:function (oid,fn) {
        var sql=`DELETE  FROM order1
WHERE  o_id=${oid};`;
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },


    queryOrderByTel:function (msg,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND order1.o_phone LIKE '%${msg}%' 
ORDER BY order1.o_id DESC `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    queryOrderById:function (msg,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND order1.o_id= ${msg}
ORDER BY order1.o_id DESC  `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    queryOrderByOrderDate:function (msg,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND order1.o_orderDate LIKE  '%${msg}%'
ORDER BY order1.o_id DESC `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    queryOrderByPlace:function (msg,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND mealinformation.m_place LIKE  '%${msg}%'
ORDER BY order1.o_id DESC `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },


    queryCommentedByTel:function (msg,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND order1.o_phone LIKE '%${msg}%' AND orderstate.os_id=3
ORDER BY order1.o_id DESC `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    queryCommentedById:function (msg,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND order1.o_id= ${msg} AND orderstate.os_id=3
ORDER BY order1.o_id DESC `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    queryCommentedByOrderDate:function (msg,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND order1.o_orderDate LIKE  '%${msg}%' AND orderstate.os_id=3
ORDER BY order1.o_id DESC `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    queryCommentedByPlace:function (msg,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND mealinformation.m_place LIKE  '%${msg}%' AND orderstate.os_id=3
ORDER BY order1.o_id DESC `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },


    queryCommentByTel:function (msg,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND order1.o_phone LIKE '%${msg}%' AND orderstate.os_id=2
ORDER BY order1.o_id DESC `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    queryCommentById:function (msg,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND order1.o_id= ${msg} AND orderstate.os_id=2
ORDER BY order1.o_id DESC `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    queryCommentByOrderDate:function (msg,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND order1.o_orderDate LIKE  '%${msg}%' AND orderstate.os_id=2
ORDER BY order1.o_id DESC `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    queryCommentByPlace:function (msg,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND mealinformation.m_place LIKE  '%${msg}%' AND orderstate.os_id=2
ORDER BY order1.o_id DESC `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },



    queryConsumeByTel:function (msg,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND order1.o_phone LIKE '%${msg}%' AND orderstate.os_id=1
ORDER BY order1.o_id DESC `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    queryConsumeById:function (msg,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND order1.o_id= ${msg} AND orderstate.os_id=1
ORDER BY order1.o_id DESC `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    queryConsumeByOrderDate:function (msg,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND order1.o_orderDate LIKE  '%${msg}%' AND orderstate.os_id=1
ORDER BY order1.o_id DESC `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    queryConsumeByPlace:function (msg,fn) {
        var sql=`SELECT order1.o_id,mealinformation.m_title,mealinformation.m_place,order1.o_orderDate,order1.o_startDate,orderstate.os_name,mealinformation.m_nowPrice,mealinformation.m_subscription,order1.o_phone
FROM order1,orderstate,mealinformation
WHERE order1.m_id=mealinformation.m_id AND order1.os_id=orderstate.os_id AND mealinformation.m_place LIKE  '%${msg}%' AND orderstate.os_id=1
ORDER BY order1.o_id DESC `;
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },



}
module.exports=htCommentModel;


