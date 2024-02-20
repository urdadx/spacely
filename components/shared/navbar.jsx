import { Button } from '../ui/button';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { FocusPanel } from '../core/focus-panel';
import { usePomodoroTimer } from '@/hooks/use-pomodoro';
import useMediaQuery from '@/hooks/use-media-query';
import { GithubIcon } from 'lucide-react';
import { Drawer } from 'vaul';

const Navbar = () => {
  const { formatTime, timeLeft, timerRunning, isSession } = usePomodoroTimer();

  const { isMobile } = useMediaQuery();
  return (
    <>
      <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <nav className="px-2 flex justify-between h-16 items-center lg:container">
          <div className="">
            <h3 className="font-semibold text-xl italic lg:text-2xl">
              spacely 🛸
            </h3>
          </div>

          <div className="ml-auto flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className={`font-semibold text-sm lg:text-md ${
                    isSession ? 'bg-primary' : 'bg-red-400 hover:bg-red-500'
                  }`}
                >
                  {timerRunning
                    ? ` ${
                        isSession ? 'In session😌' : 'On Break😎'
                      }: ${formatTime(timeLeft)}`
                    : 'Pomodoro ⏰'}
                </Button>
              </SheetTrigger>
              <SheetContent side={!isMobile ? 'right' : 'bottom'}>
                <FocusPanel />
              </SheetContent>
            </Sheet>
            {!isMobile && (
              <Link target="_blank" href="https://github.com/urdadx/spacely">
                <Button className="font-medium bg-transparent text-sm lg:text-md flex items-center gap-2 hover:bg-gray-100 text-slate-900 border-2">
                  <GithubIcon className="w-4 h-4" />
                  Star on Github
                </Button>
              </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
