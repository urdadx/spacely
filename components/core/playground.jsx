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
} from 'lucide-react';
import { AudioCard } from '../utils/audio-card';
import { Button } from '../ui/button';

const moods = [
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
  return (
    <>
      <section className="flex justify-center gap-3 max-w-[720px] mt-6 mx-auto lg:justify-start">
        <Button className="shadow-md rounded-lg text-md" variant="outline">
          Producitivty
        </Button>
        <Button className="shadow-md rounded-lg text-md" variant="outline">
          Focus
        </Button>
        <Button className="shadow-md rounded-lg text-md" variant="outline">
          Chilling
        </Button>
      </section>
      <section className="flex justify-center max-w-[900px] mx-auto mt-8">
        <div className="grid grid-cols-2 mb-4 gap-4 lg:grid-cols-3 lg:gap-8 lg:mb-14">
          {moods?.map((mood) => {
            return (
              <AudioCard
                key={mood.name}
                name={mood.name}
                icon={mood.icon}
                sound={mood.src}
                volume={mood.volume}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Playground;
