import { useState } from 'react';
import { Slider } from '../ui/slider';
import ReactHowler from 'react-howler';
import toast from 'react-hot-toast';

export const AudioCard = ({ name, icon, sound, volume: initialVolume }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(initialVolume);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleSoundLoading = () => {
    toast.loading('sound is loading');
  };

  return (
    <div className="border bg-card text-card-foreground shadow-sm rounded-2xl cursor-pointer w-[160px] lg:w-[220px] h-[11rem] lg:h-[14.2rem]">
      <ReactHowler
        src={sound}
        loop={true}
        playing={isPlaying}
        volume={volume}
        onLoad={handleSoundLoading}
      />
      <div onClick={togglePlay} className="w-full">
        <div className="my-6 text-2xl text-md text-center font-semibold lg:text-xl">
          {name}
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <span>{icon}</span>
        </div>
      </div>
      <div className="mt-8 w-[100px] lg:w-[180px] flex mx-auto">
        {isPlaying && (
          <Slider
            value={[volume]}
            max={1}
            step={0.001}
            onValueChange={(e) => setVolume(e)}
          />
        )}
      </div>
    </div>
  );
};
