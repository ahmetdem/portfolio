import conferenceImg1 from '../assets/jam-conference/conference/conference.jpg';
import conferenceImg2 from '../assets/jam-conference/conference/conference2.png';
import jamImg1 from '../assets/jam-conference/jam/jam1.png';
import jamImg2 from '../assets/jam-conference/jam/jam2.png';
import jamImg3 from '../assets/jam-conference/jam/jam3.png';
import jamImg4 from '../assets/jam-conference/jam/jam4.png';
import jamImg5 from '../assets/jam-conference/jam/jam5.png';

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  images: string[];
  linkedin?: string;
};

const LINKEDIN_RECAP = 'https://www.linkedin.com/feed/update/urn:li:activity:7376976271806889984/';

const events: Event[] = [
  {
    id: 'jam-conference',
    title: 'Signals & Stories Conference + Orbit Shift Game Jam',
    description:
      'A campus conference unpacking pipelines and production realities followed by a 48-hour jam where 18 teams put the insights into play.',
    date: 'Apr 6, 2024 & Nov 17-19, 2023',
    location: 'Campus Auditorium · Innovation Lab + Online',
    images: [conferenceImg1, conferenceImg2, jamImg1, jamImg2, jamImg3, jamImg4, jamImg5],
    linkedin: LINKEDIN_RECAP
  }
];

export default events;
