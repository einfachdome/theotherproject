type Todo = {
  todo: string;
  complete: boolean;
  created: string;
  done: string | undefined;
};

type createTodo = (todo: string, created: string) => void;
