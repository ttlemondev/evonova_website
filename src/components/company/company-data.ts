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
    store: 'https://play.google.com/store/apps/details?id=com.poke.ai.video.gen&hl=en',
    icon: '/images/products/pokevid-icon.webp',
  },
  ipulse: {
    name: 'iPulse',
    store: 'https://apps.apple.com/tw/app/ipulse-heart-rate/id6755516849?l=en-GB',
    icon: '/images/products/ipulse-icon.webp',
  },
} as const;
