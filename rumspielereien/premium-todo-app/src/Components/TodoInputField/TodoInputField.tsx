import React, { useState } from "react";

export const TodoInputField = () => {
  const [todo, setTodo] = useState<string>();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  return <input type="text" onChange={onChangeHandler} />;
};
