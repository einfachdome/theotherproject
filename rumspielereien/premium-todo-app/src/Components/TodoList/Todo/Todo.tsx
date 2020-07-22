import React from "react";

interface ITodoProps {
  todo: Todo;
}

export const Todo: React.FC<ITodoProps> = ({ todo }) => {
  return (
    <li>
      <p>{todo.todo}</p>
      <p>Created: {todo.created}</p>
    </li>
  );
};
