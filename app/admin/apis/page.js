import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import AdminApiManager from "@/components/AdminApiManager";
export default async function AdminApis(){const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser();if(!user)redirect("/login");const {data:profile}=await supabase.from("profiles").select("*").eq("id",user.id).single();if(!["owner","enterprise"].includes(profile?.role))redirect("/dashboard");const {data:apis}=await supabase.from("api_catalog").select("*").order("created_at",{ascending:false});return <main className="mx-auto max-w-7xl px-5 py-10"><AdminApiManager initialApis={apis||[]}/></main>}
