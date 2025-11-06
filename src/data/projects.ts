import cerrariaVideo from '../assets/projects/cerraria/cerraria.mp4';
import alsatImg1 from '../assets/projects/Alsat/alsat01.png';
import alsatImg2 from '../assets/projects/Alsat/alsat02.png';
import alsatImg3 from '../assets/projects/Alsat/alsat03.png';
import shooterVideo from '../assets/projects/shooter/shooter.mp4';
import shooterImg1 from '../assets/projects/shooter/shooter01.png';
import shooterImg2 from '../assets/projects/shooter/shooter02.png';
import shooterImg3 from '../assets/projects/shooter/shooter03.png';
import cubeVideo from '../assets/projects/cube-eleven/cube-eleven.mp4';
import cubeImg1 from '../assets/projects/cube-eleven/cube-eleven.png';
import cubeImg2 from '../assets/projects/cube-eleven/cube-eleven2.png';
import cubeImg3 from '../assets/projects/cube-eleven/cube-eleven3.png';
import unnaturalVideo from '../assets/projects/The Unnatural Leap/cihangame.mp4';
import unnaturalImg1 from '../assets/projects/The Unnatural Leap/cihan-game-01.png';
import unnaturalImg2 from '../assets/projects/The Unnatural Leap/cihan-game-02.png';
import unnaturalImg3 from '../assets/projects/The Unnatural Leap/cihan-game-03.png';
import unnaturalImg4 from '../assets/projects/The Unnatural Leap/cihan-game-04.png';
import unnaturalImg5 from '../assets/projects/The Unnatural Leap/cihan-game-05.png';
import unnaturalImg6 from '../assets/projects/The Unnatural Leap/cihan-game-06.png';

export type ProjectMedia = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  media: ProjectMedia[];
  status: string;
  stage: 'shipped' | 'in-progress';
  mediaAspect?: 'landscape' | 'portrait';
  mediaHeight?: string;
};

const projects: Project[] = [
  {
    id: 'cerraria',
    title: 'Cerraria',
    description: 'A lush mining sim where we prototype co-op building tools and reactive lighting for underground biomes.',
    media: [
      {
        type: 'video',
        src: cerrariaVideo,
        alt: 'Cerraria gameplay capture'
      }
    ],
    status: 'Showcase Build 2024',
    stage: 'shipped'
  },
  {
    id: 'alsat',
    title: 'Alsat',
    description: 'Local co-op market sim about flipping inventory in real time while juggling chaotic customer requests.',
    media: [
      { type: 'image', src: alsatImg1, alt: 'Alsat screenshot 1' },
      { type: 'image', src: alsatImg2, alt: 'Alsat screenshot 2' },
      { type: 'image', src: alsatImg3, alt: 'Alsat screenshot 3' }
    ],
    status: 'Campus Demo 2024',
    stage: 'shipped'
  },
  {
    id: 'the-unnatural-leap',
    title: 'The Unnatural Leap',
    description: 'Physics-driven platformer exploring gravity swaps and narrative beats between each jump.',
    media: [
      {
        type: 'video',
        src: unnaturalVideo,
        alt: 'The Unnatural Leap gameplay capture',
        poster: unnaturalImg1
      },
      { type: 'image', src: unnaturalImg1, alt: 'The Unnatural Leap screenshot 1' },
      { type: 'image', src: unnaturalImg2, alt: 'The Unnatural Leap screenshot 2' },
      { type: 'image', src: unnaturalImg3, alt: 'The Unnatural Leap screenshot 3' },
      { type: 'image', src: unnaturalImg4, alt: 'The Unnatural Leap screenshot 4' },
      { type: 'image', src: unnaturalImg5, alt: 'The Unnatural Leap screenshot 5' },
      { type: 'image', src: unnaturalImg6, alt: 'The Unnatural Leap screenshot 6' }
    ],
    status: 'Prototype Sprint',
    stage: 'in-progress'
  },
  {
    id: 'shooter',
    title: 'Shooter Prototype',
    description: 'Fast-paced FPS experiment focused on punchy recoil, parkour traversal, and stylized muzzle effects.',
    media: [
      {
        type: 'video',
        src: shooterVideo,
        alt: 'Shooter prototype gameplay capture'
      },
      { type: 'image', src: shooterImg1, alt: 'Shooter prototype screenshot 1' },
      { type: 'image', src: shooterImg2, alt: 'Shooter prototype screenshot 2' },
      { type: 'image', src: shooterImg3, alt: 'Shooter prototype screenshot 3' }
    ],
    status: 'Vertical Slice WIP',
    stage: 'in-progress'
  },
  {
    id: 'cube-eleven',
    title: 'Cube Eleven',
    description: 'Mobile spatial puzzler where you rotate a neon cube to align glowing nodes before the timer drains.',
    media: [
      {
        type: 'video',
        src: cubeVideo,
        alt: 'Cube Eleven gameplay capture',
        poster: cubeImg1
      },
      { type: 'image', src: cubeImg1, alt: 'Cube Eleven screenshot 1' },
      { type: 'image', src: cubeImg2, alt: 'Cube Eleven screenshot 2' },
      { type: 'image', src: cubeImg3, alt: 'Cube Eleven screenshot 3' }
    ],
    status: 'Mobile Prototype',
    stage: 'in-progress',
    mediaAspect: 'portrait',
    mediaHeight: 'h-[520px]'
  },
];

export default projects;
