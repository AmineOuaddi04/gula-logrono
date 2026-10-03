import BrandPhoto from './BrandPhoto';
import { business } from '../data/business';
import { photos } from '../data/assets';

export default function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-topline"><span>ANTOJOS, SIN MÁS.</span><span>LOGROÑO · SIERVAS DE JESÚS, 2</span></div>
    <div className="hero-poster">
      <h1 id="hero-title"><span>¿TIENES</span><span>GULA?</span></h1>
      <div className="hero-product">
        <BrandPhoto asset={photos.hero} slot="gula-cheesecake-hero" words={['ME', 'APE', 'TECE.']} priority />
        <span className="temptation-tag">NIVEL DE<br />TENTACIÓN: ALTO</span>
      </div>
      <div className="hero-caption"><span>01 / TARTAS</span><span>02 / FRESAS</span><span>03 / SOFT</span></div>
    </div>
    <div className="hero-bottom">
      <p>Tarta de queso, fresas y helado soft.<br /><strong>Un capricho y seguimos.</strong></p>
      <div className="hero-actions"><a className="button button-dark" href="#carta">Ver los antojos</a><a className="text-link" href={business.directions} target="_blank" rel="noreferrer">Cómo llegar</a></div>
      <span className="hero-scroll" aria-hidden="true">SIGUE.<span>↓</span></span>
    </div>
  </section>;
}
