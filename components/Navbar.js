import Link from "next/link";
import { ArrowRight, BookOpen, Code2, LayoutDashboard, Menu, Zap } from "lucide-react";

export default function Navbar() {
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050509]/75 backdrop-blur-xl">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
      <Link href="/home" className="flex items-center gap-3">
        <span className="icon-box h-9 w-9 rounded-xl"><Zap size={17}/></span>
        <span className="font-black tracking-tight">Archana<span className="text-violet-400">API</span></span>
      </Link>
      <div className="hidden items-center gap-1 text-sm text-zinc-400 md:flex">
        <Link className="rounded-xl px-3 py-2 hover:bg-white/5 hover:text-white" href="/apis"><Code2 size={15} className="mr-2 inline"/>APIs</Link>
        <Link className="rounded-xl px-3 py-2 hover:bg-white/5 hover:text-white" href="/docs"><BookOpen size={15} className="mr-2 inline"/>Docs</Link>
        <Link className="rounded-xl px-3 py-2 hover:bg-white/5 hover:text-white" href="/pricing">Pricing</Link>
        <Link className="rounded-xl px-3 py-2 hover:bg-white/5 hover:text-white" href="/dashboard"><LayoutDashboard size={15} className="mr-2 inline"/>Dashboard</Link>
      </div>
      <div className="flex items-center gap-2">
        <Link className="hidden rounded-xl px-3 py-2 text-sm text-zinc-400 hover:text-white sm:block" href="/login">Login</Link>
        <Link className="btn-primary min-h-10 px-4 text-sm" href="/register">Get started <ArrowRight size={15}/></Link>
      </div>
    </nav>
  </header>;
}
