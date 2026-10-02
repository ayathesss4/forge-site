export default function Button({href='#contact',variant='solid',children,className=''}){
const v=variant==='solid'?'bg-bone text-ink hover:bg-sage hover:text-ink':'border border-bone/30 text-bone hover:border-sage hover:bg-em-900/40';
return <a href={href} className={`group inline-flex items-center gap-3 px-7 py-4 text-[11px] font-semibold uppercase tracking-[.2em] transition-colors duration-500 ${v} ${className}`}>{children}<span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1.5">→</span></a>}
