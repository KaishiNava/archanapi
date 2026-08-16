import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { generateApiKey, hashApiKey } from "@/lib/api-key";
export async function POST(request){
 const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser();if(!user)return NextResponse.json({status:false,message:"Unauthorized"},{status:401});
 const body=await request.json().catch(()=>({}));const key=generateApiKey();const hash=hashApiKey(key);
 const {data,error}=await supabase.from("api_keys").insert({user_id:user.id,name:body.name||"Default Key",key_prefix:key.slice(0,12),key_hash:hash,environment:"live"}).select("id,name,key_prefix,environment,status,last_used_at,created_at").single();
 if(error)return NextResponse.json({status:false,message:error.message},{status:400});
 return NextResponse.json({status:true,key,data});
}
export async function DELETE(request){
 const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser();if(!user)return NextResponse.json({status:false},{status:401});
 const id=new URL(request.url).searchParams.get("id");const {error}=await supabase.from("api_keys").update({status:"revoked"}).eq("id",id).eq("user_id",user.id);
 return NextResponse.json({status:!error,message:error?.message});
}
