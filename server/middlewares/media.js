const multipart = require('connect-multiparty');


const multipartMiddleware = multipart({uploadDir: './uploads'});


