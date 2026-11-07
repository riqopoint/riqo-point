import type {Metadata} from "next";
import "./globals.css";
const url=process.env.NEXT_PUBLIC_SITE_URL||"https://www.example.com";
export const metadata:Metadata={metadataBase:new URL(url),title:{default:"RIQOPOINT | Solve What Matters.",template:"%s | RIQOPOINT"},
description:"Independent industrial R&D, engineering and problem-solving. Failure analysis, materials, process development and electrochemical research, with the right specialists for each problem.",
openGraph:{title:"RIQOPOINT | Solve What Matters.",description:"Independent industrial R&D and technical problem-solving.",type:"website",url}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
