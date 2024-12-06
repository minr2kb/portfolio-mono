import { IconType } from 'react-icons';
export interface GridItem {
  i: string;
  component: React.ReactElement;
}

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

export type ExperienceItemType = {
  title: string;
  subtitle: string;
  logoSrc: string;
  descs: string[];
};

export type EducationItemType = {
  title: string;
  subtitle: string;
  logoSrc: string;
  major: string;
  minor: string;
  gpa: string;
};

export type IntroductionItemType = {
  title: string;
  subtitle: string;
  content: string;
};

export type ContactItemType = {
  label: string;
  value: string;
  link: string;
  icon: IconType;
};
