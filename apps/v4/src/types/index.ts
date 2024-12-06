export const Sections = {
  INTRO: 'Intro',
  ABOUT: 'About',
  EDUCATION: 'Education',
  EXPERIENCE: 'Experience',
  PROJECTS: 'Projects',
  CONTACTS: 'Contacts',
} as const;

export type SectionsType = (typeof Sections)[keyof typeof Sections];

export type SkillItemType = {
  name: string;
  rating: number;
  image: string;
};

type DetailType = {
  content: string;
  children?: DetailType[];
};

export type ProjectItemType = {
  id: string;
  title: string;
  description: string;
  details: DetailType[];
  image: string;
  link?: string;
  skills: string[];
  cateTag?: string;
  isMobile?: boolean;
};

export interface ExperienceItemType {
  title: string;
  subtitle: string;
  logoSrc: string;
  descs: string[];
}

export interface EducationItemType {
  title: string;
  subtitle: string;
  logoSrc: string;
  major: string;
  minor: string;
  gpa: string;
}

export type IntroductionItemType = {
  title: string;
  subtitle: string;
  content: string;
};
