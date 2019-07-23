// http模块
const http = require("http");

// 创建一个服务器
const server = http.createServer((req, res) => {
  console.log("服务器接收到了请求" + req.url);
  // response.writeHead 向请求发送响应头。 状态码是一个 3 位的 HTTP 状态码，如 404。 最后一个参数 headers 是响应头。 可以可选地将用户可读的 statusMessage 作为第二个参数。
  // 只能在消息上调用一次，并且必须在调用 response.end() 之前调用
  res.writeHead(200, {"Content-Type": "text/html; charset=UTF8"})
  // 表明已发送所有响应头和主体，该服务器应该视为此消息已完成。 必须在每个响应上调用此 response.end() 方法
  res.end("<h1>End!!!</h1>");
})

server.listen(3800, "127.0.0.1");