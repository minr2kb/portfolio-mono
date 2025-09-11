import { ContactItemType } from '@/types';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

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
];
