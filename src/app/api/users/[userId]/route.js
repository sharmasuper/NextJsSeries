
import { user } from "@/util/db";

import { NextResponse } from "next/server";

export function GET (request,content) {
    console.log(content)
    const data = user;
      const userdata = data.filter((item)=>item.age === content.params.userId)



     return NextResponse.json(userdata.length === 0? {result:"No data found",success : false}:{result:userdata[0],success:true },{status:200})
}








