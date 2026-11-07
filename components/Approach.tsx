"use client";
import {useState} from "react";
import {STAGES} from "@/lib/content";
export default function Approach(){const[i,setI]=useState(0);return(
<div className="approach">
<div role="tablist" aria-label="Project stages" className="stages">{STAGES.map((s,k)=>(
<button key={s.n} role="tab" aria-selected={k===i} className={k<=i?"on":""} onClick={()=>setI(k)}><span className="dot"/>{s.n}</button>))}</div>
<div role="tabpanel" className="stagepanel" key={i}><h3>{i+1}. {STAGES[i].n}</h3><p>{STAGES[i].d}</p></div>
</div>)}
