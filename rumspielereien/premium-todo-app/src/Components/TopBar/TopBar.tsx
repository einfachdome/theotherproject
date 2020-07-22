import React, { useState } from "react";

interface ITopBarProps {
  createTodo: createTodo;
}

export const TopBar: React.FC<ITopBarProps> = ({ createTodo }) => {
  const [todoText, setTodoText] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const onClickHandler = () => {
    const created = new Date();
    createTodo(todoText, created.toString());
  };
  return (
    <div>
      <input type="text" onChange={onChangeHandler} />
      <button onClick={onClickHandler}>Add</button>
    </div>
  );
};
