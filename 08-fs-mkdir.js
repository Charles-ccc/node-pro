const http = require("http")

const fs = require("fs")

const server = http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type":"text/html;charset=UTF-8"})

  if(req.url === "/favicon.ico") return
  // 需要提前 08-album 文件夹
  fs.mkdir("./08-album/photo",function(err){
    console.log(err)
  })
  res.end("success")
})

server.listen(3800, "127.0.0.1")