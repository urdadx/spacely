import { Button } from '../ui/button';
import { UserNav } from '../utils/user-nav';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { FocusPanel } from '../core/focus-panel';

const Navbar = () => {
  return (
    <>
      <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <nav className="px-2 flex justify-between h-16 items-center lg:container">
          <div className="">
            <h3 className="font-semibold text-lg italic lg:text-2xl">
              spacely 🛸
            </h3>
          </div>

          <div className="ml-auto flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button className=" font-semibold text-sm lg:text-md">
                  let me focus 😌
                </Button>
              </SheetTrigger>
              <SheetContent>
                <FocusPanel />
              </SheetContent>
            </Sheet>
            <UserNav />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
