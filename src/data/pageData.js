import { skillsData } from './skillsData';

let items = [];
skillsData.map((skill) => items.push(skill.name));

export const NavigationSection = {
  lightBg: false,
  lightText: true,
  list: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/#about',
    },
    {
      name: 'Journey',
      href: '/#journey',
    },
    {
      name: 'Subjects',
      href: '/subjects',
    },
    {
      name: 'PDF Viewer',
      href: '/pdf',
    },
    {
      name: 'Talent Week',
      href: '/projects/talentweek',
    },
  ],
  actionMenu: [
    {
      name: 'My Account',
      href: '/myaccount',
    },
    {
      name: 'Settings',
      href: '/settings',
    },
    {
      name: 'Support',
      href: '/support',
    },
    {
      name: 'Sign out',
      href: '/auth/login',
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
    'Hey, I’m Yasser a junior web developer and designer. I have high ambitions to get a scholarship to top tier universities.',
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
    'I’m Yasser a junior web developer/designer, I’m currently in the 10th grade.. planning for a scholarship to Columbia University.',
  subDescription:
    "I first knew about coding when I was 14 years old, since then i have never stopped learning new technologies and programming languages and I'll never will.",
  primaryButtonLabel: 'Download CV',
  primaryButtonLink: '#',
  secondaryButtonLabel: 'Skills',
  secondaryButtonLink: '#skills',
  isImgFirst: true,
  imgSrc: require('../assets/images/about.svg'),
  alt: 'Improving Web Development',
};

export const SkillsSection = {
  primary: true,
  lightBg: true,
  lightText: false,
  headline: 'Skills and Expertise',
  description:
    'Over the past 3 years, I have been continuously learning new technologies and languages, these are the ones I have most knowledge about to use.',
  subDescription: null,
  primaryButtonLabel: 'Load More',
  primaryButtonLink: null,
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

export const FooterSection = {
  headings: [
    {
      id: 1,
      title: 'SECTIONS',
      items: ['Hero', 'About', 'Journey', 'Skills', 'Contact'],
    },
    {
      id: 2,
      title: 'SKILLS',
      items: [...items],
    },
  ],
};
