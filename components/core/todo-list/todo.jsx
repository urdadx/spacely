import { Checkbox } from '@/components/ui/checkbox';

export const Todo = () => {
  return (
    <>
      <div className="px-4 py-6 rounded-lg mb-4 border shadow-md border-primary-foreground h-[80px] w-full items-center cursor-pointer">
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎉</span>
            <h3 className="">Complete homework</h3>
          </div>
          <div className="flex items-center">
            <Checkbox className="rounded-2xl w-[20px] h-[20px]" />
          </div>
        </div>
      </div>  
    </>
  );
};
