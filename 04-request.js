const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);
  // url.parse() 可以将一个完整的URL地址分解为很多部分、
  // 第二个参数是 true，将解析为键值对
  const pathname = url.parse(req.url).pathname;
  const query = url.parse(req.url, true).query;
  console.log(pathname, query)
  res.end("End")
})

server.listen(3800, "127.0.0.1");