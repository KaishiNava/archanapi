import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { apiDocs } from "@/lib/api-docs/registry";
export default function Docs(){return <><Navbar/><main className="mx-auto max-w-7xl px-5 py-12"><h1 className="text-4xl font-black">API Documentation</h1><p className="mt-2 text-zinc-400">Semua endpoint siap dipisahkan dan dikembangkan.</p><div className="mt-8 grid gap-4 md:grid-cols-2">{apiDocs.map(api=><Link href={"/docs/"+api.slug} key={api.slug} className="glass rounded-2xl p-6 hover:border-violet-400/30"><div className="text-xs text-violet-300">{api.method} · {api.category}</div><h2 className="mt-2 text-xl font-bold">{api.name}</h2><p className="mt-2 text-sm text-zinc-500">{api.description}</p><code className="mt-4 block text-xs text-zinc-400">{api.endpoint}</code></Link>)}</div></main><Footer/></>}
