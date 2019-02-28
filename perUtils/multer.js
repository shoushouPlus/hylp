var multer=require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) { //指定硬盘的路径，文件保存的地方
        cb(null, './public/image/Perupload')
    },
    filename: function (req, file, cb) {//指定文件名和拓展名
        var arr=file.originalname.split('.');
        cb(null, arr[0] + '.' + arr[1]);
    }
});

var upload = multer({ storage: storage });

module.exports=upload;