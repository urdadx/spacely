import { Checkbox } from '@/components/ui/checkbox';
import { Trash2, Pencil } from 'lucide-react';
import { toast } from 'sonner';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { ThreeDots } from '@/components/utils/three-dots';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

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
          <Popover className="flex items-center ">
            <PopoverTrigger>
              <ThreeDots />
            </PopoverTrigger>
            <PopoverContent className="w-[150px] h-auto p-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Edit</span>
                  <Pencil className="rounded-2xl text-gray-600 w-[15px] h-[15px] hover:text-red-500" />
                </div>

                <div
                  onClick={handleDeleteTask}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm text-red-400">Delete</span>
                  <Trash2 className="rounded-2xl text-red-400 w-[15px] h-[15px] hover:text-red-500" />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
};
