import Media from '../components/Media.jsx';import {facilities} from '../data/content.js';
export default function Facilities(){return(<section id="facilities" className="sec bg-coal"><div className="wrap"><h2 className="h-display text-[clamp(2.6rem,6vw,5rem)]">Built for performance.</h2>
<div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{facilities.map((f,i)=>(<figure key={f.t}><Media src={f.src} tone={i} alt={f.t} className="aspect-[4/5] w-full"/>
<figcaption className="mt-4"><h3 className="font-display text-lg font-bold uppercase tracking-tight">{f.t}</h3><p className="mt-1 text-sm text-mute">{f.d}</p></figcaption></figure>))}</div></div></section>)}
