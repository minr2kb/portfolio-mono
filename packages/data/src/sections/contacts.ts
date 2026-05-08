import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { SiVelog } from 'react-icons/si';
import { ContactItemType } from '../types';

export const contactsData: ContactItemType[] = [
  {
    label: 'Email',
    value: 'kbmin1129@gmail.com',
    link: 'mailto:kbmin1129@gmail.com',
    icon: IoMail,
  },
  {
    label: 'Github',
    value: 'github.com/minr2kb',
    link: 'https://github.com/minr2kb',
    icon: FaGithub,
  },
  {
    label: 'Instagram',
    value: 'instagram.com/minr2_kb',
    link: 'https://instagram.com/minr2_kb',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kyungbae-min-5963a921b',
    link: 'https://linkedin.com/in/kyungbae-min-5963a921b',
    icon: FaLinkedin,
  },
  {
    label: 'Blog',
    value: 'velog.io/@minr2kb',
    link: 'https://velog.io/@minr2kb',
    icon: SiVelog,
  },
];
