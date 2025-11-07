import conferenceImg1 from '../assets/jam-conference/conference/conference.jpg';
import conferenceImg2 from '../assets/jam-conference/conference/conference2.png';
import jamImg1 from '../assets/jam-conference/jam/jam1.png';
import jamImg2 from '../assets/jam-conference/jam/jam2.png';
import jamImg3 from '../assets/jam-conference/jam/jam3.png';
import jamImg4 from '../assets/jam-conference/jam/jam4.png';
import jamImg5 from '../assets/jam-conference/jam/jam5.png';
const JAM_VIDEO_URL = 'https://www.youtube.com/embed/1dnaSRYRc-U?rel=0&modestbranding=1';

export type EventMedia = {
  type: 'image' | 'video' | 'youtube';
  src: string;
  alt?: string;
  poster?: string;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  media: EventMedia[];
  linkedin?: string;
};

const LINKEDIN_RECAP = 'https://www.linkedin.com/feed/update/urn:li:activity:7376976271806889984/';

const events: Event[] = [
  {
    id: 'jam-conference',
    title: 'Conference About the Industry + GDD Game Jam',
    description:
      'A campus conference unpacking realities of the developing games followed by a 5-hour jam where 20+ teams put the insights into designing games..',
    date: 'Apr 24 & 25, 2025',
    media: [
      {
        type: 'youtube',
        src: JAM_VIDEO_URL,
        alt: 'Orbit Shift jam recap footage',
        poster: jamImg1
      },
      { type: 'image', src: conferenceImg1, alt: 'Signals & Stories conference photo 1' },
      { type: 'image', src: conferenceImg2, alt: 'Signals & Stories conference photo 2' },
      { type: 'image', src: jamImg1, alt: 'Orbit Shift jam photo 1' },
      { type: 'image', src: jamImg2, alt: 'Orbit Shift jam photo 2' },
      { type: 'image', src: jamImg3, alt: 'Orbit Shift jam photo 3' },
      { type: 'image', src: jamImg4, alt: 'Orbit Shift jam photo 4' },
      { type: 'image', src: jamImg5, alt: 'Orbit Shift jam photo 5' }
    ],
    linkedin: LINKEDIN_RECAP
  }
];

export default events;
