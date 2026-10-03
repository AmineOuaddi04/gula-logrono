import type { PhotoAsset } from '../components/BrandPhoto';

// Set src only for photographs supplied/cleared by GULA.
// See public/images/README.md for exact crops and the responsive-image recipe.
export const photos: Record<string, PhotoAsset> = {
  hero: { src: null, alt: 'Porción de tarta de queso de GULA con salsa de pistacho en su bandeja amarilla', position: '50% 55%' },
  tartas: { src: null, alt: 'Una porción de tarta de queso en el envase amarillo de GULA' },
  fresas: { src: null, alt: 'Vaso de fresas de GULA con salsa y toppings' },
  soft: { src: null, alt: 'Helado soft servido en el vaso negro y amarillo de GULA' },
  novedades: { src: null, alt: 'Açaí de GULA con fruta y toppings' },
  storefront: { src: null, alt: 'Fachada de GULA en la calle Siervas de Jesús, 2, Logroño' },
};
