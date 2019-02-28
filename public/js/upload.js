var multer=require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/image/comment_img')
    },
    // filename: function (req, file, cb) {
    //     var arr=file.originalname.split('.');
    //     cb(null, arr[0] + '-' + Date.now() + '.' + arr[1]);
    // },

    filename: function (req, file, cb) {
        var arr=file.originalname.split('.');
        cb(null,arr[0]+ '.' +arr[1]);  //arr[0] + '-' + Date.now() + '.' +
    }
});

var upload = multer({ storage: storage });
module.exports=upload;
