const http = require("http");
const fs = require("fs");
// 创建服务器
const server = http.createServer((req, res) => {
  if (req.url == "/fang") {
    fs.readFile("./02-fang.html", "UTF-8", function(err, data) {
      // 设置HTTP头部
      res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
      if (err) console.error(err)
      res.end(data);
    });
  } else if (req.url == "/yuan") {
    fs.readFile("./02-yuan.html", "UTF-8", function(err, data) {
      // 设置HTTP头部
      res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
      if (err) console.error(err)
      res.end(data);
    });
  }  else if (req.url == "/01.jpg") {
    fs.readFile("./01.jpg", function(err, data) {
      // 设置HTTP头部
      res.writeHead(200, {"Content-type": "image/jpg"});
      if (err) console.error(err)
      res.end(data);
    });
  } else {
    res.writeHead(404, {"Content-type": "text/html;charset=UTF-8"});
    res.end("错误了哦")
  }
});

server.listen(3800, "127.0.0.1");

// nodejs 没有容器的概念