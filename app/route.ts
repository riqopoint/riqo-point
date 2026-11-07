import {NextResponse} from "next/server";
export const runtime="nodejs";
const hits=new Map<string,number[]>();
export async function POST(req:Request){
const fd=await req.formData();
if(String(fd.get("website")||""))return NextResponse.json({ok:true});
const ip=req.headers.get("x-forwarded-for")?.split(",")[0]||"x";const now=Date.now();
const rec=(hits.get(ip)||[]).filter(t=>now-t<600000);if(rec.length>=5)return NextResponse.json({error:"Too many enquiries. Please try later."},{status:429});
hits.set(ip,[...rec,now]);
const g=(k:string)=>String(fd.get(k)||"").trim();
const d={name:g("name"),org:g("org"),email:g("email"),industry:g("industry"),type:g("type"),message:g("message")};
if(!d.name||!d.org||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)||!d.industry||!d.type||d.message.length<20)
return NextResponse.json({error:"Please complete all fields with a valid email and a description of at least 20 characters."},{status:400});
const {RESEND_API_KEY:k,ENQUIRY_TO_EMAIL:to,ENQUIRY_FROM_EMAIL:from}=process.env;
if(!k||!to||!from)return NextResponse.json({error:"Enquiry delivery is not configured yet. Please email us directly."},{status:503});
const r=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${k}`,"Content-Type":"application/json"},
body:JSON.stringify({from,to:[to],reply_to:d.email,subject:`RIQOPOINT enquiry: ${d.org} (${d.type})`,text:Object.entries(d).map(([a,b])=>`${a}: ${b}`).join("\n")})});
if(!r.ok)return NextResponse.json({error:"Could not send your enquiry. Please try again or email us."},{status:502});
return NextResponse.json({ok:true});}
