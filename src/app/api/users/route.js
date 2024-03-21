import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET () {
    const data = user;
     return NextResponse.json(data,{status:200})
}




export async function POST(request){    //two paramter are have request and response
                               //console.log(request)
   
   let payload = await request.json()

                                                         //   console.log(payload.name)                   // console.log(payload)
         console.log(payload)   //console.log(payload.name)     // console.log(payload)   // yai sab thunderClient per request send karkai terminal per check karna h
   
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"require field not found"})
    }
   return NextResponse.json({result:"hello",success : true},{status:201})

    //post api ko hum asai check nahi kar stai isliy hum postman or visual studeo code mai request send kartai h thunderclient per

}








