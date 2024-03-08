import { SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Pomodoro } from '../pomodoro/pomodoro';

export const FocusPanel = () => {
  const greetUser = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  const greeting = greetUser();

  return (
    <div className="h-full ">
      <SheetHeader className="my-4">
        <SheetTitle>{greeting && greeting}😇</SheetTitle>
      </SheetHeader>
      <div className="py-2 px-4">
        <Pomodoro />
      </div>
    </div>
  );
};
