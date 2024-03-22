import {  NextResponse } from "next/server"

export async function GET(request,content){
    //console.log(content)
    const studentDetails = content.params.student
    console.log(studentDetails)
  //  return new Response("all route catched")
  //agar mai isko new response kai sath return karvana chai ya return karvana chai to vo bhi kara sktai h
  return  NextResponse.json({result:studentDetails},{status:200})


}