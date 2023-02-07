import React, { useRef } from "react";

interface NewTodoProps {
  newTodo: (todoText: string) => void;
}

export default function Todo(props: NewTodoProps) {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoInputRef.current!.value;
    props.newTodo(enteredText);
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <div>
          <label htmlFor="todo-text">할 일 적기</label>
          <input ref={todoInputRef} type="text" id="todo-text" />
        </div>
        <button type="submit">작성</button>
      </form>
    </>
  );
}
