import { NavItem } from './BasicNavbar.types';

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Menus',
    children: [
      {
        label: 'From the kitchen',
        subLabel: 'Delicious food, pleasant atmosphere',
        href: '/menu',
      },
      {
        label: 'At the bar',
        subLabel: 'Spirits, craft beers, and seltzers',
        href: '/menu#drinks',
      },
      {
        label: 'Catering',
        subLabel: 'Let us make your event memorable',
        href: '/menu#catering',
      },
    ],
  },
  {
    label: 'About us',
    href: '/about',
  },
  {
    label: 'Contact',
    children: [
      {
        label: 'Contact us',
        subLabel: 'Get in touch with us',
        href: '/contact',
      },
      {
        label: 'Book a reservation',
        subLabel: 'Reserve a table online now',
        href: '#',
      },
      {
        label: 'Careers',
        subLabel: 'Browse job opening or send us your resume',
        href: '/careers',
      },
    ],
  },
];
