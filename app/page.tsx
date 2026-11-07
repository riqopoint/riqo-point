import Logo from "@/components/Logo";
import Approach from "@/components/Approach";
import Enquiry from "@/components/Enquiry";
import {SERVICES,INDUSTRIES,SPECIALISTS} from "@/lib/content";
const mail=process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const NAV=[["about","About"],["capabilities","Capabilities"],["industries","Industries"],["approach","Approach"],["model","Project model"],["cases","Case studies"],["contact","Contact"]];
const pts=[[40,60],[90,200],[160,40],[60,300],[250,330],[330,70],[360,250],[300,160],[120,130],[220,250],[200,90],[20,170]];
export default function Home(){
return(<>
<a href="#main" className="skip">Skip to content</a>
<header className="nav"><a href="#top" className="brand"><Logo/>RIQOPOINT</a>
<nav aria-label="Primary">{NAV.map(([h,l])=><a key={h} href={`#${h}`}>{l}</a>)}</nav></header>
<main id="main">
<section id="top" className="hero">
<div className="heroText"><h1>RIQOPOINT</h1><p className="tag">Solve What Matters.</p>
<p className="lead">An independent industrial R&amp;D and problem-solving company. We investigate technical failures and development challenges, bring in the right specialists and deliver evidence-based recommendations.</p>
<div className="cta"><a className="btn" href="#contact">Discuss your challenge</a><a className="btn ghost" href="#capabilities">Explore our capabilities</a></div>
<p className="riqo">Research. Innovation. Quality. Optimisation.</p></div>
<svg className="converge" viewBox="0 0 400 360" role="img" aria-label="Scattered problem points converging into one focused point">
{pts.map(([x,y],i)=><g key={i}><line x1={x} y1={y} x2="200" y2="180" className="ray" style={{animationDelay:`${i*0.12}s`}}/><circle cx={x} cy={y} r="4" className="pt"/></g>)}
<circle cx="200" cy="180" r="30" className="ring"/><circle cx="200" cy="180" r="9" className="core"/></svg>
</section>
<section id="about" className="sec about"><h2>The problem comes first.</h2>
<div className="cols"><p>Every industrial challenge deserves a scientific, structured approach. We do not sell a fixed menu of tests. We work out what is going on, decide what expertise and methods the problem needs, and take responsibility for the result.</p>
<p>RIQOPOINT is led by two PhD researchers with research and industrial consulting experience, including a pipe failure investigation using material characterisation. <span className="ph">[Founder names and biographies to be added]</span></p>
<p>We work asset-light. We coordinate external specialists and qualified laboratories under proper agreements, and we stay accountable for scope, technical quality and reporting. We do not promise guaranteed outcomes; we promise rigorous investigation and clearly defined deliverables.</p></div></section>
<section id="capabilities" className="sec dark"><h2>Capabilities</h2><p className="sub">Starting strengths, not limits. You do not need to know which service you need.</p>
<div className="svc">{SERVICES.map(s=><details key={s.id} name="svc" open={s.id==="failure"}><summary>{s.t}</summary>
<p>{s.d}</p><ul>{s.x.map(x=><li key={x}>{x}</li>)}</ul><a href="#contact" className="link">Discuss a related project</a></details>)}</div></section>
<section id="industries" className="sec"><h2>Industries</h2>
<p className="big">{INDUSTRIES.map((x,i)=><span key={x}>{x}{i<INDUSTRIES.length-1?", ":"."} </span>)}</p>
<p className="sub">We are organised around the technical challenge, not a fixed sector. Tell us the problem and we identify the expertise.</p></section>
<section id="approach" className="sec tint"><h2>Our approach</h2><Approach/></section>
<section id="model" className="sec"><h2>One point of contact, the right experts behind it.</h2>
<div className="model"><svg viewBox="0 0 420 340" role="img" aria-label="RIQOPOINT at the centre coordinating external specialists and laboratories">
{SPECIALISTS.map((s,i)=>{const a=(i/SPECIALISTS.length)*Math.PI*2-Math.PI/2;const x=210+Math.cos(a)*140,y=170+Math.sin(a)*115;return <g key={s}><line x1="210" y1="170" x2={x} y2={y} className="spoke"/><circle cx={x} cy={y} r="5" className="pt"/><text x={x} y={y+(y>170?22:-12)} textAnchor="middle">{s}</text></g>})}
<circle cx="210" cy="170" r="40" className="hub"/><text x="210" y="174" textAnchor="middle" className="hubt">RIQOPOINT</text></svg>
<div><p>Depending on the problem, we bring in specialists and testing facilities that fit it. A polymer degradation question gets a polymer specialist and the right lab work. A process problem gets a manufacturing engineer.</p>
<p>You deal with one team. We define the scope, coordinate the people and facilities, check the technical quality and deliver one report. External parties are engaged only through appropriate permissions and agreements.</p>
<p className="note">Growth path: build credibility with delivered projects, widen the specialist network, then add in-house capability where it is commercially justified.</p></div></div></section>
<section id="cases" className="sec tint"><h2>Case studies</h2>
<div className="empty"><p>Verified case studies will appear here once projects are approved for publication. Our experience includes an industrial pipe failure investigation using material characterisation; we publish no client details or results without permission.</p>
<a className="link" href="#contact">Be one of the first to work with us</a></div></section>
<section id="contact" className="sec dark contact"><div><h2>Discuss your challenge</h2>
<p className="sub">Request an initial assessment, enquire about an investigation or explore an R&amp;D collaboration.</p>
{mail?<p><a className="link" href={`mailto:${mail}`}>{mail}</a></p>:<p className="ph">[Contact email to be added]</p>}</div><Enquiry/></section>
</main>
<footer className="foot"><span className="brand"><Logo size={22}/>RIQOPOINT</span><span>Solve What Matters.</span><span className="ph">[Registered company details to be added]</span></footer>
</>)}
