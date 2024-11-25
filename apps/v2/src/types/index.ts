export interface EduExpItemType {
  title: string;
  subtitle: string;
  logoSrc: string;
  descs: string[];
}

export type SkillItemType = {
  name: string;
  rating: number;
  image: string;
  description?: string;
  language?: string;
  code?: string;
};

type DetailType = {
  content: string;
  type: 'subtitle' | 'text';
};
export type ProjectItemType = {
  title: string;
  description: string;
  details: DetailType[];
  image: string;
  link?: string;
  skills: string[];
  cateTag?: string;
  isMobile?: boolean;
};

export const Sections = {
  INTRO: 'Intro',
  ABOUT: 'About',
  EDUCATION: 'Education',
  EXPERIENCE: 'Experience',
  PROJECTS: 'Projects',
  CONTACTS: 'Contacts',
} as const;

export type SectionsType = (typeof Sections)[keyof typeof Sections];
