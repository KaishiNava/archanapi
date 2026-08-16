export const dynamic = "force-dynamic";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import DashboardShell from "@/components/DashboardShell";
import ApiKeyManager from "@/components/ApiKeyManager";
export default async function Page(){const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser(); if(!user) redirect("/login");const {data:profile}=await supabase.from("profiles").select("*").eq("id",user.id).single();const {data:keys}=await supabase.from("api_keys").select("id,name,key_prefix,environment,status,last_used_at,created_at").eq("user_id",user.id).order("created_at",{ascending:false});return <DashboardShell profile={profile}><ApiKeyManager initialKeys={keys||[]}/></DashboardShell>}
