import { business } from '../data/business';
import { photos } from '../data/assets';
import BrandPhoto from './BrandPhoto';

export default function Location() {
  return <section id="visitanos" className="visit" aria-labelledby="visit-title"><div className="visit-heading"><span className="eyebrow">UNA PARADA EN LOGROÑO</span><h2 id="visit-title">Ven con<br />gula.</h2><p>Entre Gran Vía y Bretón de los Herreros.<br />El antojo te pilla de camino.</p></div>
    <div className="visit-details"><span className="eyebrow">AQUÍ ES</span><address>{business.street}<br /><span>{business.postalCode} {business.locality}, {business.region}</span></address><div className="visit-actions"><a className="button button-dark" href={business.directions} target="_blank" rel="noreferrer">Cómo llegar</a><a className="text-link" href={business.maps} target="_blank" rel="noreferrer">Ver en Google Maps</a></div>
      <div className="hours"><h3>¿A qué hora te pasas?</h3>{business.hours ? <dl>{business.hours.map(row => <div key={row.label}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl> : <p>Consulta el horario antes de venir.</p>}<a className="text-link" href={business.maps} target="_blank" rel="noreferrer">Consultar horarios en Maps</a></div>
    </div><div className="store-image"><BrandPhoto asset={photos.storefront} slot="gula-storefront" words={['SIERVAS', 'DE JESÚS', 'Nº 2.']} /><span>26001 / LOGROÑO</span></div></section>;
}
