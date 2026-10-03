# GULA Logroño

Mobile-first single-page website for the dessert shop at C. Siervas de Jesús, 2, Logroño. Built with React, TypeScript and Vite.

## Run

```sh
npm install
npm run dev
```

`npm run build` checks TypeScript, bundles the site, and generates canonical, schema.org, robots and sitemap metadata in `dist`. `npm run preview` serves the production build locally. Set `SITE_URL` to the final domain when building for a different origin.

## Verified content and remaining inputs

- The three core product groups, address and Melt relationship were checked against [NueveCuatroUno's March interview](https://nuevecuatrouno.com/2026/03/17/gastronomia-gula-logrono-apertura-tartas-queso-vasos-fresas-helado/).
- The official [@tienesgula Instagram bio](https://www.instagram.com/tienesgula/) still showed cheesecake portions from €1 on 3 October 2026. Other prices are omitted.
- [GULA's September 2026 carousel](https://www.instagram.com/tienesgula/p/DdvxVwnjJTq/) shows the three core families. The site provides an official Instagram embed on demand and direct post links, without downloading its media.
- [NueveCuatroUno's August coverage](https://nuevecuatrouno.com/2026/08/13/gula-apuesta-por-la-fresa-de-la-rioja-y-los-proveedores-locales-con-nuevas-propuestas-para-este-verano/) supports the pistachio/chocolate strawberry options. Exact toppings vary and are confirmed in store.
- The current opening hours could not be verified without logging into the shop's Instagram highlight. `src/data/business.ts` leaves them unset and links to Maps.
- Supply approved product/storefront photography and the official logo before final public release. See `public/images/README.md` and `src/data/assets.ts`.
- Confirm the current assortment, toppings, prices, hours and final domain with GULA before a public launch. No review ratings, customer quotations, phone number or delivery services have been invented.

The visual system borrows the shop's yellow-and-black tile/packaging language. This is an independent web treatment, not a reproduction of the official wordmark.
