import express from "express";

const server = express();

server.disable("x-powered-by");
server.get("/", function(request, response) {
    response.send("Hallo geänderte Welt vom Server");
});

server.listen(8080, function(){
    console.log("Server successfully started...");
});
