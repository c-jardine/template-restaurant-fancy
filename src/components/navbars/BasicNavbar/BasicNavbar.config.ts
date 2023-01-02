import { NavItem } from './BasicNavbar.types';

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Restaurant',
    children: [
      {
        label: 'From the kitchen',
        subLabel: 'Delicious food, pleasant atmosphere',
        href: '#',
      },
      {
        label: 'At the bar',
        subLabel: 'Spirits, craft beers, and seltzers',
        href: '#',
      },
      {
        label: 'Catering',
        subLabel: 'Let us make your event memorable',
        href: '#'
      }
    ],
  },
  {
    label: 'About us',
    href: '#',
  },
  {
    label: 'Contact',
    children: [
      {
        label: 'Contact us',
        subLabel: 'Get in touch with us',
        href: '#'
      },
      {
        label: 'Book a reservation',
        subLabel: 'Reserve a table online now',
        href: '#'
      },
      {
        label: 'Careers',
        subLabel: 'Browse job opening or send us your resume',
        href: '#'
      }
    ]
  },
];
