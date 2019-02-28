// 初始化框架                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  -0\
var express = require('express');
var servers = express();

var morgan = require('morgan');
var bodyParser = require('body-parser');

// 导入 cookie 和 session 模块
var cookie = require('cookie-parser');
var session = require('express-session');

// parse various different custom JSON types as JSON
servers.use(bodyParser.json({type: 'application/*+json'}));

// parse some custom thing into a Buffer
servers.use(bodyParser.raw({type: 'application/vnd.custom-type'}));

// parse an HTML body into a string
servers.use(bodyParser.text({type: 'text/html'}));
// parse application/x-www-form-urlencoded
servers.use(bodyParser.urlencoded({ extended: false }))

// var  loginRoute=require('./routes/loginRoute');
// 引入路由文件设置路由
var loversRoute = require('./routes/loversRoute');
var weddingRoute = require('./routes/weddingRoute');
var phoneCode = require('./routes/phoneCode.js');
var indexRoute = require('./routes/indexRoutes.js');
var bookRoute = require('./routes/bookRoute');
var lpkpRoute = require('./routes/lpkpRoute');
var upload = require('./routes/upload.js');
var commentRoute = require('./routes/commentRoute.js');
var checkOrderRoute = require('./routes/checkOrderRoute.js');
var home = require('./routes/home.js');
var htCommentRoute=require('./routes/htCommentRoute.js');

// var users = require('./routes/userRoute.js');
var otherMealRoute=require('./routes/otherMealRoute.js');
var multer=require('./Othutils/multer.js');
var userRoute=require('./routes/userRoute.js')

//手机短信验证
var AV = require('leanengine');
//websocket


//一堆配置
//配置cookie
servers.use(cookie());
//配置session
servers.use(session({
    secret: 'aaa',    //一个字符串，session的签名
    cookie: {maxAge: 8000000}, //设置失效时间  单位是毫秒
    resave: false,  //重新保存
    saveUninitialized: false
}));
//配置静态文件访问地址
servers.use(express.static('public'));
//配置日志
servers.use(morgan('dev'));
//路由拦截

servers.use(bodyParser.json());//定义数据类型为JSON格式
servers.use(bodyParser.urlencoded({
    extended: false
}));//把请求头设置为application/x-www-form-urlencoded
//使用模块
// servers.use(loginRoute);
servers.use(weddingRoute);
servers.use(loversRoute);
servers.use(bookRoute);
servers.use(indexRoute);
servers.use(lpkpRoute);
servers.use(commentRoute);
servers.use(home);
servers.use(checkOrderRoute);
servers.use(htCommentRoute);
servers.use(otherMealRoute);
servers.use(userRoute);
//刘小威
var multer=require('./Othutils/multer.js');
servers.post('/OthUpload2',multer.array('file',4),function (req,res) {
    console.log(req.file);
    console.log('执行');
    res.send({error:0});
});
//徐藜玮
var perMulter=require('./perUtils/multer.js');
servers.post('/Perupload',perMulter.single('files'),function (req,res) {
    console.log(111);
    res.send({error:0});
});

/*乐乐*/
servers.post('/comupload', upload.array('files', 3), function (req, res) {
    // console.log(req)
    res.send({error: 0});
});

// huxi
var multer = require('./utils/multer');

servers.post('/upload',multer.array('file',3),function (req,res) {
    // console.log(req)
    res.send({error:0});
});


servers.get('/getmsg', function (req, res) {
    res.send({"err": 0, "data": [1, 2, 3, 4, 5,]})
});
servers.post('/postmsg', function (req, res) {
    res.send({"err": 0, "data": [1, 2, 3, 4, 5,]})
});

servers.use(AV.express());
servers.use(phoneCode);
// servers.use('/users', users);

//配置端口号
servers.listen(8084, function () {
    console.log('项目启动');
});
var ws=require('ws').Server;

var sever=new ws({host:'172.16.8.27',port:5555})
var arr=new Array();

sever.on('connection',function (ws) {

    console.log('有人来了');
    // var json={
    //     ws,
    //     identity:''
    // }
    arr.push(ws);


    ws.on('message',function (data) {

            for(let i=0;i<arr.length;i++){
                arr[i].send(data)
            }


    })
    ws.on('close',function () {
        for(var i=0;i<arr.length;i++){
            if(arr[i]==ws){
                arr.splice(i,1);
                break;
            }
        }
    })
})

