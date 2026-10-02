export function Plate({className='h-8 w-8'}){return(<svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor">
<circle cx="24" cy="24" r="21" strokeWidth="5"/><circle cx="24" cy="24" r="12.5" strokeWidth="1.5" opacity=".7"/><circle cx="24" cy="24" r="4" strokeWidth="3"/></svg>)}
export default function Logo({sub=true,size='text-2xl'}){return(<span className="inline-flex flex-col leading-none" aria-label="FORGE">
<span className={`h-display ${size} inline-flex items-center gap-[.04em]`} aria-hidden="true">F<Plate className="h-[.78em] w-[.78em] text-sage"/>RGE</span>
{sub&&<span className="mt-1.5 text-[8px] uppercase tracking-[.3em] text-mute">Performance &amp; Wellness Club</span>}</span>)}
