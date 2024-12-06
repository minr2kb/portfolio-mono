import { Layout } from 'react-grid-layout';
import { experiencesData, introData, projectsData, skillsData } from './sectionData';

export const defaultLayouts: Record<string, Layout[]> = {
  sm: [
    { i: 'introduction', x: 0, y: 0, w: 1, h: 2 },
    { i: 'projects', x: 1, y: 0, w: 1, h: 1 },
    { i: 'educations', x: 1, y: 1, w: 1, h: 1 },
    { i: 'greeting', x: 0, y: 2, w: 2, h: 1 },
    { i: 'experiences', x: 0, y: 3, w: 2, h: 1 },
    { i: 'skills', x: 0, y: 3, w: 1, h: 2 },
    { i: 'navigator', x: 1, y: 4, w: 1, h: 1 },
    { i: 'contact', x: 1, y: 5, w: 1, h: 1 },
  ],
  md: [
    { i: 'introduction', x: 0, y: 0, w: 1, h: 2 },
    { i: 'projects', x: 1, y: 0, w: 1, h: 1 },
    { i: 'educations', x: 2, y: 0, w: 1, h: 1 },
    { i: 'greeting', x: 1, y: 1, w: 2, h: 1 },
    { i: 'contact', x: 0, y: 2, w: 1, h: 1 },
    { i: 'navigator', x: 1, y: 2, w: 1, h: 1 },
    { i: 'experiences', x: 0, y: 3, w: 2, h: 1 },
    { i: 'skills', x: 2, y: 2, w: 1, h: 2 },
  ],
  lg: [
    { i: 'introduction', x: 0, y: 0, w: 1, h: 2 },
    { i: 'projects', x: 1, y: 0, w: 1, h: 1 },
    { i: 'educations', x: 2, y: 0, w: 1, h: 1 },
    { i: 'greeting', x: 1, y: 1, w: 2, h: 1 },
    { i: 'skills', x: 3, y: 0, w: 1, h: 2 },
    { i: 'contact', x: 3, y: 2, w: 1, h: 1 },
    { i: 'navigator', x: 2, y: 2, w: 1, h: 1 },
    { i: 'experiences', x: 0, y: 2, w: 2, h: 1 },
  ],
};

export const introductionLayouts: Record<string, Layout[]> = {
  sm: [
    { i: 'introduction', x: 0, y: 0, w: 1, h: 1 },
    { i: 'navigator', x: 1, y: 0, w: 1, h: 1 },
    ...introData.map((_, index) => ({
      i: `introduction-item-${index}`,
      x: 0,
      y: 1 + index * 2,
      w: 2,
      h: 2,
    })),
  ],
  md: [
    { i: 'introduction', x: 0, y: 0, w: 1, h: 2 },
    { i: 'navigator', x: 0, y: 2, w: 1, h: 1 },
    ...introData.map((_, index) => ({
      i: `introduction-item-${index}`,
      x: 1,
      y: index,
      w: 2,
      h: 1,
    })),
  ],
  lg: [
    { i: 'introduction', x: 0, y: 0, w: 1, h: 2 },
    { i: 'navigator', x: 0, y: 2, w: 1, h: 1 },
    ...introData.map((_, index) => ({
      i: `introduction-item-${index}`,
      x: 1,
      y: index,
      w: 3,
      h: 1,
    })),
  ],
};

export const experiencesLayouts: Record<string, Layout[]> = {
  sm: [
    { i: 'experiences', x: 0, y: 0, w: 2, h: 1 },
    { i: 'navigator', x: 0, y: 1, w: 2, h: 1 },
    ...experiencesData.map((_, index) => ({
      i: `experience-item-${index}`,
      x: 0,
      y: 2 + index * 2,
      w: 2,
      h: 2,
    })),
  ],
  md: [
    { i: 'experiences', x: 0, y: 0, w: 2, h: 1 },
    { i: 'navigator', x: 2, y: 0, w: 1, h: 1 },
    ...experiencesData.map((_, index) => ({
      i: `experience-item-${index}`,
      x: 0,
      y: 1 + index,
      w: 3,
      h: 1,
    })),
  ],
  lg: [
    { i: 'experiences', x: 0, y: 0, w: 1, h: 1 },
    { i: 'navigator', x: 1, y: 0, w: 1, h: 1 },
    ...experiencesData.map((_, index) => ({
      i: `experience-item-${index}`,
      x: 2 * ((index + 1) % 2),
      y: 1 + Math.floor(index / 2),
      w: 2,
      h: 1,
    })),
  ],
};

export const educationsLayouts: Record<string, Layout[]> = {
  sm: [
    { i: 'educations', x: 0, y: 0, w: 1, h: 1 },
    { i: 'navigator', x: 1, y: 0, w: 1, h: 1 },
    { i: 'education-school', x: 0, y: 1, w: 2, h: 1 },
    { i: 'education-major', x: 0, y: 2, w: 1, h: 1 },
    { i: 'education-minor', x: 1, y: 2, w: 1, h: 1 },
    { i: 'education-gpa', x: 0, y: 3, w: 1, h: 1 },
    { i: 'education-logo', x: 1, y: 3, w: 1, h: 1 },
  ],
  md: [
    { i: 'educations', x: 0, y: 0, w: 1, h: 1 },
    { i: 'navigator', x: 1, y: 0, w: 2, h: 1 },
    { i: 'education-school', x: 0, y: 1, w: 2, h: 1 },
    { i: 'education-major', x: 0, y: 2, w: 1, h: 1 },
    { i: 'education-minor', x: 1, y: 2, w: 1, h: 1 },
    { i: 'education-gpa', x: 2, y: 2, w: 1, h: 1 },
    { i: 'education-logo', x: 2, y: 1, w: 1, h: 1 },
  ],
  lg: [
    { i: 'educations', x: 0, y: 0, w: 1, h: 1 },
    { i: 'navigator', x: 1, y: 0, w: 1, h: 1 },
    { i: 'education-school', x: 2, y: 0, w: 2, h: 1 },
    { i: 'education-major', x: 0, y: 1, w: 1, h: 1 },
    { i: 'education-minor', x: 1, y: 1, w: 1, h: 1 },
    { i: 'education-gpa', x: 2, y: 1, w: 1, h: 1 },
    { i: 'education-logo', x: 3, y: 1, w: 1, h: 1 },
  ],
};

export const skillsLayouts: Record<string, Layout[]> = {
  sm: [
    { i: 'skills', x: 0, y: 0, w: 1, h: 1 },
    { i: 'navigator', x: 1, y: 0, w: 1, h: 1 },
    ...skillsData.map((_, index) => ({
      i: `skill-item-${index}`,
      x: index % 2,
      y: 1 + Math.floor(index / 2),
      w: 1,
      h: 1,
    })),
  ],
  md: [
    { i: 'skills', x: 0, y: 0, w: 1, h: 2 },
    { i: 'navigator', x: 0, y: 2, w: 1, h: 1 },
    ...skillsData.map((_, index) => ({
      i: `skill-item-${index}`,
      x: 1 + (index % 2),
      y: Math.floor(index / 2),
      w: 1,
      h: 1,
    })),
  ],
  lg: [
    { i: 'skills', x: 0, y: 0, w: 1, h: 2 },
    { i: 'navigator', x: 0, y: 2, w: 1, h: 1 },
    ...skillsData.map((_, index) => ({
      i: `skill-item-${index}`,
      x: 1 + (index % 3),
      y: Math.floor(index / 3),
      w: 1,
      h: 1,
    })),
  ],
};

export const projectsLayouts: Record<string, Layout[]> = {
  sm: [
    { i: 'projects', x: 0, y: 0, w: 1, h: 1 },
    { i: 'navigator', x: 1, y: 0, w: 1, h: 1 },
    ...projectsData.map((item, index) => ({
      i: `project-item-${item.id}`,
      x: 0,
      y: 1 + index,
      w: 2,
      h: 1,
    })),
  ],
  md: [
    { i: 'projects', x: 0, y: 0, w: 1, h: 1 },
    { i: 'navigator', x: 0, y: 1, w: 1, h: 1 },
    ...projectsData.map((item, index) => ({
      i: `project-item-${item.id}`,
      x: 1,
      y: index,
      w: 2,
      h: 1,
    })),
  ],
  lg: [
    { i: 'projects', x: 0, y: 0, w: 1, h: 1 },
    { i: 'navigator', x: 1, y: 0, w: 1, h: 1 },
    ...projectsData.map((item, index) => ({
      i: `project-item-${item.id}`,
      x: ((index + 1) % 2) * 2,
      y: Math.ceil(index / 2),
      w: 2,
      h: 1,
    })),
  ],
};
