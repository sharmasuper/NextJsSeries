import { NextResponse } from "next/server";



export function middleware(request){
    // if(request.nextUrl.pathname!=="/Login"){
 return NextResponse.redirect(new URL("/Login",request.url))
    // }
}

// issai hum about ko login per redirect kartai h
// issai ek code ko redirect kartai one more code 
// export const config = {
//     matcher : "/About/:path*"
// }

//one more code ko redirect karna we use Array
export const config = {           //or bhi add kar sktai jsko redirect karna h
    matcher : ["/About/:path*","/StudentList/:path*"]
}
