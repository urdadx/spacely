import { Checkbox } from '@/components/ui/checkbox';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { useLocalStorage } from '@/hooks/use-local-storage';

export const Todo = ({ task, id, deleteItem }) => {
  const { checkCompleted, items } = useLocalStorage('my-tasks');

  const handleDeleteTask = () => {
    deleteItem(id);
    toast.info('Task deleted successfully.');
  };

  const isCompleted = items?.[id]?.isCompleted;

  return (
    <>
      <div className="px-3 py-[1.8rem] rounded-lg mb-2 border shadow-md border-primary-foreground h-[80px] w-full items-center cursor-pointer">
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Checkbox
                onCheckedChange={() => checkCompleted(id)}
                checked={isCompleted}
                className="rounded-xl w-[17px] h-[17px]"
              />
            </div>
            <h3
              className={`truncate w-[200px] text-sm ${
                isCompleted ? 'line-through' : ''
              }`}
            >
              {task}
            </h3>
          </div>
          <div onClick={handleDeleteTask} className="flex items-center">
            <Trash2 className="rounded-2xl text-red-400 w-[17px] h-[17px] hover:text-red-500" />
          </div>
        </div>
      </div>
    </>
  );
};
