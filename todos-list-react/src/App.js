import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

const todos = [
  { test: "Cortar cebolla", completed: false },
  { test: "Tomar el curso de intro a react", completed: false },
  { test: "Llorar con la llorona", completed: false },
  { test: "Fix Github", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      

      <TodoList>
        {todos.map((todos) => (
          <TodoItem />
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
