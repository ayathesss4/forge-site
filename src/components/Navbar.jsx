import {useEffect,useState} from 'react';import Logo from './Logo.jsx';import {nav} from '../data/content.js';
export default function Navbar(){const [s,setS]=useState(false),[o,setO]=useState(false);
useEffect(()=>{const f=()=>setS(scrollY>40);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
useEffect(()=>{const k=e=>e.key==='Escape'&&setO(false);addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[]);
return(<header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${s||o?'bg-ink/85 backdrop-blur-md':''}`}>
<div className="wrap flex h-[72px] items-center justify-between"><a href="#top" aria-label="FORGE home"><Logo sub={false} size="text-[22px]"/></a>
<nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">{nav.map(([l,id])=>(<a key={id} href={'#'+id} className="text-[11px] uppercase tracking-[.2em] text-mute transition-colors hover:text-bone">{l}</a>))}</nav>
<div className="flex items-center gap-4"><a href="#contact" className="hidden border border-bone/30 px-5 py-3 text-[11px] font-semibold uppercase tracking-[.2em] transition hover:border-sage sm:block">Book a tour</a>
<button className="px-2 py-2 text-[11px] uppercase tracking-[.2em] lg:hidden" aria-expanded={o} onClick={()=>setO(!o)}>{o?'Close':'Menu'}</button></div></div>
{o&&<nav aria-label="Mobile" className="wrap flex flex-col gap-5 pb-8 pt-2 lg:hidden">{nav.map(([l,id])=>(<a key={id} href={'#'+id} onClick={()=>setO(false)} className="h-display text-3xl">{l}</a>))}<a href="#contact" onClick={()=>setO(false)} className="label text-sage">Book a tour →</a></nav>}</header>)}
