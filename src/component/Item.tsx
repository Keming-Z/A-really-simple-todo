import React from 'react';
import type { TodoListItem } from '../types';
import { useTodo } from '../context/TodoContext';

export function Item({ item, as = 'div' }: { item: TodoListItem; as?: string }) {
  const [isCompleted, setIsCompleted] = React.useState(item.completed);
  const Component = as;
  const { setTodoList } = useTodo();

  const handleDelete = (): void => {
    console.log('Deleting item:', item.text, item.id);
    setTodoList(prev => prev.filter(prevItem => item.id !== prevItem.id));
  }

  const handleToggleComplete = (): void => {
    console.log('Toggling completion for item:', item.text, item.id);
    setIsCompleted(prev => !prev);
    setTodoList(prev => prev.map(prevItem => {
      if (prevItem.id === item.id) {
        return { ...prevItem, completed: !prevItem.completed };
      }
      return prevItem;
    }));
  }

  return React.createElement(
    Component,
    { 
      className: 'flex flex-row items-center gap-2 p-2 border-1 border-gray-100 cursor-pointer hover:bg-gray-50',
      role: 'listitem',
    },
    <>
      <span className='flex flex-row justify-start flex-3 shrink-0'>
        <i className={isCompleted ? 'inline-block' : 'hidden'}>&#x2705;</i>
        {item.text}
      </span>
      <button className="flex-1" onClick={handleToggleComplete}>
        Mark as {isCompleted ? 'Incomplete' : 'Complete'}
      </button>
      <button className="flex-1" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}