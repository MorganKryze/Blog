import type { Site, Page, Links, Socials } from '@types';

// Global
export const SITE: Site = {
  TITLE: 'Portfolio',
  DESCRIPTION:
    'Welcome to my personal portfolio.',
  AUTHOR: 'MorganKryze'
};

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.'
};

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.'
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.'
};

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.'
};

// Links
export const LINKS: Links = [
  {
    TEXT: 'Home',
    HREF: '/'
  },
  {
    TEXT: 'Experiences',
    HREF: '/work'
  },
  // {
  //   TEXT: 'Blog',
  //   HREF: '/blog'
  // },
  {
    TEXT: 'Projects',
    HREF: '/projects'
  }
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'Email',
    ICON: 'email',
    TEXT: 'morgan@kodelab.fr',
    HREF: 'mailto:morgan@kodelab.fr'
  },
  {
    NAME: 'Github',
    ICON: 'github',
    TEXT: 'MorganKryze',
    HREF: 'https://github.com/MorganKryze/Blog'
  }
  // {
  //   NAME: "LinkedIn",
  //   ICON: "linkedin",
  //   TEXT: "markhorn-dev",
  //   HREF: "https://www.linkedin.com/in/markhorn-dev/",
  // },
  // {
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "markhorn_dev",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
];
