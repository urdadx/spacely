import { SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Pomodoro } from '../pomodoro/pomodoro';

export const FocusPanel = () => {
  return (
    <div className="h-full">
      <SheetHeader className="my-4">
        <SheetTitle>Good Afternoon, Jack😇</SheetTitle>
      </SheetHeader>
      <div className="p-4 ">
        <Pomodoro />
      </div>
    </div>
  );
};
