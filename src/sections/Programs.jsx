import {programs} from '../data/content.js';
export default function Programs(){return(<section id="programs" className="sec bg-coal"><div className="wrap"><h2 className="h-display text-[clamp(2.6rem,6vw,5rem)]">Train with purpose.</h2>
<ul className="mt-14 border-t border-bone/10">{programs.map(p=>(<li key={p.t} className="grid gap-2 border-b border-bone/10 py-6 md:grid-cols-2 md:items-center"><h3 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">{p.t}</h3><p className="text-mute md:text-right">{p.d}</p></li>))}</ul></div></section>)}
