export type CategoryId = 'tartas' | 'fresas' | 'soft' | 'novedades';
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price?: number;
  pricePrefix?: string;
  currency?: 'EUR';
  soldOut?: boolean;
  seasonal?: boolean;
  options?: string[];
  source: string;
};
export type Category = {
  id: CategoryId;
  label: string;
  number: string;
  headline: string[];
  intro: string;
  art: string[];
  items: MenuItem[];
};
export const categories: Category[] = [
  {
    id: 'tartas', label: 'Tartas', number: '01', headline: ['UN POCO.', 'O TODA.'],
    intro: 'Una porción para ese «me apetece algo». Una entera cuando el antojo viene acompañado.', art: ['QUESO.', 'Y YA.'],
    items: [
      { id: 'porcion', name: 'Porción de tarta de queso', description: 'Elige tu porción y añádele tu toque.', price: 1, pricePrefix: 'desde', currency: 'EUR', options: ['Salsas y toppings a elegir en tienda'], source: 'https://www.instagram.com/tienesgula/' },
      { id: 'entera', name: 'Tarta de queso entera', description: 'Para compartir. O para tener otro trozo cerca.', source: 'https://www.instagram.com/tienesgula/' },
    ],
  },
  {
    id: 'fresas', label: 'Fresas', number: '02', headline: ['CON BIEN', 'DE SALSA.'],
    intro: 'Fresas en vaso, salsa y toppings. El orden es fácil. Elegir cuánto te gusta el pistacho, ya menos.', art: ['FRE', 'SAS.'],
    items: [{ id: 'vaso-fresas', name: 'Vaso de fresas', description: 'Con chocolate, pistacho o las opciones disponibles en tienda.', options: ['Personalízalo con salsa y toppings'], source: 'https://nuevecuatrouno.com/2026/08/13/gula-apuesta-por-la-fresa-de-la-rioja-y-los-proveedores-locales-con-nuevas-propuestas-para-este-verano/' }],
  },
  {
    id: 'soft', label: 'Soft', number: '03', headline: ['SOFT.', 'MUY SOFT.'],
    intro: 'Helado estilo italiano. Tú decides cómo rematarlo. Y sí, también apetece cuando acaba el verano.', art: ['SO', 'FT.'],
    items: [{ id: 'helado-soft', name: 'Helado soft', description: 'En vaso, con tus salsas y toppings a elegir.', options: ['Pregunta por la combinación del día'], source: 'https://www.instagram.com/tienesgula/p/DdvxVwnjJTq/' }],
  },
  {
    id: 'novedades', label: 'Otros antojos', number: '04', headline: ['HOY,', '¿AÇAÍ?'],
    intro: 'Hay más vida después de la tarta. Las nuevas incorporaciones se cuentan primero en Instagram.', art: ['A', 'ÇAÍ.'],
    items: [{ id: 'acai', name: 'Açaí', description: 'Con fruta y toppings. Consulta las combinaciones en tienda.', source: 'https://www.instagram.com/tienesgula/reel/Dc3H123MTj9/' }],
  },
];

export const baseOptions = [
  { id: 'tarta', label: 'Tarta', photo: 'tartas', art: ['TAR', 'TA.'] },
  { id: 'fresas', label: 'Fresas', photo: 'fresas', art: ['FRE', 'SAS.'] },
  { id: 'soft', label: 'Soft', photo: 'soft', art: ['SO', 'FT.'] },
];
// Demonstration of documented options, not an ordering or availability system.
export const sauceOptions = [
  { id: 'chocolate', label: 'Chocolate', color: '#4e3026' },
  { id: 'pistacho', label: 'Pistacho', color: '#bdce78' },
];
