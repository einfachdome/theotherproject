import React, { useState } from "react";
import { TopBar } from "../TopBar/TopBar";
import { TodoList } from "../TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState<
    {
      todo: string;
      complete: boolean;
      created: Date;
      done: Date;
    }[]
  >();

  return (
    <main className="App">
      <TopBar />
      <TodoList />
    </main>
  );
}

export default App;
