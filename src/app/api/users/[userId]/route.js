
import { user } from "@/util/db";


import { NextResponse } from "next/server";

export function GET (request,content) {
    console.log(content)
    const data = user;
      const userdata = data.filter((item)=>item.age === content.params.userId)

     return NextResponse.json(userdata.length === 0? {result:"No data found",success : false}:{result:userdata[0],success:true },{status:200})
}

//put api bana rahahu taki ek data ko access kar usmai changes kar sku
export async function PUT(request,content){
  let payload  = await request.json()
       // let age = content.params.age;
        payload.age = content.params.userId
        console.log("age payload",payload)
        //validation
      //  ismai !payload.age condition nahi lagagi bacause isper hmanai id ki condition lagai thi
        if( !payload.age || !payload.name || !payload.email){
          return NextResponse.json({result:"data is not valid",success:false},{status:400})
        }
          return NextResponse.json({result:payload,success:true},{status:200})
        
}


export function DELETE(request,content){
  let id = content.params.userId
 if(id){
  return NextResponse.json({result:"user deleted",success:true},{status:200})
 }else{
  return NextResponse.json({result:"user id not Valid ,Internal error please try after some time"},{status:400})
 }
}





