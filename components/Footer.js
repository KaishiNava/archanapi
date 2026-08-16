import Link from "next/link";
import { BookOpen, Code2, Github, ShieldCheck, Zap } from "lucide-react";

export default function Footer() {
  return <footer className="border-t border-white/10">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <div className="flex items-center gap-3">
          <span className="icon-box h-9 w-9 rounded-xl"><Zap size={17}/></span>
          <b>ArchanaAPI</b>
        </div>
        <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500">Modern API infrastructure for developers, creators and SaaS products.</p>
      </div>
      <div><div className="mb-3 text-sm font-bold">Platform</div><div className="grid gap-2 text-sm text-zinc-500"><Link href="/apis">API Catalog</Link><Link href="/pricing">Pricing</Link><Link href="/dashboard">Dashboard</Link></div></div>
      <div><div className="mb-3 text-sm font-bold">Developers</div><div className="grid gap-2 text-sm text-zinc-500"><Link href="/docs"><BookOpen size={14} className="mr-1 inline"/>Documentation</Link><Link href="/apis"><Code2 size={14} className="mr-1 inline"/>API Reference</Link></div></div>
      <div><div className="mb-3 text-sm font-bold">Security</div><div className="grid gap-2 text-sm text-zinc-500"><span><ShieldCheck size={14} className="mr-1 inline"/>API key security</span><span>Supabase Auth</span></div></div>
    </div>
    <div className="border-t border-white/5 px-5 py-5 text-center text-xs text-zinc-600">© 2026 ArchanaAPI. Built for developers.</div>
  </footer>;
}
