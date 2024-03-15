"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

 const Login = () =>{
    const router = useRouter()
    function Add(data){
     router.push(data)
    }
    return (
        <div>
            <h1>Login ...</h1>
            <Link href="/">Homepage</Link>
            <br/>
            {/* navigation */}
           <button onClick={()=>router.push("/")}>Go To Home Page using Navigation</button>

     {/* short navigation method  */}
        <button onClick={()=>Add("/")}>short navigation methid to go home </button>
        </div>
    )
}
export default Login
