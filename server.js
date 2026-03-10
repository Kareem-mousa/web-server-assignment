const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        fs.readFile("index.htm", (err, data) => {

            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Error loading HTML file");
                return;
            }

            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });

    }

    else if (req.url === "/api") {

        const student = {
            name: "Kareem Mousa",
            studentID: "12323798"
        };

        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(student));
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");

});
