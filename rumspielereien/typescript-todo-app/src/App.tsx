import React, { useState } from "react";
import { TodoList } from "./Components/TodoList/TodoList";
import { AddTodoField } from "./Components/AddTodoField/AddTodoField";

const initialTodos: Array<Todo> = [
  { text: "Anfangen typscript zu lernen", complete: true },
  { text: "Schlafen", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo:AddTodo = newTodoText => {
    if (newTodoText === "") {
      return todos;
    } else {
      setTodos([...todos, { text: newTodoText, complete: false }]);
    }
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoField addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
