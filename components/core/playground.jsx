import { useState } from 'react';
import { AudioCard } from '../utils/audio-card';
import useMediaQuery from '@/hooks/use-media-query';
import { sounds } from '@/lib/sounds';

const Playground = () => {
  const [selectedSounds] = useState([]);
  const { isMobile } = useMediaQuery();

  return (
    <>
      <section className="flex justify-center items-center max-w-[720px] my-6 lg:mt-6 mx-auto lg:justify-between gap-3">
        <div />
        <div className="flex">
          <p className="text-sm lg:text-lg italic font-semibold text-primary text-center">
            Click to select soothing sounds to focus and relax to...😌
          </p>
        </div>
        <div />
      </section>
      <section className="flex justify-center max-w-[900px] mx-auto mt-4 lg:mt-8">
        <div className="grid grid-cols-2 mb-4 gap-4 lg:grid-cols-3 md:grid-cols-3 lg:gap-8 lg:mb-14">
          {sounds?.map((sound, index, array) => {
            const isSelected = selectedSounds.includes(sound.name);
            if (isMobile && index === array.length - 1) {
              return null;
            }
            return (
              <AudioCard
                key={sound.name}
                name={sound.name}
                icon={sound.icon}
                sound={sound.src}
                volume={sound.volume}
                playSound={isSelected}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Playground;
