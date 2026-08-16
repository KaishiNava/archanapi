import { NextResponse } from "next/server";
import { authenticateApiKey, logUsage } from "@/lib/api-auth";
export async function GET(request){
 const started=Date.now();const url=new URL(request.url);const auth=await authenticateApiKey(request);
 if(!auth.ok)return NextResponse.json({status:false,code:auth.status,message:auth.message},{status:auth.status});
 const target=url.searchParams.get("url");
 if(!target)return NextResponse.json({status:false,code:400,message:"Parameter url is required"},{status:400});
 let status=200;
 const result={status:true,code:200,creator:"ArchanaAPI",data:{url:target,title:null,author:null,media:[],note:"Connect your real TikTok scraper in services/tiktok.js"}};
 await logUsage(auth.admin,auth,{endpoint:"/api/v1/tiktok",method:"GET",statusCode:status,responseMs:Date.now()-started});
 return NextResponse.json(result);
}
