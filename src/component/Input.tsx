import { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import { generateUUID } from '../util/uuid';
import type { TodoListItem } from '../types';

export function Input({
  placeholder = 'Enter text',
  type = 'text',
}: {
  placeholder?: string;
  type?: string;
}) {
  const [value, setValue] = useState('');
  const { setTodoList } = useTodo();

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('adding todo:', value);
    e.preventDefault();
    setTodoList(prev => [...prev, createTodoListItem(value.trim())]);
    setValue(''); 
  };

  const createTodoListItem = (text: string): TodoListItem => {
    return {
      id: generateUUID(),
      text,
      completed: false,
    };
  };

  return (
    <form 
      className="flex flex-row items-center gap-2"
      onSubmit={handleAddTodo}
    >
      <label htmlFor="todo-input" className="sr-only">Add a new todo item</label>
      <input
        id="todo-input"
        name='todo-input'
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 rounded p-2 w-full"
        value={value}
        autoFocus
        autoComplete='off'
        onChange={(e) => setValue(e.target.value)}
      />
      <button 
        className="self-stretch min-w-20"
        type="submit"
        aria-label="Add item"
        disabled={!value.trim()}
      >
        Add
      </button>
    </form>
  );
}