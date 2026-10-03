import { useState } from 'react';
import { baseOptions, sauceOptions } from '../data/menu';
import { photos } from '../data/assets';
import { business } from '../data/business';
import BrandPhoto from './BrandPhoto';

export default function Builder() {
  const [base, setBase] = useState('tarta');
  const [sauce, setSauce] = useState('pistacho');
  const [finish, setFinish] = useState('tal-cual');
  const chosenBase = baseOptions.find(b => b.id === base)!;
  const chosenSauce = sauceOptions.find(s => s.id === sauce)!;
  const selection = `${chosenBase.label} + ${chosenSauce.label.toLowerCase()}${finish === 'topping' ? ' + un topping' : ''}`;
  return <section id="tu-gula" className="builder" aria-labelledby="builder-title">
    <div className="builder-heading"><span className="eyebrow">A TU MANERA</span><h2 id="builder-title">Tú eliges<br />cómo liarla.</h2><p>Una idea para tu próxima visita.</p></div>
    <div className="builder-workspace"><form className="builder-controls" onSubmit={e => e.preventDefault()}>
      <fieldset><legend><span>01</span> Elige tu base</legend><div className="choices">{baseOptions.map(b => <label key={b.id}><input type="radio" name="base" value={b.id} checked={base === b.id} onChange={() => setBase(b.id)} /><span>{b.label}</span></label>)}</div></fieldset>
      <fieldset><legend><span>02</span> Añade tu salsa</legend><div className="choices">{sauceOptions.map(s => <label key={s.id}><input type="radio" name="salsa" value={s.id} checked={sauce === s.id} onChange={() => setSauce(s.id)} /><span><i className="sauce-swatch" style={{ background: s.color }} aria-hidden="true" />{s.label}</span></label>)}</div></fieldset>
      <fieldset><legend><span>03</span> Remátalo</legend><div className="choices"><label><input type="radio" name="remate" value="tal-cual" checked={finish === 'tal-cual'} onChange={() => setFinish('tal-cual')} /><span>Tal cual</span></label><label><input type="radio" name="remate" value="topping" checked={finish === 'topping'} onChange={() => setFinish('topping')} /><span>Con topping</span></label></div><p className="field-note">El topping concreto lo eliges en tienda.</p></fieldset>
      <button className="reset-builder" type="button" onClick={() => { setBase('tarta'); setSauce('pistacho'); setFinish('tal-cual'); }}>Volver a empezar</button>
    </form>
    <div className={`combination-preview sauce-${sauce} finish-${finish}`}><div className="combination-art"><BrandPhoto asset={photos[chosenBase.photo]} slot={`builder-${base}-${sauce}`} words={chosenBase.art} /><span className="sauce-word" aria-hidden="true">+ {chosenSauce.label}</span>{finish === 'topping' && <span className="topping-word" aria-hidden="true">+ TOPPING</span>}</div><div className="combination-receipt"><span className="eyebrow">TU ANTOJO TIENE NOMBRE</span><p className="combination-summary" role="status" aria-live="polite" aria-atomic="true">{selection}</p><span className="receipt-note">Salsas, toppings y precio se confirman en tienda.</span></div></div></div>
    <div className="builder-bottom"><p>Ya lo estás pensando.<br /><strong>Ahora solo falta pasarte.</strong></p><a className="button button-yellow" href={business.directions} target="_blank" rel="noreferrer">Vamos a GULA</a></div>
  </section>;
}
