import { useState } from 'react';
import { PlusIcon } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Todo } from './todo';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { toast } from 'sonner';
import useMediaQuery from '@/hooks/use-media-query';
import { motion } from 'framer-motion';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

export const TodoList = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [task, setTask] = useState('');

  // uselocalstorage functions
  const { items, addItem, deleteItem, setItems } = useLocalStorage('my-tasks');

  const { isMobile } = useMediaQuery();

  // drag and drop
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      setItems((prevItems) => {
        const oldIndex = prevItems.findIndex((item) => item.id === active.id);
        const newIndex = prevItems.findIndex((item) => item.id === over.id);
        const newItems = [...prevItems];
        newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, prevItems[oldIndex]);
        return newItems;
      });
    }
  };

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
          className="h-[85px] cursor-pointer bg-[#f8f8fa] flex justify-center rounded-lg my-4 w-full p-4 border-2 border-gray-400 border-dashed hover:bg-[#eee]"
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
        {/* <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis]}
        >
          <SortableContext
            items={items.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          > */}
        {items.length > 0 ? (
          items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Todo
                id={item.id}
                index={index}
                task={item.task}
                deleteItem={deleteItem}
              />
            </motion.div>
          ))
        ) : (
          <div className="flex justify-center mt-10 text-blue-500 font-semibold italic">
            <p className="text-md">Wow. such an empty list!🤭</p>
          </div>
        )}
        {/* </SortableContext>
        </DndContext> */}
      </div>
      <div className="h-[40px]" />
    </div>
  );
};
