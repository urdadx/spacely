import { useState } from 'react';
import { PlusIcon } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Todo } from './todo';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { toast } from 'sonner';
import useMediaQuery from '@/hooks/use-media-query';
import { motion } from 'framer-motion';

export const TodoList = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [task, setTask] = useState('');

  // uselocalstorage functions
  const { items, addItem, deleteItem, checkCompleted } =
    useLocalStorage('my-tasks');
  const { isMobile } = useMediaQuery();

  const handleSubmitTask = () => {
    if (!task || task.trim() === '') {
      toast.warning('Field cannot be empty');
      return;
    }
    addItem(task);
    setIsInputVisible(false);
    toast.success('Task added successfully.');
    setTask('');
  };

  return (
    <div>
      {isInputVisible ? (
        <div className="flex flex-col justify-center mx-auto my-4">
          <Textarea
            placeholder="What are you working on?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border border-gray-300 p-[0.7rem] rounded-md mb-2 h-24"
          />
          <div className="flex justify-end items-center gap-2">
            <Button
              onClick={() => setIsInputVisible(false)}
              className="bg-gray-100 border w-[70px] text-black mt-2 p-2 rounded-md text-sm hover:bg-gray-200 hover:font-bold"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleSubmitTask}
              className="bg-blue-500 w-[70px] text-white mt-2 p-2 rounded-md text-sm hover:font-bold"
            >
              Save
            </Button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsInputVisible(true)}
          className="h-[85px] cursor-pointer bg-[#f8f8fa] flex justify-center rounded-lg my-4 w-full p-4 border-2 border-gray-400 border-dashed hover:bg-[#eee] dark:bg-background"
        >
          <div className="flex flex-col justify-center mx-auto">
            <div className="w-[30px] mx-auto">
              <PlusIcon className="text-gray-500 text-sm text-center" />
            </div>
            <small className="text-center text-gray-500 font-semibold">
              New Task
            </small>
          </div>
        </div>
      )}
      <div className={`${isMobile && 'todo-container'}`}>
        {items.length > 0 ? (
          items.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Todo
                  key={item.id}
                  id={item.id}
                  task={item.task}
                  isCompleted={item.isCompleted}
                  onCheck={checkCompleted}
                  onDelete={deleteItem}
                />
              </motion.div>
            );
          })
        ) : (
          <div className="flex justify-center mt-10 text-blue-500 font-semibold italic">
            <p className="text-md">Wow... such an empty list!🤭</p>
          </div>
        )}
      </div>
      <div className={isMobile ? 'h-[200px]' : 'h-[80px]'} />
    </div>
  );
};
