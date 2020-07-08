import React, { useState } from "react";

interface AddTodoFieldProps {
  addTodo: AddTodo;
}

export const AddTodoField: React.FC<AddTodoFieldProps> = ({ addTodo }) => {
  const [newTodoText, setNewTodoText] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(event.target.value);
  };

  const submitHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    addTodo(newTodoText);
    setNewTodoText("");
  };

  return (
    <div>
      <input type="text" value={newTodoText} onChange={onChangeHandler} />
      <button type="submit" onClick={submitHandler}>
        Add Todo
      </button>
    </div>
  );
};
