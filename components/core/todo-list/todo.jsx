import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { useLocalStorage } from '@/hooks/use-local-storage';
import Confetti from 'react-dom-confetti';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';

export const Todo = ({ task, id, index, deleteItem }) => {
  const { checkCompleted, items } = useLocalStorage('my-tasks');
  const [isExploding, setIsExploding] = useState(false);

  const isCompleted = items?.[index]?.isCompleted;
  const config = {
    angle: '109',
    spread: '284',
    startVelocity: 40,
    elementCount: '113',
    dragFriction: '0.19',
    duration: '4080',
    stagger: 3,
    width: '10px',
    height: '10px',
    perspective: '500px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  const handleDeleteTask = () => {
    setIsExploding(true);
    deleteItem(index);
    toast.info('Task deleted successfully');
  };

  // drag and drop
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="px-3 py-[1.8rem] rounded-lg mb-2 border shadow-md border-primary-foreground h-[80px] w-full items-center cursor-grab"
      >
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Checkbox
                onCheckedChange={() => checkCompleted(index)}
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
          <div
            onClick={handleDeleteTask}
            className="flex flex-col gap-2 cursor-default"
          >
            <Trash2 className="rounded-2xl text-red-400 w-[15px] h-[15px] hover:text-red-500" />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex absolute">
        <Confetti active={isExploding} config={config} />
      </div>
    </>
  );
};
