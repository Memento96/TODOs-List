import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

const todos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a react", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "Fix Github", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      
      <TodoList>
        {todos.map((todos) => (
          <TodoItem 
          key={todos.text} 
          text={todos.text}
          completed={todos.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
