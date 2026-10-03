import { useState } from 'react';
import { socialPosts } from '../data/social';
import { business } from '../data/business';

export default function Social() {
  const [showPost, setShowPost] = useState(false);
  return <section id="instagram" className="social-section" aria-labelledby="social-title"><div className="social-heading"><span className="eyebrow">DEL FEED A LA CUCHARA</span><h2 id="social-title">Se ve.<br />Se antoja.</h2><a className="social-handle" href={business.instagram} target="_blank" rel="noreferrer">@tienesgula</a><p>Lo que estamos liando, las novedades<br />y ese antojo que aún no sabías que tenías.</p></div>
    <div className="social-content"><div className={`instagram-stage${showPost ? ' is-loaded' : ''}`}>
      {showPost ? <iframe src="https://www.instagram.com/p/DdvxVwnjJTq/embed/" title="Publicación de GULA del 26 de septiembre: tartas, helado y fresas" loading="lazy" allow="encrypted-media" referrerPolicy="strict-origin-when-cross-origin" /> : <div className="instagram-cover"><span className="eyebrow">EN EL INSTAGRAM DE GULA</span><p>BIEN<br />DE<br />GULA.</p><button className="button button-yellow" type="button" onClick={() => setShowPost(true)}>Ver la publicación aquí</button></div>}
      <a className="embed-original" href={socialPosts[0].url} target="_blank" rel="noreferrer">Abrir la publicación en Instagram</a>
    </div><div className="social-list">{socialPosts.map(post => <a className="social-row" key={post.id} href={post.url} target="_blank" rel="noreferrer"><time dateTime={post.datetime}>{post.date}</time><span><small>{post.category}</small><strong>{post.title}</strong></span><span className="social-open">Ver publicación</span></a>)}</div></div>
  </section>;
}
