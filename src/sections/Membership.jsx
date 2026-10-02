import Button from '../components/Button.jsx';import {tiers} from '../data/content.js';
export default function Membership(){return(<section id="membership" className="sec"><div className="wrap"><h2 className="h-display text-[clamp(2.6rem,6vw,5rem)]">Your standard.</h2>
<p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-mute">Membership at FORGE is designed around your goals, your schedule, and your standard of performance.</p>
<div className="mt-14 grid gap-10 md:grid-cols-3">{tiers.map(t=>(<div key={t.t} className="border-t border-sage/40 pt-5"><h3 className="font-display text-2xl font-bold uppercase">{t.t}</h3><p className="mt-3 text-sm text-mute">{t.d}</p><a href="#contact" className="mt-5 inline-block text-[11px] uppercase tracking-[.2em] text-sage hover:text-bone">Enquire now →</a></div>))}</div>
<div className="mt-14"><Button href="#contact">Explore membership</Button></div></div></section>)}
