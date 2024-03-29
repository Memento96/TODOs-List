import React from "react";
import { AppUI } from "./AppUI";
// import './App.css';

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a react", completed: false },
  { text: "Llorar con la llorona", completed: true },
  { text: "Fix Github", completed: false },
];

const localStorageTodos = localStorage.getItem('TODOS_V1');
let parsedTodos;

if (!localStorageTodos){
  localStorage.setItem('TODOS_V1', JSON.stringify([]));
  parsedTodos = [];
} else {
  parsedTodos = JSON.parse(localStorageTodos)
}

function App() {
  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('')
  const completedTodos = todos.filter(todos => !!todos.completed).length
  const totalTodos = todos.length
  let searchedTodos = []

  if (!searchValue.length >= 1){
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    });  
  }

  const saveTodos = (newTodos) => {
      const stringifiedTodos = JSON.stringify(newTodos)
      localStorage.setItem('TODOS_V1', stringifiedTodos)
      setTodos(newTodos)
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
	  saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
	  saveTodos(newTodos);
  }

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
