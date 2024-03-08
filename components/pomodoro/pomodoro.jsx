import { TodoList } from '../core/todo-list';
import { CardContent, CardHeader } from '@/components/ui/card';
import { Plus, Minus, PlayIcon, Pause } from 'lucide-react';
import { usePomodoroTimer } from '@/hooks/use-pomodoro';
import { toast } from 'sonner';

export const Pomodoro = () => {
  const {
    timeLeft,
    timerRunning,
    isSession,
    adjustLength,
    toggleTimer,
    formatTime,
  } = usePomodoroTimer();

  const handleDecreaseTimerLength = () => {
    adjustLength(isSession ? 'sessionLength' : 'breakLength', -5);
    toast.info('Timer reduced by 5 minutes');
  };

  const handleIncreaseTimerLength = () => {
    adjustLength(isSession ? 'sessionLength' : 'breakLength', 5);
    toast.info('Timer increased by 5 minutes');
  };

  return (
    <>
      <div>
        <div className="">
          <CardHeader className="pb-4 mb-2 ">
            <div className="text-5xl text-center w-full font-bold tracking-tighter">
              {formatTime(timeLeft)}
            </div>
            <div className="w-full flex justify-center">
              <p
                className={`text-sm w-[90px] text-center p-[0.25rem] font-bold tracking-tighter ${
                  isSession ? 'bg-blue-300' : 'bg-red-300'
                } text-white rounded-md`}
              >
                {!timerRunning
                  ? 'Start timer'
                  : isSession
                  ? 'In Session'
                  : 'On Break'}
              </p>
            </div>
          </CardHeader>
          <CardContent className="pb-4 w-[300px] mx-auto">
            <div className="flex items-center justify-center space-x-1 ">
              <span
                onClick={handleDecreaseTimerLength}
                className=" flex justify-center cursor-pointer font-bold items-center rounded-full hover:bg-gray-100 p-3 dark:hover:bg-primary/10"
              >
                <Minus className="h-4 w-4" />
                <span className="text-lg">5</span>
              </span>
              <div
                onClick={toggleTimer}
                className="cursor-pointer  flex flex-1 text-center justify-center items-center"
              >
                <div
                  className={`w-12 h-12 p-4 flex justify-center items-center rounded-full ${
                    isSession ? ' bg-primary' : 'bg-red-400'
                  }`}
                >
                  {timerRunning ? (
                    <Pause className=" text-white w-10 h-10" />
                  ) : (
                    <PlayIcon className=" text-white w-10 h-10" />
                  )}
                </div>
              </div>
              <span
                onClick={handleIncreaseTimerLength}
                className="flex justify-center items-center cursor-pointer font-bold rounded-full hover:bg-gray-100 p-3 dark:hover:bg-primary/10"
              >
                <Plus className="h-4 w-4" />
                <span className="text-lg">5</span>
              </span>
            </div>
          </CardContent>
          <TodoList />
        </div>
      </div>
    </>
  );
};
