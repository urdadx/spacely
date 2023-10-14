import { Button } from '../ui/button';
import { UserCircle2 } from 'lucide-react';

export const AuthBtn = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <Button variant="outline">
          <UserCircle2 className="mr-2 h-4 w-4" />
          Login
        </Button>
      </div>
    </>
  );
};
