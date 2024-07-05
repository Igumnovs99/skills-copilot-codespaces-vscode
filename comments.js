// Create web server
// 1. Load required modules
var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");
var qs = require("querystring");
var comments = [];

// 2. Create server
http.createServer(function(request, response) {
    // Parse the request containing file name
    var pathname = url.parse(request.url).pathname;
    // Print the name of the file for which request is made.
    console.log("Request for " + pathname + " received.");
    // Read the requested file content from file system
    if (pathname === "/") {
        pathname = "/index.html";
    }
    if (pathname === "/index.html") {
        fs.readFile(pathname.substr(1), function(err, data) {
            if (err) {
                console.log(err);
                response.writeHead(404, { "Content-Type": "text/html" });
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data.toString());
            }
            response.end();
        });
    } else if (pathname === "/comments") {
        if (request.method === "POST") {
            var body = "";
            request.on("data", function(data) {
                body += data;
            });
            request.on("end", function() {
                body = qs.parse(body);
                comments.push(body.comment);
                response.writeHead(200, { "Content-Type": "text/plain" });
                response.end();
            });
        } else {
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.write(JSON.stringify(comments));
            response.end();
        }
    } else {
        fs.readFile(pathname.substr(1), function(err, data) {
            if (err) {
                console.log(err);
                response.writeHead(404, { "Content-Type": "text/html" });
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data.toString());
            }
            response.end();
        });
    }
}).listen(3000);

// Print URL for accessing server
console.log("Server running at http://