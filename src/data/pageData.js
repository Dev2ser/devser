export const NavigationSection = {
  lightBg: false,
  lightText: true,
  list: [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About',
      link: '/#about',
    },
    {
      text: 'Journey',
      link: '/#journey',
    },
    {
      text: 'Skills',
      link: '/#skills',
    },
    {
      text: 'Subjects',
      link: '/subjects',
    },
  ],
  actionMenu: [
    {
      text: 'Your Profile',
      link: '/profile',
    },
    {
      text: 'Settings',
      link: '/settings',
    },
    {
      text: 'Support',
      link: '/support',
    },
    {
      text: 'Sign out',
      link: '/auth/login',
      action: 'Logout',
    },
  ],
};

export const HeroSection = {
  primary: false,
  lightBg: false,
  lightText: false,
  lightTextDesc: false,
  spacedBetween: false,
  headline: 'Climb The Ladder',
  highlighted: ' To Success',
  description:
    'Hey, I’m Yasser a junior web developer and designer. I have high ambitions to get a scholarship to Columbia University.',
  subDescription: null,
  primaryButtonLabel: 'Projects',
  primaryButtonLink: '#',
  secondaryButtonLabel: 'Read more',
  secondaryButtonLink: '#',
  isImgFirst: false,
  imgSrc: require('../assets/images/ladder-700px.png'),
  alt: 'Ladder Climbing',
};

export const AboutSection = {
  primary: false,
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  spacedBetween: true,
  headline: 'Let me introduce',
  highlighted: ' myself',
  description:
    'I’m Yasser a junior web developer/designer, i’m currently in the 10th grade.. planning for a scholarship to Columbia University.',
  subDescription:
    'I first knew about coding when i was 13 years old, since then i have never stopped learning new technologies and programming languages and never going to.',
  primaryButtonLabel: 'Download CV',
  primaryButtonLink: '#',
  secondaryButtonLabel: 'Skills',
  secondaryButtonLink: '#skills',
  isImgFirst: true,
  imgSrc: require('../assets/images/about.svg'),
  alt: 'Improving Web Development',
};

export const ContactSection = {
  primary: true,
  lightBg: true,
  lightText: false,
  headline: 'Contact Me',
  description:
    'You can contact me via Email or on one of my social media accounts.',
  subDescription: null,
  primaryButtonLabel: 'Send',
  primaryButtonLink: null,
  inputs: {
    1: {
      label: 'Name',
    },
    2: {
      label: 'Email',
    },
    3: {
      label: 'Message',
    },
  },
};
