export const dynamic = "force-dynamic";
import { createClient } from "@/lib/supabase/server";
import DashboardShell from "@/components/DashboardShell";
export default async function Page(){const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser();const {data:profile}=await supabase.from("profiles").select("*").eq("id",user.id).single();return <DashboardShell profile={profile}><div className="space-y-5"><div><h1 className="text-3xl font-black">Settings</h1></div><div className="glass rounded-2xl p-6"><p className="text-zinc-400">Pengaturan akun dasar siap. Password/email dikelola Supabase Auth.</p></div></div></DashboardShell>}
