# GULA image slots

The page deliberately contains no downloaded press or Instagram photographs. Their reuse rights were not available. Replace the `null` entries in `src/data/assets.ts` with GULA-supplied, approved files; the typography treatment is the built-in fallback.

| Slot | Recommended image | Crop |
| --- | --- | --- |
| `hero` | Close cheesecake portion in GULA's yellow tray | Portrait 4:5; leave the upper edge clear for the packaging label |
| `tartas` | Single cheesecake portion with visible texture and tray | Portrait 4:5 |
| `fresas` | Strawberry cup with GULA branding, sauce visible | Portrait 4:5 |
| `soft` | Soft-serve tub with GULA branding | Portrait 4:5 |
| `novedades` | Current rotating item, if confirmed | Portrait 4:5 |
| `storefront` | Street-level shop entrance | Landscape 16:5 |

Export each photograph as AVIF and/or WebP with a 600/1000/1600px responsive set. Set `src`, optional `srcSet`, `position`, and accurate `alt` in `src/data/assets.ts`. The source component handles eager loading for the hero and lazy loading for other slots.
