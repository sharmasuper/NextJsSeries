
"use client"

import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()

  function Add(data) {
    router.push(data)
  }
  return (
    <main className={styles.main}>
    <h1>Home Page</h1>    
     {/*Linking Routing  */}
    <Link href="/Login">Go to Login Page</Link> <br/>
    <Link href="/About">Go to about page</Link>
    <pre>
    </pre>
    {/* Navigation Routing */}
    {/* iskai liyai hamaai "use client" method ka use karna hoga */}
    

     <button onClick={()=>router.push("/About")}>Go to about page</button> <br/>
     <button onClick={()=>router.push("/Login")}>Go To Login Page</button> 
     
     {/* short method to use navigation */}
          <button onClick={()=>Add("/Login")}>Login short Method</button>
          <button onClick={()=>Add("/About")}>About short Method</button>
    
    </main>
  );
}

