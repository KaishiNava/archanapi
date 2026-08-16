import { createAdminClient } from "@/lib/supabase/admin";
import { hashApiKey } from "@/lib/api-key";
export async function authenticateApiKey(request){
 const auth=request.headers.get("authorization")||"";
 const key=auth.startsWith("Bearer ")?auth.slice(7).trim():"";
 if(!key)return {ok:false,status:401,message:"Missing Bearer API key"};
 const admin=createAdminClient();const hash=hashApiKey(key);
 const {data,error}=await admin.from("api_keys").select("id,user_id,status,environment").eq("key_hash",hash).single();
 if(error||!data||data.status!=="active")return {ok:false,status:401,message:"Invalid or revoked API key"};
 const {data:profile}=await admin.from("profiles").select("role,plan,daily_limit").eq("id",data.user_id).single();
 if(!profile)return {ok:false,status:403,message:"Profile not found"};
 return {ok:true,key:data,profile,admin};
}
export async function logUsage(admin,ctx,{endpoint,method,statusCode,responseMs}){
 await admin.from("api_usage").insert({user_id:ctx.key.user_id,api_key_id:ctx.key.id,endpoint,method,status_code:statusCode,response_ms:responseMs});
 await admin.from("api_keys").update({last_used_at:new Date().toISOString()}).eq("id",ctx.key.id);
}
