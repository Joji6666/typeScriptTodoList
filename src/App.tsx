import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import { TodoInterface } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const newTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const deleteTodo = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <Todo newTodo={newTodo} />
    </div>
  );
}

export default App;
