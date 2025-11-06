import ahmetYusufDemirImg from '../assets/team-section-img/ahmetyusufdemir.png';
import canKankilicImg from '../assets/team-section-img/cankankilic.png';
import ilaydaAkinetImg from '../assets/team-section-img/ilaydaakinet.png';
import alpBasaranImg from '../assets/team-section-img/alpbasaran.png';
import cihanErayBozkurtImg from '../assets/team-section-img/cihaneraybozkurt.png';
import alperenGokImg from '../assets/team-section-img/alperengok.png';

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatar: string;
  socials: {
    github?: string;
    linkedin?: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    id: 'ahmet-yusuf-demir',
    name: 'Ahmet Yusuf Demir',
    role: 'Developer',
    avatar: ahmetYusufDemirImg,
    socials: {
      github: 'https://github.com/ahmetdem',
      linkedin: 'https://www.linkedin.com/in/ahmetdem/'
    }
  },
  {
    id: 'can-kankilic',
    name: 'Can Kankılıç',
    role: 'Sound Designer & Director',
    avatar: canKankilicImg,
    socials: {
      linkedin: 'https://www.linkedin.com/in/canknk/'
    }
  },
  {
    id: 'ilayda-akinet',
    name: 'İlayda Akınet',
    role: 'UI / UX Designer',
    avatar: ilaydaAkinetImg,
    socials: {
      linkedin: 'https://www.linkedin.com/in/ilaydaakinet/'
    }
  },
  {
    id: 'alp-basaran',
    name: 'Alp Başaran',
    role: 'Developer',
    avatar: alpBasaranImg,
    socials: {
      github: 'https://github.com/HeavyBlue',
      linkedin: 'https://www.linkedin.com/in/alpsinaba%C5%9Faran/'
    }
  },
  {
    id: 'cihan-eray-bozkurt',
    name: 'Cihan Eray Bozkurt',
    role: 'Game Designer',
    avatar: cihanErayBozkurtImg,
    socials: {
      github: 'https://github.com/cihaneray',
      linkedin: 'https://www.linkedin.com/in/cihaneraybozkurt/'
    }
  },
  {
    id: 'tevfik-alperen-gok',
    name: 'Tevfik Alperen Gök',
    role: 'Game Art Designer',
    avatar: alperenGokImg,
    socials: {
      linkedin: 'https://www.linkedin.com/in/tevfik-alperen-g%C3%B6k-a84124256/'
    }
  }
];
