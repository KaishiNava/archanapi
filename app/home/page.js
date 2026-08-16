import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, Check, Code2, Gauge, KeyRound, Layers3, LockKeyhole, Server, ShieldCheck, Sparkles, Terminal } from "lucide-react";

const features = [
  [Code2, "Real REST APIs", "Build a clean API layer for your scrapers and developer services."],
  [KeyRound, "Secure API Keys", "Per-user live keys with server-side hashing and revocation."],
  [Gauge, "Usage Analytics", "Track endpoint, status code, latency and API-key activity."],
  [ShieldCheck, "Role & Access", "FREE, PREMIUM, ENTERPRISE and OWNER permissions are built in."],
  [Layers3, "API Catalog", "Manage your growing API collection from one admin workspace."],
  [BookOpen, "Developer Docs", "Every endpoint can have a dedicated, readable documentation page."]
];

export default function Home() {
  return <>
    <Navbar />
    <main className="grid-bg overflow-hidden">
      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="badge mx-auto">
            <Sparkles size={14} />
            Developer-first API infrastructure
          </div>
          <h1 className="mt-7 text-5xl font-black tracking-[-.04em] md:text-7xl">
            Ship APIs faster.<br />
            <span className="text-gradient">Scale without friction.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            ArchanaAPI is a modern SaaS platform for publishing REST APIs,
            managing keys, tracking usage and giving developers a polished
            experience from one dashboard.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/register" className="btn-primary">
              Start building <ArrowRight size={17} />
            </Link>
            <Link href="/docs" className="btn-secondary">
              Explore documentation <BookOpen size={17} />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-zinc-500">
            <span className="flex items-center gap-2"><Check size={14} className="text-emerald-400"/> Supabase Auth</span>
            <span className="flex items-center gap-2"><Check size={14} className="text-emerald-400"/> API key security</span>
            <span className="flex items-center gap-2"><Check size={14} className="text-emerald-400"/> Usage logging</span>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="glass-premium overflow-hidden rounded-3xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70"/>
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70"/>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70"/>
              <span className="ml-3 font-mono text-xs text-zinc-500">archana-api / terminal</span>
            </div>
            <div className="grid md:grid-cols-[1fr_1fr]">
              <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
                <div className="mb-4 flex items-center gap-2 text-sm text-zinc-400"><Terminal size={15}/> Request</div>
                <pre className="code-block">{`curl https://archanapi.eu.cc/api/v1/health

-H "Authorization: Bearer arca_live_••••"`}</pre>
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-2 text-sm text-zinc-400"><Server size={15}/> Response</div>
                <pre className="code-block text-emerald-300">{`{
  "status": true,
  "code": 200,
  "data": {
    "service": "ArchanaAPI",
    "status": "online"
  }
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["01", "Create", "Create an account and generate your first API key."],
            ["02", "Connect", "Call your REST endpoints from any app or backend."],
            ["03", "Scale", "Publish more APIs and manage everything from Admin."]
          ].map(([n,t,d]) => <div key={n} className="glass card-hover rounded-2xl p-6">
            <div className="text-xs font-bold text-violet-400">{n}</div>
            <h3 className="mt-3 text-xl font-bold">{t}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">{d}</p>
          </div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="max-w-2xl">
          <div className="badge"><Layers3 size={14}/> Platform</div>
          <h2 className="mt-5 text-3xl font-black md:text-5xl">Everything your API product needs.</h2>
          <p className="mt-4 text-zinc-500">A clean foundation so you can focus on building your actual API services.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([Icon,title,desc]) => <div key={title} className="glass card-hover rounded-2xl p-6">
            <div className="icon-box"><Icon size={19}/></div>
            <h3 className="mt-5 font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">{desc}</p>
          </div>)}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="glass-premium rounded-3xl p-8 text-center md:p-12">
          <div className="icon-box mx-auto"><LockKeyhole size={19}/></div>
          <h2 className="mt-5 text-3xl font-black">Ready to build your API platform?</h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-500">Start with the included infrastructure, then plug in your real scraper services one by one.</p>
          <Link href="/register" className="btn-primary mt-7">Create your account <ArrowRight size={17}/></Link>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
