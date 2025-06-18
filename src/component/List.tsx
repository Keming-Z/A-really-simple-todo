import { Item } from "./Item";
import { useTodo } from "../context/TodoContext";

export function List() {
  const { todoList } = useTodo();

  return (
    <>
      {todoList.length > 0 && (
        <ul className='list-none mt-2 border-1 border-gray-300 rounded shadow-md'>
          {todoList.map(item => (
            <Item key={item.id} item={item} as="li" />
          ))}
        </ul>
      )}
    </>
  )
}
