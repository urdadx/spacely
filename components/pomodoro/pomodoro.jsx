import { TodoList } from '../core/todo-list';
import { CardContent, CardHeader } from '@/components/ui/card';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Minus, PlayIcon, PlusIcon } from 'lucide-react';

export const Pomodoro = () => {
  return (
    <>
      <div>
        <Tabs defaultValue="focus" className="">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="focus">Focus</TabsTrigger>
            <TabsTrigger value="break">Break time</TabsTrigger>
          </TabsList>
          <TabsContent className="" value="focus">
            <CardHeader className="pb-4 mb-2 ">
              <div className="text-5xl text-center w-[250px] font-bold tracking-tighter">
                25:00
              </div>
              <div className="text-sm text-center font-bold tracking-tighter">
                In session
              </div>
            </CardHeader>
            <CardContent className="pb-4 w-[300px] mx-auto">
              <div className="flex items-center justify-center space-x-1 ">
                <span className=" flex justify-center cursor-pointer font-bold items-center rounded-full hover:bg-gray-100 p-3">
                  <Minus className="h-4 w-4" />
                  <span className="text-lg">5</span>
                </span>
                <div className="cursor-pointer  flex flex-1 text-center justify-center items-center">
                  <div className="w-12 h-12 p-4 flex justify-center items-center rounded-full bg-primary">
                    <PlayIcon className=" text-white w-10 h-10" />
                  </div>
                </div>
                <span className="flex justify-center items-center cursor-pointer font-bold rounded-full hover:bg-gray-100 p-3">
                  <Plus className="h-4 w-4" />
                  <span className="text-lg">5</span>
                </span>
              </div>
            </CardContent>
            <TodoList />
            <div className="h-[85px] cursor-pointer bg-[#f8f8fa] flex justify-center rounded-lg my-4 w-full p-4 border-2 border-gray-400 border-dashed">
              <div className="flex flex-col justify-center mx-auto">
                <div className="w-[30px] mx-auto">
                  {' '}
                  <PlusIcon className="text-gray-500 text-sm text-center" />
                </div>
                <small className="text-center text-gray-500 font-semibold">
                  New task
                </small>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
