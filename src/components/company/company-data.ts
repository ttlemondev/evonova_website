export const company = {
  name: 'EVONOVA',
  legalName: 'EVONOVA LIMITED',
  url: 'https://evonova.tech',
  location: 'Hong Kong',
  // Keep contact channels hidden until the company's details are confirmed.
  email: '',
  phone: '',
  phoneHref: '',
} as const;

export const products = {
  pokevid: {
    name: 'PokeVid',
    icon: '/images/products/pokevid-icon.webp',
  },
  ipulse: {
    name: 'iPulse',
    icon: '/images/products/ipulse-icon.webp',
  },
} as const;
