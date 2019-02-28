//-------------文件上传的公共文件--------------//

var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {    //指定硬盘的路径，即文件保存的地方
        cb(null, './public/image/wedding');
    },
    filename: function (req, file, cb) {   //指定上传后的文件名和扩展名
        var arr = file.originalname.split('.');
        cb(null, arr[0]+'.'+arr[1]);
    }
})

var upload = multer({ storage: storage });

module.exports = upload;
