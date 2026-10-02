const tones=[
'radial-gradient(60% 50% at 70% 20%,rgba(79,143,114,.35),transparent 70%),linear-gradient(160deg,#101512,#050706)',
'radial-gradient(50% 60% at 20% 80%,rgba(15,81,61,.6),transparent 70%),linear-gradient(200deg,#0B0F0D,#050706)',
'radial-gradient(70% 40% at 50% 0%,rgba(22,79,58,.55),transparent 70%),linear-gradient(180deg,#101512,#0B0F0D)',
'radial-gradient(45% 55% at 80% 70%,rgba(79,143,114,.28),transparent 70%),linear-gradient(120deg,#0B0F0D,#050706)',
'radial-gradient(60% 60% at 30% 30%,rgba(11,61,46,.7),transparent 70%),linear-gradient(140deg,#101512,#050706)'];
export default function Media({eager,src,alt='',tone=0,className='',style}){
return src?<img src={src} alt={alt} loading={eager?'eager':'lazy'} decoding="async" className={`object-cover ${className}`} style={style}/>:
<div role="img" aria-label={alt||undefined} aria-hidden={alt?undefined:true} className={className} style={{background:tones[tone%tones.length],...style}}>
<div className="h-full w-full opacity-[.07]" style={{backgroundImage:'repeating-linear-gradient(90deg,#fff 0 1px,transparent 1px 80px)'}}/></div>}
