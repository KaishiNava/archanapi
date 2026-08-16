 "use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
export default function Login(){
 const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(""); const [loading,setLoading]=useState(false);
 async function submit(e){e.preventDefault();setLoading(true);setError("");const supabase=createClient();const {error}=await supabase.auth.signInWithPassword({email,password});if(error)setError(error.message);else location.href="/dashboard";setLoading(false);}
 return <main className="grid-bg flex min-h-screen items-center justify-center p-5"><form onSubmit={submit} className="glass w-full max-w-md rounded-3xl p-7"><h1 className="text-3xl font-black">Welcome back</h1><p className="mt-2 text-zinc-500">Login ke ArchanaAPI.</p>{error&&<div className="mt-4 rounded-xl bg-red-500/10 p-3 text-sm text-red-300">{error}</div>}<input required type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 p-3 outline-none"/><input required type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 p-3 outline-none"/><button disabled={loading} className="mt-5 w-full rounded-xl bg-violet-600 p-3 font-bold">{loading?"Logging in…":"Login"}</button><p className="mt-5 text-sm text-zinc-500">Belum punya akun? <Link className="text-violet-300" href="/register">Register</Link></p></form></main>;
}
