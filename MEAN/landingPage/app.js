var http = require("http");
var fs = require("fs")
var server = http.createServer(function (request, response) {
  if(request.url === "/") {
    fs.readFile("index.html", "utf8", function (errors, contents) {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === "/ninjas") {
    fs.readFile("ninjas.html", "utf8", function (errors, contents) {
      response.writeHead(200, {"content-Type": "text/html"});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === "/dojos/new") {
    fs.readFile("dojos.html", "utf8", function (errors, contents) {
      response.writeHead(200, {"content-Type": "text/html"});
      response.write(contents);
      response.end();
    })
  }
  else {
    response.writeHead(404);
    response.end("The URL requested is not available!")
  }
})

//Can create a port variable and pass that in instead, just so you can reference
//the port in code
server.listen(8000)
