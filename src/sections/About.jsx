import Media from '../components/Media.jsx';import {IMG} from '../data/images.js';
export default function About(){return(<section id="about" className="sec"><div className="wrap grid items-center gap-12 md:grid-cols-2 md:gap-20">
<div><h2 className="h-display text-[clamp(2.6rem,6vw,5rem)]">More than<br/>a gym.</h2><p className="mt-8 max-w-md text-lg font-light leading-relaxed text-mute">FORGE is a premium environment designed for people who take performance seriously. Train, recover and perform in one considered space.</p></div>
<Media src={IMG[4]} tone={1} alt="The FORGE training floor" className="aspect-[4/5] w-full"/></div></section>)}
