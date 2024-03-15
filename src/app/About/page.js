"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";


function page() {
    const router = useRouter()
function Add(data){
    router.push(data)
}

  return (
    <div>
      <h1>About page</h1>
      <Link href="/">Homepage</Link>
      <br/>
      {/* navigation */}
      <button onClick={()=>router.push("/")} >Go to Home using navigation</button>
   {/* short method to use navigation */}
    <button onClick={()=>Add("/")}>short Method To Go Home</button>

    </div>
  );
}

export default page;
