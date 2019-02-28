//引入mysql
var mysql = require('mysql');

//连接数据库
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hy'
});


var  weddingModel = {

    //对二级页面进行数据渲染
    showWeddingPage:function (fn) {
        var sql = 'SELECT * FROM mealinformation where m_hot=1';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    //点击地方按钮，显示对应套餐
    getData:function (sPlace,fn) {
        //console.log(sPlace);
        var sql = 'SELECT * FROM mealinformation WHERE m_place="'+sPlace+'" and c_id=1';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    //点击了解更多，跳转到详情页面，获取相对应套餐的数据
    loadWeddingDetails:function (sId,fn) {
        var sql = 'SELECT * FROM mealDetails a JOIN mealinformation b WHERE a.m_id=b.m_id AND a.m_id="'+sId+'"';

        //console.log(sId);
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },


    submitWeddingOrder:function (m_id,sName,sSex,sPhone,sIdCard,sTotal,sRoom,sPlace,sTakenDate,sOrderDate,fn) {
         var sql = 'INSERT INTO order1 VALUES(NULL,"'+m_id+'",1,1,"'+sName+'","'+sSex+'","'+sPhone+'","'+sIdCard+'","'+sTotal+'","'+sRoom+'","'+sPlace+'","'+sTakenDate+'","'+sOrderDate+'");'
         db.query(sql,function (err,data) {
             fn(err,data);
         })
    },

    loadOrderMsg:function (sId,fn) {
        var sql = 'select * from order1 where m_id="'+sId+'"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    //获取后台管理系统需要的婚纱套餐的信息
    getWeddingData:function (page,fn) {
        let n=(page - 1) * 7;
        var sql = 'SELECT * FROM mealinformation  WHERE c_id=1 ORDER BY m_id DESC LIMIT 7 OFFSET '+n+'';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    getStaffData:function (page,fn) {
        let n=(page - 1) * 7;
        var sql = 'SELECT * FROM staff ORDER BY s_id DESC LIMIT 7 OFFSET '+n+'';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    addWeddingMeal:function (mealNumber,bigTitle,title,niceWords,nowPrice,oldPrice,subscription,imgUrl,place,fn) {
        var sql = 'INSERT INTO mealInformation VALUES(NULL,1,"'+mealNumber+'","'+bigTitle+'","'+title+'","'+niceWords+'","'+nowPrice+'","'+oldPrice+'","'+subscription+'","'+imgUrl+'",NULL,"'+place+'",NULL,NULL)';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    
    addWeddingDeatils:function (id,des1,des2,des3,img1,img2,img3,img4,description,fn) {
        var sql = 'INSERT INTO  mealdetails VALUES(NULL,'+id+',"'+des1+'","'+des2+'","'+des3+'","'+img1+'","'+img2+'","'+img3+'","'+img4+'","'+description+'")';
        console.log(sql);
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    //新增员工
    addStaff:function (name,phone,password,age,birthday,idCard,urgencyPhone,address,fn) {
        var sql = 'INSERT INTO staff VALUES(NULL,"'+name+'","'+phone+'","'+password+'","'+age+'","'+birthday+'","'+idCard+'","'+urgencyPhone+'","'+address+'")';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    //删除员工
    removeStaff:function (id,fn) {
        var sql = 'DELETE  FROM staff WHERE s_id = "'+id+'"';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    //删除婚纱套系
    removeWeddingMeal:function (id,fn) {
        var sql = 'DELETE  FROM mealinformation WHERE m_id = "'+id+'"';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    //编辑员工信息
    sureEditStaff:function (s_phone,s_password,s_urgencyPhone,s_address,s_id,fn) {
        var sql = 'UPDATE staff SET s_phone="'+s_phone+'",s_password="'+s_password+'",s_urgencyPhone="'+s_urgencyPhone+'",s_address="'+s_address+'"  WHERE s_id ="'+s_id+'"';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    //编辑婚纱套餐信息
    editWeddingMeal:function (m_bigTitle,m_Title,m_niceWords,m_oldPrice,m_nowPrice,m_subscription,m_id,fn) {
        var sql = 'UPDATE mealinformation SET m_bigTitle="'+m_bigTitle+'",m_Title="'+m_Title+'",m_niceWords="'+m_niceWords+'", m_oldPrice="'+m_oldPrice+'",m_nowPrice="'+m_nowPrice+'",m_subscription="'+m_subscription+'" WHERE m_id ="'+m_id+'"';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },


    getPage:function (fn) {
        var sql = 'SELECT * FROM mealinformation WHERE c_id=1;';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    getStaffPage:function (fn) {
        var sql = 'SELECT * FROM staff';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },


    searchOrder:function (data,way,page,fn) {
        let n=(page - 1) * 7;
        if (way == "m_mealNumber"){
            var sql = 'SELECT * FROM mealinformation  WHERE m_mealNumber LIKE "%'+data+'%" AND c_id=1 ORDER BY m_id DESC LIMIT 7 OFFSET '+n+';';
        }else if (way == "m_Title"){
            var sql = 'SELECT * FROM mealinformation  WHERE m_Title LIKE "%'+data+'%" AND c_id=1 ORDER BY m_id DESC LIMIT 7 OFFSET '+n+';';
        }else {
            var sql = 'SELECT * FROM mealinformation  WHERE m_place LIKE "%'+data+'%" AND c_id=1 ORDER BY m_id DESC LIMIT 7 OFFSET '+n+';';
        }
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    searchStaff:function (data,way,page,fn) {
        let n=(page - 1) * 7;
        if (way == "s_id"){
            var sql = 'SELECT * FROM staff  WHERE s_id LIKE "%'+data+'%" ORDER BY s_id DESC LIMIT 7 OFFSET '+n+';';
        }else if (way == "s_name"){
            var sql = 'SELECT * FROM staff  WHERE s_name LIKE "%'+data+'%" ORDER BY s_id DESC LIMIT 7 OFFSET '+n+';';
        }else {
            var sql = 'SELECT * FROM staff  WHERE s_phone LIKE "%'+data+'%" ORDER BY s_id DESC LIMIT 7 OFFSET '+n+';';
        }
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },


    getSearchPage:function (data,txt,fn) {
        if (txt == "m_mealNumber"){
            var sql = 'SELECT * FROM mealinformation  WHERE m_mealNumber LIKE "%'+data+'%" AND c_id=1 ;';
        }else if (txt == "m_Title"){
            var sql = 'SELECT * FROM mealinformation  WHERE m_Title LIKE "%'+data+'%" AND c_id=1 ;';
        }else {
            var sql = 'SELECT * FROM mealinformation  WHERE m_place LIKE "%'+data+'%" AND c_id=1 ;';
        }
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
};




module.exports =weddingModel;