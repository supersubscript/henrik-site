import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Intro', href: getPermalink('/') },
    { text: 'CV', href: getPermalink('/cv') },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:hello@example.com' },
  ],
  footNote: '',
};
