import express from "express";
import JSONdb from "simple-json-db";
import cors from "cors";

const server = express();
const todoDB = new JSONdb("./data/todos.json", {
  asyncWrite: true
});

console.log(todoDB);

server.use(cors());
server.use(express.json());
server.disable("x-powered-by");
server.get("/todos", function(request, response) {
    response.send(todoDB.JSON());
});
server.post("/todos", function(request, response) {
  const requestToDoData = request.body;
  const allTodos = todoDB.JSON();

  allTodos.push(requestToDoData);
  todoDB.JSON(allTodos);
  todoDB.sync();

  response.send(todoDB.JSON());
});
server.delete("/todos/:id", function(request, response) {
  const todoId = request.params.id;
  const allTodos = todoDB.JSON();

  const matchedTodo = allTodos.find(todo => todo.id === todoId);

  if (matchedTodo) {
    allTodos.splice(allTodos.indexOf(matchedTodo), 1);
    todoDB.JSON(allTodos);
    todoDB.sync();

    response.send(todoDB.JSON());
  } else {
    response.status(404).send("ToDo not found!");
  }
});

server.get("/todos/:id", function(request, response) {
  const todoId = request.params.id;
  const allTodos = todoDB.JSON();

  const matchedTodo = allTodos.find(todo => todo.id === todoId);

  if (matchedTodo) {
    response.send(matchedTodo);
  } else {
    response.status(404).send("ToDo not found!");
  }
});

server.listen(8080, function(){
    console.log("Server successfully started...");
});
