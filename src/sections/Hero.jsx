import Media from '../components/Media.jsx';import Button from '../components/Button.jsx';import {IMG} from '../data/images.js';
export default function Hero(){return(<section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
<Media src={IMG[5]} eager tone={0} alt="FORGE training floor overlooking the Abu Dhabi waterfront" className="absolute inset-0 h-full w-full" style={{objectPosition:'50% 62%',filter:'brightness(.6) saturate(.9)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20"/>
<div className="wrap relative pb-20 pt-40"><p className="label">Abu Dhabi · UAE</p>
<h1 className="h-display mt-5 text-[clamp(3.4rem,11vw,9rem)]">Built<br/>different.</h1>
<p className="mt-8 max-w-md text-lg font-light leading-relaxed text-bone/80">A private fitness environment built around performance, recovery, and a higher standard of living.</p>
<div className="mt-10 flex flex-col gap-3 sm:flex-row"><Button href="#contact">Book a private tour</Button><Button href="#about" variant="ghost">Explore the club</Button></div></div></section>)}
