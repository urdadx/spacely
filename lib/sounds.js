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

export const sounds = [
  {
    name: 'Rain',
    icon: (
      <CloudHail className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: 'https://firebasestorage.googleapis.com/v0/b/nomad-23595.appspot.com/o/spacely-sounds%2Frain.mp3?alt=media&token=c6c8df34-7119-4f26-831f-7243c206a9e4',
  },
  {
    name: 'Thunder',
    icon: (
      <Zap className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: 'https://firebasestorage.googleapis.com/v0/b/nomad-23595.appspot.com/o/spacely-sounds%2Fthunder.mp3?alt=media&token=a2dfb6b4-84c2-4b41-962a-5579dda6dfa1',
  },
  {
    name: 'Birds Chirp',
    icon: (
      <Twitter className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: 'https://firebasestorage.googleapis.com/v0/b/nomad-23595.appspot.com/o/spacely-sounds%2Fbirds.mp3?alt=media&token=ab31beb1-5bd6-4995-8329-dec5c0013da6',
  },
  {
    name: 'Fan',
    icon: (
      <Fan className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: 'https://firebasestorage.googleapis.com/v0/b/nomad-23595.appspot.com/o/spacely-sounds%2Ffan.mp3?alt=media&token=a4104c61-cfcb-4e65-91f5-502da2e87c1a',
  },
  {
    name: 'Clock',
    icon: (
      <Clock className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: 'https://firebasestorage.googleapis.com/v0/b/nomad-23595.appspot.com/o/spacely-sounds%2Fclock.mp3?alt=media&token=b65b6e91-b44a-4b7b-80e8-64593742cceb',
  },
  {
    name: 'Ocean',
    icon: (
      <Waves className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: 'https://firebasestorage.googleapis.com/v0/b/nomad-23595.appspot.com/o/spacely-sounds%2Fwaves.mp3?alt=media&token=66608b50-fec5-4c66-a5ed-b3092c77d505',
  },
  {
    name: 'Traffic Jam',
    icon: (
      <Car className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: 'https://firebasestorage.googleapis.com/v0/b/nomad-23595.appspot.com/o/spacely-sounds%2Ftraffic.mp3?alt=media&token=27b64c06-1c9a-4462-a0f8-d941b1680258',
  },
  {
    name: 'Stadium',
    icon: (
      <Dribbble className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: 'https://firebasestorage.googleapis.com/v0/b/nomad-23595.appspot.com/o/spacely-sounds%2Fstadium.mp3?alt=media&token=615f9352-5dbf-42b5-a563-1c25a7954293',
  },
  {
    name: 'Leaves',
    icon: (
      <Leaf className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: 'https://firebasestorage.googleapis.com/v0/b/nomad-23595.appspot.com/o/spacely-sounds%2Fleaves.mp3?alt=media&token=54dbd4cb-94ad-4e3c-ac76-5c806f7b38fe',
  },
];
