const http = require("http")
const fs = require("fs")

// 体现事件环
const server = http.createServer(function(req, res){
  if(req.url === '/favicon.ico') return
  const userId = parseInt(Math.random() * 899999 + 100000)
  console.log("Welcome--->" + userId)
  res.writeHead(200, {"Content-Type":"text/html;charset=UTF-8"})
  fs.readFile("./07.txt", function(err, data){
    if(err) {
      throw err
    }
    console.log(userId + "--->success")
    res.end(data)
  })
})

server.listen(3800, "127.0.0.1")