import { createContext, useState, useContext, useEffect } from "react";
import type { TodoList } from "../types";
import { useCache } from "../hooks/useCache";

type TodoContextType = {
  todoList: TodoList;
  setTodoList: React.Dispatch<React.SetStateAction<TodoList>>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
}

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const { getCache, setCache } = useCache();
  const [todoList, setTodoList] = useState<TodoList>(getCache() || []);
  console.log("Initial todoList from cache:", todoList);

  useEffect(() => {
    console.log("Updating cache with todoList:", todoList);
    setCache(todoList);
  }, [todoList, setCache]);

  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoContext.Provider>
  );
}
