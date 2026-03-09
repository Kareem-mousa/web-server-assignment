const http = require('http');

http.get("http://localhost:3000/api", (res) => {

    let data = "";

    res.on("data", (chunk) => {
        data += chunk;
    });

    res.on("end", () => {
        console.log("Response from API:");
        console.log(JSON.parse(data));
    });

});