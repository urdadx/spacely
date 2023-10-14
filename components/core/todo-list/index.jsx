import { Todo } from './todo';

export const TodoList = () => {
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        {Array.from({ length: 1 }).map((_, i) => (
          <Todo key={i} />
        ))}
      </div>
      
    </>
  );
};
