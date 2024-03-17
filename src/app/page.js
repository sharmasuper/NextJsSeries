


import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  

  
  return (
    <main className={styles.main}>
    <h1>Home Page</h1>    
     {/*Linking Routing  */}
    <Link href="/Login">Go to Login Page</Link> <br/>
    <Link href="/About">Go to about page</Link>
    <pre>
    </pre>
  
   <Link href="/About/AboutStudent">NextTed About</Link>    <br/>
   <Link href="/About/AboutCollage">AboutCollage</Link><br/>

  <Link href="/ProductList">ProductList</Link>
  {/* Link dalana server api ka use karnai kai liy */}
     
     
         
    
    </main>
  );
}

