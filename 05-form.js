const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  // 解决乱码问题
  res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
  const queryObj = url.parse(req.url, true).query;
  const name = queryObj.name;
  const age = queryObj.age;
  const work = queryObj.work;
  res.end('Has get ~' + name + age + work)
})

server.listen(3800, "127.0.0.1");