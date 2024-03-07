import { useState } from 'react';
import { Slider } from '../ui/slider';
import ReactHowler from 'react-howler';
import { toast } from 'sonner';
import { clsx } from 'clsx';
import { useTheme } from 'next-themes';

export const AudioCard = ({ name, icon, sound, volume: initialVolume }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(initialVolume);
  const { theme } = useTheme();
  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div
      className={`${
        isPlaying && theme === 'light' ? 'border-animation-light' : ''
      } ${
        isPlaying && theme === 'dark' ? 'border-animation-dark' : ''
      }
       border text-card-foreground shadow-md rounded-2xl cursor-pointer w-[160px] lg:w-[220px] h-[10rem] lg:h-[14.2rem] dark:bg-primary/10 `}
    >
      <ReactHowler
        preload={true}
        src={sound}
        loop={true}
        playing={isPlaying}
        volume={volume}
        onLoadError={() => {
          toast.info('An error occured while loading the sound');
        }}
      />
      <div onClick={togglePlay} className="relative w-full ">
        <div
          className={clsx(
            'my-4 text-lg text-center font-semibold lg:text-xl lg:my-6 ',
            isPlaying ? 'dark:text-primary' : 'dark:text-foreground'
          )}
        >
          {name}
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <span>{icon}</span>
        </div>
      </div>
      <div className="mt-4 w-[100px] lg:w-[180px] flex mx-auto lg:mt-8">
        {isPlaying && (
          <Slider
            value={[volume]}
            max={1}
            step={0.001}
            onValueChange={(e) => {
              setVolume(e[0]);
            }}
          />
        )}
      </div>
    </div>
  );
};
