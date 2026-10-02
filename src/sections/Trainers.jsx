import {trainers} from '../data/content.js';
export default function Trainers(){return(<section id="trainers" className="sec"><div className="wrap"><h2 className="h-display text-[clamp(2.6rem,6vw,5rem)]">Elite trainers.</h2>
<div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">{trainers.map(t=>(<div key={t.n} className="border-t border-sage/40 pt-5"><h3 className="font-display text-xl font-bold uppercase tracking-tight">{t.n}</h3><p className="mt-2 text-sm text-mute">{t.r}</p></div>))}</div></div></section>)}
