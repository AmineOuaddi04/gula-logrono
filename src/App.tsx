import Navigation from './components/Navigation';
import Hero from './components/Hero';
import { business } from './data/business';
import Menu from './components/Menu';
import Builder from './components/Builder';
import Social from './components/Social';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><div id="inicio" />
    <Navigation /><main id="contenido"><Hero /><Menu /><Builder /><Social /><Location /></main><Footer />
    <nav className="mobile-actions" aria-label="Acciones rápidas"><a href="#carta">Los antojos</a><a href={business.directions} target="_blank" rel="noreferrer">Cómo llegar</a></nav></>;
}
