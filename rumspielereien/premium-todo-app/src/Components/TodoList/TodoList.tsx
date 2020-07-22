import React from "react";
import { Todo } from "./Todo/Todo";

interface ITodoListProps {
  todos: Todo[];
}

export const TodoList: React.FC<ITodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};
