import { business } from '../data/business';

export default function Footer() {
  return <footer className="site-footer"><div className="footer-top"><a href="#inicio" className="wordmark" aria-label="GULA, volver al inicio">GULA</a><p>Un capricho y seguimos.</p><a href={business.instagram} target="_blank" rel="noreferrer">@tienesgula</a></div><div className="footer-bottom"><span>GULA · LOGROÑO</span><span>SIERVAS DE JESÚS, 2</span><a href="#carta">Los antojos</a><a href="#visitanos">Dónde estamos</a></div></footer>;
}
