import express from "express";
import cors from "cors";

const server = express();

server.use(cors());

const todoData = [
    {
      id: "82cd49ca-81a9-47d9-998e-83e5276e02e3",
      title: "Todo 1 Titel"
    },
    {
      id: "a92618ef-9df5-4649-9fb9-3a0389c5e411",
      title: "Todo 2 Titel"
    },
    {
      id: "91be7314-9013-437d-ae54-c51e7c00e4a1",
      title: "Todo 3 Titel"
    },
    {
      id: "5ce640cc-ee05-4da0-9694-e753af7d8029",
      title: "Todo 4 Titel"
    }
  ];

server.disable("x-powered-by");
server.get("/todos", function(request, response) {
    response.send(todoData);
});

server.listen(8080, function(){
    console.log("Server successfully started...");
});
