export const dynamic = "force-dynamic";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import DashboardShell from "@/components/DashboardShell";
export default async function Page(){const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser(); if(!user) redirect("/login");const {data:profile}=await supabase.from("profiles").select("*").eq("id",user.id).single();return <DashboardShell profile={profile}><div className="space-y-5"><div><h1 className="text-3xl font-black">Usage Analytics</h1></div><div className="glass rounded-2xl p-6"><p className="text-zinc-400">Usage tersimpan otomatis di tabel <code>api_usage</code>. Tambahkan chart/provider analytics sesuai kebutuhan.</p></div></div></DashboardShell>}
