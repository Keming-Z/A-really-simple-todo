import { useCallback } from "react";
import type { TodoList } from "../types";

const cacheKey = 'todo-cache';
export function useCache() {
  const setCache = useCallback((data: TodoList) => {
    localStorage.setItem(cacheKey, JSON.stringify(data));
  }, []);

  const getCache = useCallback(() => {
    const cached = localStorage.getItem(cacheKey);
    return cached ? JSON.parse(cached) : null;
  }, []);

  return { setCache, getCache };
}