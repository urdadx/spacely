import { useState } from 'react';
import { Slider } from '../ui/slider';
import ReactHowler from 'react-howler';

export const AudioCard = ({ name, icon, sound, volume: initialVolume }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(initialVolume);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleSoundLoading = () => {
    console.log('loading sound');
  };

  return (
    <div className="border bg-card text-card-foreground shadow-sm rounded-2xl cursor-pointer w-[160px] lg:w-[220px] h-[10rem] lg:h-[14.2rem]">
      <ReactHowler
        src={sound}
        loop={true}
        playing={isPlaying}
        volume={volume}
        onLoad={handleSoundLoading}
      />
      <div onClick={togglePlay} className="relative w-full">
        <div className="my-4 text-lg text-center font-semibold lg:text-2xl lg:my-6">
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
