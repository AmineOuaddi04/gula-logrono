import { useState } from 'react';
import { categories, type CategoryId } from '../data/menu';
import { photos } from '../data/assets';
import { business } from '../data/business';
import BrandPhoto from './BrandPhoto';

export default function Menu() {
  const [selected, setSelected] = useState<CategoryId>('tartas');
  const category = categories.find(c => c.id === selected)!;
  return <section id="carta" className="menu-section" aria-labelledby="menu-title">
    <div className="section-heading"><div><span className="eyebrow">LO QUE TE HA TRAÍDO HASTA AQUÍ</span><h2 id="menu-title">Hoy se peca.</h2></div><p>Tartas, fresas, soft.<br />¿Por cuál empezamos?</p></div>
    <nav className="category-selector" aria-label="Categorías de antojos">{categories.map(c => <button key={c.id} type="button" aria-pressed={selected === c.id} aria-controls="menu-content" onClick={() => setSelected(c.id)}><span>{c.number}</span>{c.label}<span className="selection-mark" aria-hidden="true">+</span></button>)}</nav>
    <div className={`product-spread product-${selected}`} id="menu-content" aria-live="polite" aria-atomic="true">
      <div className="product-visual"><BrandPhoto asset={photos[selected]} slot={`gula-${selected}`} words={category.art} /><span className="product-number" aria-hidden="true">{category.number}</span><span className="product-photo-label">GULA / {category.label.toUpperCase()}</span></div>
      <div className="product-copy"><span className="eyebrow">{category.number} / {category.label.toUpperCase()}</span><h3>{category.headline.map(line => <span key={line}>{line}</span>)}</h3><p className="product-intro">{category.intro}</p>
        <div className="menu-items">{category.items.map(item => <article key={item.id} className={`menu-item${item.soldOut ? ' is-sold-out' : ''}`}><div className="menu-item-heading"><h4>{item.name}</h4>{item.price !== undefined && <span className="price"><small>{item.pricePrefix}</small>{new Intl.NumberFormat('es-ES', { style: 'currency', currency: item.currency ?? 'EUR', maximumFractionDigits: 0 }).format(item.price)}</span>}</div><p>{item.description}</p>{item.options?.map(option => <span className="menu-option" key={option}>+ {option}</span>)}{item.soldOut && <span className="menu-status">Agotado</span>}{item.seasonal && <span className="menu-status">De temporada</span>}</article>)}</div>
        <p className="menu-note">Precios, sabores y disponibilidad del día, en tienda.</p>
        <a className="text-link" href={selected === 'novedades' ? 'https://www.instagram.com/tienesgula/reel/Dc3H123MTj9/' : '#tu-gula'}>{selected === 'novedades' ? 'Ver el açaí en Instagram' : 'Piensa tu combinación'}</a>
      </div>
    </div>
    <div className="whole-cake-line"><span>¿EL ANTOJO ES PARA COMPARTIR?</span><p>También hay tartas enteras.</p><a href={business.instagram} className="text-link" target="_blank" rel="noreferrer">Pregúntanos en Instagram</a></div>
  </section>;
}
