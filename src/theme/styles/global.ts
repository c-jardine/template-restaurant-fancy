import localFont from '@next/font/local';
const proxima = localFont({ src: '../../../public/fonts/ProximaNova.otf' });

export const global = {
  'html, body': {
    bg: '#0e0d09',
    fontFamily: proxima.style.fontFamily,
    color: 'white',
  },
};
