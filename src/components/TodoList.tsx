import React from "react";

interface TodoListProps {
  todos: { id: string; text: string }[];
  deleteTodo: (id: string) => void;
}

export default function TodoList(props: TodoListProps) {
  return (
    <>
      <h1>할 일 </h1>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span key={todo.id}>{todo.text}</span>
              <button onClick={props.deleteTodo.bind(null, todo.id)}>
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
