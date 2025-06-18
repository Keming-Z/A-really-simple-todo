export type TodoListItem = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoList = Array<TodoListItem>;