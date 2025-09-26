export interface Category {
   image: string;
   alt: string;
   label: string;
   link: string;
}

export const CATEGORIES: Category[] = [
   {
      image: '/assets/icons/phone-icon.svg',
      alt: 'Phones',
      label: 'Smartphones',
      link: '/shop/phones',
   },
   {
      image: '/assets/icons/computer-icon.svg',
      alt: 'Computers',
      label: 'Computadores',
      link: '/shop/computers',
   },
   {
      image: '/assets/icons/tablet-icon.svg',
      alt: 'Tablets',
      label: 'Tablets',
      link: '/shop/tablets',
   },
   {
      image: '/assets/icons/tv-icon.svg',
      alt: 'TVs',
      label: 'Televisões',
      link: '/shop/tvs',
   },
   {
      image: '/assets/icons/drone-icon.svg',
      alt: 'Drones',
      label: 'Drones',
      link: '/shop/drones',
   },
   {
      image: '/assets/icons/camera-icon.svg',
      alt: 'Cameras',
      label: 'Câmaras',
      link: '/shop/cameras',
   },
   {
      image: '/assets/icons/headset-icon.svg',
      alt: 'Headsets',
      label: 'Headsets',
      link: '/shop/headsets',
   },
   {
      image: '/assets/icons/smart-icon.svg',
      alt: 'Smartwatches',
      label: 'Smartwatches',
      link: '/shop/smartwatches',
   },
   {
      image: '/assets/icons/console-icon.svg',
      alt: 'Consoles',
      label: 'Consoles',
      link: '/shop/consoles',
   },
   {
      image: '/assets/icons/printer-icon.svg',
      alt: 'Printers',
      label: 'Impressoras',
      link: '/shop/printers',
   },
];
