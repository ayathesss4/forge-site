import Logo from '../components/Logo.jsx';import {footerLinks} from '../data/content.js';
export default function Footer(){return(<footer className="border-t border-bone/10 py-16"><div className="wrap grid gap-12 md:grid-cols-3 md:items-start">
<div><Logo size="text-3xl"/><p className="mt-4 text-[11px] uppercase tracking-[.2em] text-mute">Abu Dhabi</p></div>
<nav aria-label="Footer" className="grid grid-cols-2 gap-3">{footerLinks.map(([l,id])=>(<a key={id} href={'#'+id} className="text-[11px] uppercase tracking-[.2em] text-mute transition-colors hover:text-bone">{l}</a>))}</nav>
<div className="flex gap-3 md:justify-end">{['Instagram','Facebook','LinkedIn'].map(s=>(<a key={s} href="#top" aria-label={s} className="flex h-11 w-11 items-center justify-center border border-bone/20 text-[11px] font-semibold transition hover:border-sage hover:bg-em-900/40">{s.slice(0,2).toUpperCase()}</a>))}</div></div>
<p className="wrap mt-16 text-[10px] uppercase tracking-[.2em] text-mute">© 2026 FORGE. All rights reserved.</p></footer>)}
