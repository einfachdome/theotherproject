import React, { useState } from "react";
import { TopBar } from "../TopBar/TopBar";
import { TodoList } from "../TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const createTodo = (todo: string, created: string) => {
    setTodos([
      ...todos,
      { todo: todo, complete: false, created: created, done: undefined },
    ]);
  };

  return (
    <main className="App">
      <TopBar createTodo={createTodo} />
      <TodoList />
    </main>
  );
}

export default App;
