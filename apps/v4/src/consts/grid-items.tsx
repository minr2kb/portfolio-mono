import {
  Educations,
  Introduction,
  Projects,
  Greeting,
  Experiences,
  Navigator,
  Skills,
  Contact,
} from '@/components/grids';
import { contactsData, educationData, experiencesData, introData, projectsData, skillsData } from './sectionData';
import { GridItem } from '@/types';

export const defaultGridItems: GridItem[] = [
  { i: 'introduction', component: <Introduction.Main /> },
  { i: 'projects', component: <Projects.Main /> },
  { i: 'educations', component: <Educations.Main /> },
  { i: 'greeting', component: <Greeting /> },
  { i: 'experiences', component: <Experiences.Main /> },
  { i: 'navigator', component: <Navigator /> },
  { i: 'skills', component: <Skills.Main /> },
  { i: 'contact', component: <Contact.Main /> },
];

export const introductionGridItems: GridItem[] = [
  { i: 'introduction', component: <Introduction.Main /> },
  { i: 'navigator', component: <Navigator /> },
  ...introData.map((item, index) => ({
    i: `introduction-item-${index}`,
    component: <Introduction.Item item={item} />,
  })),
];

export const experiencesGridItems: GridItem[] = [
  { i: 'experiences', component: <Experiences.Main /> },
  { i: 'navigator', component: <Navigator /> },
  ...experiencesData.map((item, index) => ({
    i: `experience-item-${index}`,
    component: <Experiences.Item item={item} />,
  })),
];

export const educationsGridItems: GridItem[] = [
  { i: 'educations', component: <Educations.Main /> },
  { i: 'navigator', component: <Navigator /> },
  {
    i: 'education-school',
    component: (
      <Educations.SchoolItem
        title={educationData.title}
        subtitle={educationData.subtitle}
        logoSrc={educationData.logoSrc}
      />
    ),
  },
  { i: 'education-logo', component: <Educations.LogoItem logoSrc={'/images/seawolf.webp'} /> },
  {
    i: 'education-major',
    component: <Educations.Item title="주전공" content={educationData.major.split(' (').join('\n(')} />,
  },
  {
    i: 'education-minor',
    component: <Educations.Item title="부전공" content={educationData.minor.split(' (').join('\n(')} />,
  },
  { i: 'education-gpa', component: <Educations.Item title="학점" content={educationData.gpa} /> },
];

export const projectsGridItems: GridItem[] = [
  { i: 'projects', component: <Projects.Main /> },
  { i: 'navigator', component: <Navigator /> },
  ...projectsData.map((item) => ({
    i: `project-item-${item.id}`,
    component: <Projects.Item project={item} />,
  })),
];

export const skillsGridItems: GridItem[] = [
  { i: 'skills', component: <Skills.Main /> },
  { i: 'navigator', component: <Navigator /> },
  ...skillsData.map((item, index) => ({
    i: `skill-item-${index}`,
    component: <Skills.Item skill={item} />,
  })),
];

export const contactGridItems: GridItem[] = [
  { i: 'contact', component: <Contact.Main /> },
  { i: 'navigator', component: <Navigator /> },
  ...contactsData.map((item, index) => ({
    i: `contact-item-${index}`,
    component: <Contact.Item {...item} />,
  })),
];
