
'use client'
import styles from "./page.module.css";

export default function Home() {
  function apple(data) {
    alert(data)
  }
  return (
    <main className={styles.main}>
    <h1>Home Page</h1>     
 
 <button onClick={()=>alert("hello Next js")}>Click Me</button>
  {/* if not write use client in top of component it give error * we always write on the top of component  if home component have any child who import in page.js we did'nt 
     need to write use client again and again
  */}
  <button   onClick={()=>apple("mango")}>apple</button>
    </main>
  );
}

