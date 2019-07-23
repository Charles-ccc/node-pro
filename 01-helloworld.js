const http = require("http");
// 创建服务器
const server = http.createServer((req, res) => {
  // 设置HTTP头部
  res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
  res.end("this is my first")
});

server.listen(3800, "127.0.0.1");