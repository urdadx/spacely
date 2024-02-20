import React, { useState } from 'react';
import {
  Car,
  Clock,
  CloudHail,
  Dribbble,
  Fan,
  Leaf,
  Twitter,
  Waves,
  Zap,
  ShuffleIcon,
} from 'lucide-react';
import { AudioCard } from '../utils/audio-card';
const sounds = [
  {
    name: 'Rain',
    icon: (
      <CloudHail className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/rain.mp3',
  },
  {
    name: 'Thunder',
    icon: (
      <Zap className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/thunder.mp3',
  },
  {
    name: 'Birds Chirp',
    icon: (
      <Twitter className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/birds.mp3',
  },
  {
    name: 'Fan',
    icon: (
      <Fan className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/fan.mp3',
  },
  {
    name: 'Clock',
    icon: (
      <Clock className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/clock.mp3',
  },
  {
    name: 'Traffic Jam',
    icon: (
      <Car className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/traffic.mp3',
  },
  {
    name: 'Ocean',
    icon: (
      <Waves className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/waves.mp3',
  },
  {
    name: 'Stadium',
    icon: (
      <Dribbble className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/stadium.mp3',
  },
  {
    name: 'Leaves',
    icon: (
      <Leaf className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/leaves.mp3',
  },
];

const Playground = () => {
  const [selectedSounds] = useState([]);

  return (
    <>
      <section className="flex justify-center items-center max-w-[720px] mt-4 lg:mt-6 mx-auto lg:justify-between gap-3">
        <div className="flex" />
        <div className="flex items-center gap-2 cursor-pointer">
          <p>Randomize</p>
          <div className="shadow-md rounded-full p-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
            <ShuffleIcon className="w-4 h-4" />
          </div>
        </div>
      </section>
      <section className="flex justify-center max-w-[900px] mx-auto mt-4 lg:mt-8">
        <div className="grid grid-cols-2 mb-4 gap-4 lg:grid-cols-3 lg:gap-8 lg:mb-14">
          {sounds?.map((sound) => {
            const isSelected = selectedSounds.includes(sound.name);
            return (
              <AudioCard
                key={sound.name}
                name={sound.name}
                icon={sound.icon}
                sound={sound.src}
                volume={sound.volume}
                playPreset={isSelected}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Playground;
