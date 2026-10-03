import { business } from '../data/business';

export default function Navigation() {
  return <header className="site-header">
    <a className="wordmark" href="#inicio" aria-label="GULA, inicio">GULA</a>
    <nav aria-label="Navegación principal">
      <a href="#carta">Los antojos</a>
      <a href="#visitanos">Dónde estamos</a>
      <a className="instagram-nav" href={business.instagram} target="_blank" rel="noreferrer">@tienesgula</a>
    </nav>
    <a className="header-directions" href={business.directions} target="_blank" rel="noreferrer">Cómo llegar</a>
  </header>;
}
