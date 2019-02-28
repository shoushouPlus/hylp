/**
 * Created by ASUS on 2018/12/5.
 */
var mysql=require('mysql');
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'hy'
});
var loversModel={
    showLoversPage:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=2 AND m_place="成都"';
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(data)
        })
    },
    showLoversSH:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=2 AND m_place="厦门"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversLJ:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=2 AND m_place="丽江"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversQD:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=2 AND m_place="青岛"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversBJ:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=2 AND m_place="北京"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversSY:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=2 AND m_place="三亚"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversDali:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=2 AND m_place="大理"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showLoversDet:function (data,fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id="'+data+'"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    //闺蜜照module层
    showfriendPage:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=3 and m_place="成都"';
        db.query(sql,function (err,data) {
            fn(err,data);

        })
    },
    showfriendDali:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=3 AND m_place="大理"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfriendSH:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=3 AND m_place="上海"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfriendLJ:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=3 AND m_place="丽江"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfriendQD:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=3 AND m_place="青岛"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfriendBJ:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=3 AND m_place="北京"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfriendSY:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=3 AND m_place="三亚"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    //家庭照module层
    showfamilyPage:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=4 and m_place="成都"';
        db.query(sql,function (err,data) {
            fn(err,data);

        })
    },
    showfamilyDali:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=4 AND m_place="大理"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfamilySH:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=4 AND m_place="上海"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfamilyLJ:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=4 AND m_place="丽江"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfamilyQD:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=4 AND m_place="青岛"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfamilyBJ:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=4 AND m_place="北京"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    showfamilySY:function (fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=4 AND m_place="三亚"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    submitloverOrder:function (m_id,sName,sSex,sPhone,sIdCard,sTotal,sRoom,sPlace,sTakenDate,sOrderDate,fn) {
        var sql = 'INSERT INTO order1 VALUES(NULL,"'+m_id+'",1,1,"'+sName+'","'+sSex+'","'+sPhone+'","'+sIdCard+'","'+sTotal+'","'+sRoom+'","'+sPlace+'","'+sTakenDate+'","'+sOrderDate+'");'
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(err)
        })
    },
    friendDetail:function (data,fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id="'+data+'"';
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(data)

        })
    },
    //家庭照三级页面module层
    showfamily_CD_Det:function (data,fn) {
        var sql='SELECT   *   FROM  mealdetails   WHERE  m_id="'+data+'"';
        db.query(sql,function (err,data) {
            fn(err,data);

        })
    },
    loadloverDetails:function (sId,fn) {
        var sql = 'SELECT * FROM mealDetails a JOIN mealinformation b WHERE a.m_id=b.m_id AND a.m_id="'+sId+'"';
        //console.log(sId);
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
}
module.exports=loversModel;