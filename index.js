const express = require('express');
 
// 创建web服务器
const app = express();
 
// 指定启动服务器到哪个文件夹
app.use(express.static('./app'));
 
// 启动服务器监听80端口
app.listen(80, () => {
    console.log('web server running at http://127.0.0.1');
})