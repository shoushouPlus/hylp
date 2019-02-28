/**
 * Created by ASUS on 2019/1/2.
 */
var mysql=require('mysql');
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'hy'
});

var otherMealModel={
    //获取数据
    otherMeal:function (page,fn) {
        var sql='SELECT   *   FROM  mealInformation   WHERE  c_id=2 or c_id=3 or c_id=4';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    //获取数据条数
    getCount:function (fn) {
        var sql='SELECT COUNT(*) num FROM mealInformation WHERE  c_id=2 or c_id=3 or c_id=4 ;';
        db.query(sql,function (err,data) {
            fn(err,data);
        })

    },
    //查询的model层
    othSelect:function (content,content1,fn) {
        var sql=`SELECT   *   FROM  mealInformation   WHERE   m_Title  like '%${content}%' and   m_place  like '%${content1}%' and m_id!=1`
            db.query(sql,function (err,data) {
            fn(err,data);
            })
    },
    //下架套餐
    othDelete:function (gid,fn) {
        var sql=`delete   FROM  mealInformation   WHERE   m_id='${gid}'`
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    //编辑套餐
    showOthEdit:function (gid,fn) {
        var sql=`select  *  FROM  mealInformation   WHERE   m_id='${gid}'`
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(data)
            console.log(sql)
            console.log('成功')
        })
    },
    //保存修改
    showOthSave:function (EditInputId,EditInputTitle,EditInputMealPrice,EditInputPrice,EditInputPhoto,EditInputPlace,fn) {
        var sql='update  mealInformation     set  m_Title="'+EditInputTitle+'" ,m_subscription="'+EditInputMealPrice+'" ,m_nowPrice="'+EditInputPrice+'",m_imageUrl="'+EditInputPhoto+'",m_place="'+EditInputPlace+'" where  m_id="'+EditInputId+'"'
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(sql)
            console.log('成功')
        })
    },
   //新增套餐
    showOthAdd:function (AddInputId,AddInputWord,AddInputTitle,AddInputMealPrice,AddInputPrice,AddInputPhoto,AddPlace,fn) {
        var sql='insert into mealInformation values(null,"'+AddInputId+'",null,null,"'+AddInputTitle+'","'+AddInputWord+'","'+AddInputMealPrice+'",null,"'+AddInputPrice+'","'+AddInputPhoto+'",null,"'+AddPlace+'",null,null)'
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(sql)
            console.log('成功')
        })
    },
   //新增套餐详情
    othAddDetail:function (intro1,intro2,intro3,Scenic,AddId,AddInputPhoto1,AddInputPhoto2,AddInputPhoto3,AddInputPhoto4,fn) {
        var sql='insert into mealdetails values(null,"'+AddId+'","'+intro1+'","'+intro2+'","'+intro3+'","'+AddInputPhoto1+'","'+AddInputPhoto2+'","'+AddInputPhoto3+'","'+AddInputPhoto4+'","'+Scenic+'")'
        db.query(sql,function (err,data) {
            fn(err,data);
            console.log(sql)
            console.log('成功')
        })
    },
};
module.exports=otherMealModel;