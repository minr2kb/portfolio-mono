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

export interface EduExpItemType {
  title: string;
  subtitle: string;
  logoSrc: string;
  descs: string[];
}
