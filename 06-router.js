const http = require("http")
const server = http.createServer(function(req, res) {
  const userurl = req.url

  res.writeHead(200, {"Content-Type": "text/html; charset=UTF8"})
  // "/student/1234567890"
  // "/teacher/123456"
  if (userurl.substr(0,9) === "/student/") {
    const studentId = userurl.substr(9)
    if (/^\d{10}$/.test(studentId)) {
      res.end("查询的学生信息Id---" + studentId)
    } else {
      res.end("Id不正确，查询失败")
    }
  } else if (userurl.substr(0,9) === "/teacher/") {
    const teacherId = userurl.substr(9)
    if (/^\d{6}$/.test(teacherId)) {
      res.end("查询的教师信息Id---" + teacherId)
    } else {
      res.end("Id不正确，查询失败")
    }
  } else {
    res.end("请检查URL")
  }
})

server.listen(3800, '127.0.0.1')